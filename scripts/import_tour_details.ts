import { db } from '../lib/db';
import { tourDetails } from '../lib/tourDetails';

const langs = ['tr', 'en', 'de', 'ru'] as const;

function lines(items: string[]) {
  return items.join('\n');
}

async function main() {
  let updated = 0;
  let missing = 0;

  for (const [slug, detail] of Object.entries(tourDetails)) {
    const tour = await db.tour.findUnique({
      where: { slug },
      select: { id: true },
    });

    if (!tour) {
      console.warn(`Bulunamadı: ${slug}`);
      missing++;
      continue;
    }

    await db.tour.update({
      where: { slug },
      data: {
        detailDescTr: detail.description.tr,
        locationTr: detail.location.tr,
        durationTr: detail.duration.tr,
        includedTr: lines(detail.included.tr),
        excludedTr: lines(detail.excluded.tr),
        importantTr: lines(detail.important.tr),

        detailDescEn: detail.description.en,
        locationEn: detail.location.en,
        durationEn: detail.duration.en,
        includedEn: lines(detail.included.en),
        excludedEn: lines(detail.excluded.en),
        importantEn: lines(detail.important.en),

        detailDescDe: detail.description.de,
        locationDe: detail.location.de,
        durationDe: detail.duration.de,
        includedDe: lines(detail.included.de),
        excludedDe: lines(detail.excluded.de),
        importantDe: lines(detail.important.de),

        detailDescRu: detail.description.ru,
        locationRu: detail.location.ru,
        durationRu: detail.duration.ru,
        includedRu: lines(detail.included.ru),
        excludedRu: lines(detail.excluded.ru),
        importantRu: lines(detail.important.ru),
      },
    });

    console.log(`Aktarıldı: ${slug}`);
    updated++;
  }

  console.log('');
  console.log(`Tamamlandı. Güncellenen tur: ${updated}`);
  console.log(`Bulunamayan tur: ${missing}`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
