import Link from 'next/link';
import { notFound } from 'next/navigation';
import { db } from '@/lib/db';
import { tourDetails, type Lang } from '@/lib/tourDetails';

export const dynamic = 'force-dynamic';

const UI = {
  tr: {
    home: 'Ana Sayfa',
    tours: 'Turlar',
    categories: 'Kategoriler',
    contact: 'İletişim',
    back: 'Turlara Dön',
    description: 'Tur Açıklaması',
    duration: 'Süre',
    cancellation: 'Ücretsiz İptal',
    cancellationValue: '1 gün öncesine kadar',
    languages: 'Diller',
    region: 'Bölge',
    included: 'Tura Dahil Olanlar',
    excluded: 'Tura Dahil Olmayanlar',
    important: 'Önemli Bilgiler',
    startingFrom: 'Başlangıç fiyatı',
    perPerson: 'kişi başı / seçilen pakete göre',
    book: 'Rezervasyon Yap',
    whatsapp: 'WhatsApp ile Sor',
    help: 'Yardıma mı ihtiyacınız var?',
    support: 'Riviera Plus Yardım Merkezi',
    hours: 'Saatler',
    hoursValue: '10:00 - 19:00',
    whatsappSupport: 'WhatsApp Destek',
    contactForPrice: 'Fiyat için iletişime geçin',
  },
  en: {
    home: 'Home',
    tours: 'Tours',
    categories: 'Categories',
    contact: 'Contact',
    back: 'Back to Tours',
    description: 'Tour Description',
    duration: 'Duration',
    cancellation: 'Free Cancellation',
    cancellationValue: 'Up to 1 day before',
    languages: 'Languages',
    region: 'Region',
    included: 'Included',
    excluded: 'Not Included',
    important: 'Important Information',
    startingFrom: 'Starting price',
    perPerson: 'per person / depending on package',
    book: 'Book Now',
    whatsapp: 'Ask on WhatsApp',
    help: 'Need help?',
    support: 'Riviera Plus Help Center',
    hours: 'Hours',
    hoursValue: '10:00 - 19:00',
    whatsappSupport: 'WhatsApp Support',
    contactForPrice: 'Contact us for price',
  },
  de: {
    home: 'Startseite',
    tours: 'Touren',
    categories: 'Kategorien',
    contact: 'Kontakt',
    back: 'Zurück zu Touren',
    description: 'Tourbeschreibung',
    duration: 'Dauer',
    cancellation: 'Kostenlose Stornierung',
    cancellationValue: 'Bis 1 Tag vorher',
    languages: 'Sprachen',
    region: 'Region',
    included: 'Im Preis enthalten',
    excluded: 'Nicht enthalten',
    important: 'Wichtige Informationen',
    startingFrom: 'Startpreis',
    perPerson: 'pro Person / je nach Paket',
    book: 'Jetzt reservieren',
    whatsapp: 'Per WhatsApp fragen',
    help: 'Brauchen Sie Hilfe?',
    support: 'Riviera Plus Hilfezentrum',
    hours: 'Öffnungszeiten',
    hoursValue: '10:00 - 19:00',
    whatsappSupport: 'WhatsApp Support',
    contactForPrice: 'Preis auf Anfrage',
  },
  ru: {
    home: 'Главная',
    tours: 'Туры',
    categories: 'Категории',
    contact: 'Контакты',
    back: 'Назад к турам',
    description: 'Описание тура',
    duration: 'Продолжительность',
    cancellation: 'Бесплатная отмена',
    cancellationValue: 'До 1 дня до начала',
    languages: 'Языки',
    region: 'Регион',
    included: 'Включено',
    excluded: 'Не включено',
    important: 'Важная информация',
    startingFrom: 'Начальная цена',
    perPerson: 'за человека / зависит от пакета',
    book: 'Забронировать',
    whatsapp: 'Спросить в WhatsApp',
    help: 'Нужна помощь?',
    support: 'Центр помощи Riviera Plus',
    hours: 'Часы работы',
    hoursValue: '10:00 - 19:00',
    whatsappSupport: 'Поддержка WhatsApp',
    contactForPrice: 'Уточнить цену',
  },
} as const;

function getDbName(tour: any, lang: Lang) {
  if (lang === 'en') return tour.nameEn;
  if (lang === 'de') return tour.nameDe;
  if (lang === 'ru') return tour.nameRu;
  return tour.nameTr;
}

function getDbDescription(tour: any, lang: Lang) {
  if (lang === 'en') return tour.descEn;
  if (lang === 'de') return tour.descDe;
  if (lang === 'ru') return tour.descRu;
  return tour.descTr;
}

function safeLang(value: string | string[] | undefined): Lang {
  const first = Array.isArray(value) ? value[0] : value;
  if (first === 'en' || first === 'de' || first === 'ru') return first;
  return 'tr';
}

export default async function TourDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ lang?: string | string[] }>;
}) {
  const { slug } = await params;
  const query = await searchParams;
  const lang = safeLang(query.lang);

  const tour = await db.tour.findUnique({
    where: { slug },
  });

  if (!tour || !tour.active) {
    notFound();
  }

  const custom = tourDetails[slug];
  const t = UI[lang];

  const title = custom?.title[lang] || getDbName(tour, lang);
  const location =
    custom?.location[lang] ||
    (lang === 'tr' ? tour.pickup : tour.pickup);
  const duration =
    custom?.duration[lang] ||
    (lang === 'tr' ? tour.duration : tour.duration);
  const description =
    custom?.description[lang] || getDbDescription(tour, lang);

  const included = custom?.included[lang] || [];
  const excluded = custom?.excluded[lang] || [];
  const important = custom?.important[lang] || [];

  const price =
    tour.priceTry !== null && tour.priceTry !== undefined
      ? `${tour.priceTry} ₺`
      : t.contactForPrice;

  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '905000000000';

  const whatsappText = encodeURIComponent(
    `${title} - ${t.whatsapp}`
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

  return (
    <>
      <style>{`
        *{box-sizing:border-box}
        body{margin:0;background:#f4f6f7;color:#102b25;font-family:Arial,Helvetica,sans-serif}
        a{text-decoration:none;color:inherit}
        .topbar{background:#123f35;color:#fff}
        .topinner,.navinner,.wrap{max-width:1180px;margin:0 auto;padding-left:20px;padding-right:20px}
        .topinner{height:34px;display:flex;align-items:center;justify-content:space-between;font-size:12px}
        .langs{display:flex;gap:7px}
        .lang{border:1px solid rgba(255,255,255,.35);padding:4px 8px;border-radius:7px;font-weight:800}
        .lang.active{background:#e1be4b;color:#122f29;border-color:#e1be4b}
        .nav{background:#fff;border-bottom:1px solid #e5e9e8}
        .navinner{height:74px;display:flex;align-items:center;gap:32px}
        .logo{width:76px;height:48px;object-fit:contain;margin-right:auto}
        .menu{display:flex;gap:28px;font-size:14px;font-weight:800}
        .back{margin-left:auto;background:#173f36;color:#fff;padding:12px 18px;border-radius:10px;font-weight:800;font-size:14px}
        .wrap{padding-top:20px;padding-bottom:50px}
        .breadcrumb{font-size:13px;color:#64736f;margin-bottom:14px}
        .breadcrumb strong{color:#173f36}
        h1{font-size:42px;line-height:1.08;margin:0 0 8px;color:#102b25}
        .location{font-size:15px;font-weight:700;color:#5d6f69;margin-bottom:22px}
        .grid{display:grid;grid-template-columns:minmax(0,2fr) 320px;gap:22px;align-items:start}
        .heroimg{width:100%;height:395px;object-fit:cover;border-radius:17px;display:block}
        .card{background:#fff;border:1px solid #e1e6e4;border-radius:17px;box-shadow:0 8px 24px rgba(17,54,45,.06)}
        .content{margin-top:20px;padding:24px}
        .content h2{font-size:25px;margin:0 0 18px;padding-bottom:14px;border-bottom:1px solid #e7ebea}
        .content p{font-size:15px;line-height:1.8;color:#445751}
        .facts{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:18px 0 26px}
        .fact{background:#f5f7f7;border-radius:12px;padding:14px;min-height:94px}
        .fact small{display:block;color:#7a8985;margin-bottom:6px}
        .fact strong{display:block;font-size:14px;line-height:1.35}
        .section{margin-top:28px}
        .section h3{font-size:21px;margin:0 0 14px}
        .item{display:flex;gap:10px;align-items:flex-start;padding:8px 0;font-size:15px;line-height:1.5}
        .check{font-weight:900;color:#19664f}
        .cross{font-weight:900;color:#9e403a}
        .dot{font-weight:900;color:#b48e19}
        .booking{padding:20px;position:sticky;top:20px}
        .booking h3{font-size:19px;margin:0 0 8px}
        .booking .loc{font-size:12px;color:#6c7a76;margin-bottom:18px}
        .booking small{color:#7d8b87}
        .price{font-size:30px;font-weight:900;margin:5px 0 3px}
        .subprice{font-size:11px;color:#7d8b87;margin-bottom:16px}
        .btn{display:block;width:100%;border-radius:9px;padding:14px 12px;text-align:center;font-weight:900;margin-top:10px}
        .gold{background:#dfbd4e;color:#112e27;border:1px solid #a98d35}
        .green{background:#17483d;color:#fff}
        .help{padding:20px;margin-top:16px}
        .help h3{margin:0 0 18px;font-size:18px}
        .helprow{border-top:1px solid #e5e9e8;padding:12px 0;font-size:13px}
        .helprow:first-of-type{border-top:none}
        .helprow span{display:block;color:#8a9693;font-size:11px;margin-bottom:4px}
        .helprow strong{display:block}
        @media(max-width:850px){
          .menu{display:none}
          .grid{grid-template-columns:1fr}
          .booking{position:static}
          .facts{grid-template-columns:1fr 1fr}
          h1{font-size:32px}
          .heroimg{height:300px}
        }
        @media(max-width:520px){
          .facts{grid-template-columns:1fr}
          .topinner{padding-left:12px;padding-right:12px}
          .navinner{padding-left:12px;padding-right:12px}
          .wrap{padding-left:12px;padding-right:12px}
          .back{font-size:12px;padding:10px 12px}
          h1{font-size:28px}
          .heroimg{height:240px}
        }
      `}</style>

      <div className="topbar">
        <div className="topinner">
          <strong>RIVIERA PLUS • ANTALYA</strong>

          <div className="langs">
            {(['tr', 'en', 'de', 'ru'] as Lang[]).map((code) => (
              <Link
                key={code}
                href={`/tour/${slug}?lang=${code}`}
                className={`lang ${lang === code ? 'active' : ''}`}
              >
                {code.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="nav">
        <div className="navinner">
          <Link href={`/?lang=${lang}`}>
            <img className="logo" src="/logo.webp" alt="Riviera Plus Travel Agency" />
          </Link>

          <div className="menu">
            <Link href={`/?lang=${lang}`}>{t.home}</Link>
            <Link href={`/?lang=${lang}#turlar`}>{t.tours}</Link>
            <Link href={`/?lang=${lang}#kategoriler`}>{t.categories}</Link>
            <Link href={`/?lang=${lang}#iletisim`}>{t.contact}</Link>
          </div>

          <Link className="back" href={`/?lang=${lang}#turlar`}>
            ← {t.back}
          </Link>
        </div>
      </div>

      <main className="wrap">
        <div className="breadcrumb">
          <strong>{t.home}</strong> / <strong>{t.tours}</strong> / {title}
        </div>

        <h1>{title}</h1>
        <div className="location">{location}</div>

        <div className="grid">
          <div>
            <img
              className="heroimg"
              src={tour.image}
              alt={title}
            />

            <section className="card content">
              <h2>{t.description}</h2>

              <div className="facts">
                <div className="fact">
                  <small>{t.duration}</small>
                  <strong>{duration}</strong>
                </div>

                <div className="fact">
                  <small>{t.cancellation}</small>
                  <strong>{t.cancellationValue}</strong>
                </div>

                <div className="fact">
                  <small>{t.languages}</small>
                  <strong>Türkçe, English, Deutsch, Русский</strong>
                </div>

                <div className="fact">
                  <small>{t.region}</small>
                  <strong>{location}</strong>
                </div>
              </div>

              <p>{description}</p>

              {included.length > 0 && (
                <div className="section">
                  <h3>{t.included}</h3>
                  {included.map((item, index) => (
                    <div className="item" key={index}>
                      <span className="check">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}

              {excluded.length > 0 && (
                <div className="section">
                  <h3>{t.excluded}</h3>
                  {excluded.map((item, index) => (
                    <div className="item" key={index}>
                      <span className="cross">×</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}

              {important.length > 0 && (
                <div className="section">
                  <h3>{t.important}</h3>
                  {important.map((item, index) => (
                    <div className="item" key={index}>
                      <span className="dot">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </section>
          </div>

          <aside>
            <div className="card booking">
              <h3>{title}</h3>
              <div className="loc">{location}</div>

              <small>{t.startingFrom}</small>
              <div className="price">{price}</div>
              <div className="subprice">{t.perPerson}</div>

              <Link
                className="btn gold"
                href={`/?booking=${slug}&lang=${lang}`}
              >
                {t.book}
              </Link>

              <a
                className="btn green"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                {t.whatsapp}
              </a>
            </div>

            <div className="card help">
              <h3>{t.help}</h3>

              <div className="helprow">
                <span>Riviera Plus</span>
                <strong>{t.support}</strong>
              </div>

              <div className="helprow">
                <span>{t.hours}</span>
                <strong>{t.hoursValue}</strong>
              </div>

              <div className="helprow">
                <span>WhatsApp</span>
                <strong>{t.whatsappSupport}</strong>
              </div>

              <a
                className="btn green"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                {t.whatsappSupport}
              </a>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
