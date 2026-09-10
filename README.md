# RIVIERA PLUS TRAVEL AGENCY — Professional MVP

Bu sürüm statik prototipi gerçek bir Next.js + PostgreSQL + Prisma uygulamasına dönüştürür.

## Dahil
- 24 tur ve 24 yerel görsel
- PostgreSQL veritabanı
- Prisma ORM
- 4 dil alanı: TR/EN/DE/RU
- Admin giriş sistemi
- TRY/EUR/USD manuel fiyat yönetimi
- Gerçek rezervasyon kayıtları
- Rezervasyon kodu üretimi
- Stripe Checkout entegrasyon noktası
- Meta WhatsApp Cloud API entegrasyon noktası
- Responsive ön yüz

## Kurulum
1. Node.js 20+ kurulu olsun.
2. `.env.example` dosyasını `.env` olarak kopyalayın.
3. `docker compose up -d` ile PostgreSQL başlatın.
4. `npm install`
5. `npm run db:push`
6. `npm run db:seed`
7. `npm run dev`
8. `http://localhost:3000` açın.
9. Yönetim paneli: `http://localhost:3000/admin`

## Admin
`.env` içindeki ADMIN_EMAIL ve ADMIN_PASSWORD değerlerini değiştirin.

## Ödeme
Stripe için `STRIPE_SECRET_KEY` girilmelidir. Checkout endpoint `/api/checkout` üzerinden hazırdır. Canlıya çıkmadan önce webhook ile paymentStatus güncellenmelidir.

## WhatsApp
Meta WhatsApp Cloud API için META_WHATSAPP_TOKEN ve META_WHATSAPP_PHONE_NUMBER_ID girilmelidir. `/api/whatsapp` endpoint'i metin mesajı gönderir.

## Önemli
Bu paket üretim altyapısının çalışan MVP'sidir. Canlı ödeme için Stripe hesabı/merchant doğrulaması, webhook, alan adı/HTTPS ve gerçek WhatsApp Business hesabı bilgileri gerekir. Hukuki metinler ve KVKK/mesafeli satış metinleri işletme bilgilerine göre ayrıca doldurulmalıdır.
