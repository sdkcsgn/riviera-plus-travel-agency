import { db } from '@/lib/db';
import { isAdmin, login, logout } from '@/lib/auth';
import { revalidatePath } from 'next/cache';

async function signIn(formData: FormData) {
  'use server';

  const ok = await login(
    String(formData.get('email') ?? ''),
    String(formData.get('password') ?? '')
  );

  if (!ok) {
    throw new Error('Giriş bilgileri hatalı');
  }

  revalidatePath('/admin');
}

async function signOut() {
  'use server';
  await logout();
  revalidatePath('/admin');
}

function text(formData: FormData, key: string) {
  return String(formData.get(key) ?? '').trim();
}

function nullableNumber(formData: FormData, key: string) {
  const value = text(formData, key);
  return value === '' ? null : Number(value);
}

async function saveTour(formData: FormData) {
  'use server';

  if (!(await isAdmin())) return;

  const id = Number(formData.get('id'));

  await db.tour.update({
    where: { id },
    data: {
      nameTr: text(formData, 'nameTr'),
      nameEn: text(formData, 'nameEn'),
      nameDe: text(formData, 'nameDe'),
      nameRu: text(formData, 'nameRu'),

      descTr: text(formData, 'descTr'),
      descEn: text(formData, 'descEn'),
      descDe: text(formData, 'descDe'),
      descRu: text(formData, 'descRu'),

      category: text(formData, 'category'),
      image: text(formData, 'image'),
      duration: text(formData, 'duration'),
      pickup: text(formData, 'pickup'),

      detailDescTr: text(formData, 'detailDescTr'),
      locationTr: text(formData, 'locationTr'),
      durationTr: text(formData, 'durationTr'),
      includedTr: text(formData, 'includedTr'),
      excludedTr: text(formData, 'excludedTr'),
      importantTr: text(formData, 'importantTr'),

      detailDescEn: text(formData, 'detailDescEn'),
      locationEn: text(formData, 'locationEn'),
      durationEn: text(formData, 'durationEn'),
      includedEn: text(formData, 'includedEn'),
      excludedEn: text(formData, 'excludedEn'),
      importantEn: text(formData, 'importantEn'),

      detailDescDe: text(formData, 'detailDescDe'),
      locationDe: text(formData, 'locationDe'),
      durationDe: text(formData, 'durationDe'),
      includedDe: text(formData, 'includedDe'),
      excludedDe: text(formData, 'excludedDe'),
      importantDe: text(formData, 'importantDe'),

      detailDescRu: text(formData, 'detailDescRu'),
      locationRu: text(formData, 'locationRu'),
      durationRu: text(formData, 'durationRu'),
      includedRu: text(formData, 'includedRu'),
      excludedRu: text(formData, 'excludedRu'),
      importantRu: text(formData, 'importantRu'),

      priceTry: nullableNumber(formData, 'priceTry'),
      priceEur: nullableNumber(formData, 'priceEur'),
      priceUsd: nullableNumber(formData, 'priceUsd'),

      active: formData.get('active') === 'on',
    },
  });

  revalidatePath('/admin');
  revalidatePath('/');
  revalidatePath(`/tour/${text(formData, 'slug')}`);
}

const inputStyle = {
  width: '100%',
  padding: '10px 12px',
  border: '1px solid #d7d7d7',
  borderRadius: 8,
  background: '#fff',
  color: '#111',
} as const;

const textareaStyle = {
  ...inputStyle,
  minHeight: 95,
  resize: 'vertical',
} as const;

const labelStyle = {
  display: 'grid',
  gap: 6,
  fontWeight: 600,
  fontSize: 14,
} as const;

const grid2 = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: 14,
} as const;

const grid3 = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
  gap: 14,
} as const;

function LanguageFields({
  lang,
  label,
  tour,
}: {
  lang: 'Tr' | 'En' | 'De' | 'Ru';
  label: string;
  tour: any;
}) {
  const suffix = lang;

  return (
    <details
      style={{
        border: '1px solid #e5e5e5',
        borderRadius: 12,
        padding: 14,
        background: '#fafafa',
      }}
      open={lang === 'Tr'}
    >
      <summary style={{ cursor: 'pointer', fontWeight: 800, fontSize: 16 }}>
        {label}
      </summary>

      <div style={{ display: 'grid', gap: 14, marginTop: 16 }}>
        <label style={labelStyle}>
          Tur Başlığı
          <input
            name={`name${suffix}`}
            defaultValue={tour[`name${suffix}`] ?? ''}
            style={inputStyle}
            required
          />
        </label>

        <label style={labelStyle}>
          Ana Sayfa Kısa Açıklaması
          <textarea
            name={`desc${suffix}`}
            defaultValue={tour[`desc${suffix}`] ?? ''}
            style={textareaStyle}
            required
          />
        </label>

        <label style={labelStyle}>
          Detaylı Açıklama
          <textarea
            name={`detailDesc${suffix}`}
            defaultValue={tour[`detailDesc${suffix}`] ?? ''}
            style={{ ...textareaStyle, minHeight: 150 }}
          />
        </label>

        <div style={grid2}>
          <label style={labelStyle}>
            Konum
            <input
              name={`location${suffix}`}
              defaultValue={tour[`location${suffix}`] ?? ''}
              style={inputStyle}
            />
          </label>

          <label style={labelStyle}>
            Süre
            <input
              name={`duration${suffix}`}
              defaultValue={tour[`duration${suffix}`] ?? ''}
              style={inputStyle}
            />
          </label>
        </div>

        <label style={labelStyle}>
          Fiyata Dahil Olanlar
          <textarea
            name={`included${suffix}`}
            defaultValue={tour[`included${suffix}`] ?? ''}
            style={textareaStyle}
            placeholder="Her maddeyi ayrı satıra yazın"
          />
        </label>

        <label style={labelStyle}>
          Fiyata Dahil Olmayanlar
          <textarea
            name={`excluded${suffix}`}
            defaultValue={tour[`excluded${suffix}`] ?? ''}
            style={textareaStyle}
            placeholder="Her maddeyi ayrı satıra yazın"
          />
        </label>

        <label style={labelStyle}>
          Önemli Bilgiler
          <textarea
            name={`important${suffix}`}
            defaultValue={tour[`important${suffix}`] ?? ''}
            style={textareaStyle}
            placeholder="Her maddeyi ayrı satıra yazın"
          />
        </label>
      </div>
    </details>
  );
}

export default async function Admin() {
  if (!(await isAdmin())) {
    return (
      <main className="login">
        <form action={signIn} className="loginbox">
          <h1>RIVIERA PLUS</h1>
          <p>Yönetim Paneli</p>
          <input name="email" type="email" placeholder="Admin e-posta" required />
          <input name="password" type="password" placeholder="Şifre" required />
          <button className="btn gold">Giriş Yap</button>
        </form>
      </main>
    );
  }

  const tours = await db.tour.findMany({ orderBy: { id: 'asc' } });
  const bookings = await db.booking.findMany({
    include: { tour: true },
    orderBy: { createdAt: 'desc' },
    take: 20,
  });

  return (
    <main className="admin">
      <div className="container">
        <div className="head">
          <div>
            <span className="eyebrow">RIVIERA PLUS</span>
            <h2>Yönetim Paneli</h2>
          </div>

          <form action={signOut}>
            <button className="btn">Çıkış</button>
          </form>
        </div>

        <h3>Tur İçerik Yönetimi</h3>
        <p className="notice">
          Başlıkları, açıklamaları, detay bilgilerini ve fiyatları buradan
          değiştirebilirsiniz. Dahil / hariç / önemli bilgiler alanlarında her
          maddeyi ayrı satıra yazın.
        </p>

        <div style={{ display: 'grid', gap: 20 }}>
          {tours.map((tour) => (
            <details
              key={tour.id}
              style={{
                border: '1px solid #ddd',
                borderRadius: 14,
                padding: 16,
                background: '#fff',
              }}
            >
              <summary
                style={{
                  cursor: 'pointer',
                  fontSize: 18,
                  fontWeight: 800,
                }}
              >
                #{tour.id} — {tour.nameTr}
              </summary>

              <form
                action={saveTour}
                style={{ display: 'grid', gap: 18, marginTop: 20 }}
              >
                <input type="hidden" name="id" value={tour.id} />
                <input type="hidden" name="slug" value={tour.slug} />

                <div style={grid2}>
                  <label style={labelStyle}>
                    Kategori
                    <input
                      name="category"
                      defaultValue={tour.category}
                      style={inputStyle}
                      required
                    />
                  </label>

                  <label style={labelStyle}>
                    Görsel Yolu
                    <input
                      name="image"
                      defaultValue={tour.image}
                      style={inputStyle}
                      required
                    />
                  </label>
                </div>

                <div style={grid2}>
                  <label style={labelStyle}>
                    Genel Süre
                    <input
                      name="duration"
                      defaultValue={tour.duration}
                      style={inputStyle}
                    />
                  </label>

                  <label style={labelStyle}>
                    Genel Alış Noktası / Bölge
                    <input
                      name="pickup"
                      defaultValue={tour.pickup}
                      style={inputStyle}
                    />
                  </label>
                </div>

                <LanguageFields lang="Tr" label="🇹🇷 Türkçe" tour={tour} />
                <LanguageFields lang="En" label="🇬🇧 English" tour={tour} />
                <LanguageFields lang="De" label="🇩🇪 Deutsch" tour={tour} />
                <LanguageFields lang="Ru" label="🇷🇺 Русский" tour={tour} />

                <div style={grid3}>
                  <label style={labelStyle}>
                    TRY Fiyatı
                    <input
                      name="priceTry"
                      type="number"
                      min="0"
                      defaultValue={tour.priceTry ?? ''}
                      style={inputStyle}
                    />
                  </label>

                  <label style={labelStyle}>
                    EUR Fiyatı
                    <input
                      name="priceEur"
                      type="number"
                      min="0"
                      defaultValue={tour.priceEur ?? ''}
                      style={inputStyle}
                    />
                  </label>

                  <label style={labelStyle}>
                    USD Fiyatı
                    <input
                      name="priceUsd"
                      type="number"
                      min="0"
                      defaultValue={tour.priceUsd ?? ''}
                      style={inputStyle}
                    />
                  </label>
                </div>

                <label
                  style={{
                    display: 'flex',
                    gap: 10,
                    alignItems: 'center',
                    fontWeight: 700,
                  }}
                >
                  <input
                    type="checkbox"
                    name="active"
                    defaultChecked={tour.active}
                  />
                  Tur sitede aktif
                </label>

                <button
                  className="btn gold"
                  type="submit"
                  style={{ justifySelf: 'start', minWidth: 180 }}
                >
                  Değişiklikleri Kaydet
                </button>
              </form>
            </details>
          ))}
        </div>

        <h3 style={{ marginTop: 50 }}>Son Rezervasyonlar</h3>

        <table>
          <thead>
            <tr>
              <th>Kod</th>
              <th>Tur</th>
              <th>Müşteri</th>
              <th>Tarih</th>
              <th>Durum</th>
              <th>Ödeme</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.code}</td>
                <td>{booking.tour.nameTr}</td>
                <td>
                  {booking.name}
                  <br />
                  {booking.phone}
                </td>
                <td>{new Date(booking.date).toLocaleDateString('tr-TR')}</td>
                <td>{booking.status}</td>
                <td>{booking.paymentStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
