'use client';

import {useEffect, useMemo, useState} from 'react';
import type {FormEvent} from 'react';
import type {Tour} from '@prisma/client';

type Lang = 'tr' | 'en' | 'de' | 'ru';

const translations = {
  tr: {
    location: 'Antalya • Akdeniz • Türkiye',
    tours: 'Turlar',
    categories: 'Kategoriler',
    about: 'Hakkımızda',
    contact: 'İletişim',
    discover: 'Turları Keşfet',

    heroTitle1: "Antalya'yı",
    heroTitle2: 'RIVIERA PLUS',
    heroTitle3: 'ile keşfedin.',
    heroText:
      'Tekne turlarından su sporlarına, safari maceralarından wellness deneyimlerine kadar 24 seçilmiş deneyim.',

    where: 'NEREYE?',
    antalya: 'Antalya & çevresi',
    experience: 'DENEYİM',
    allCategories: 'Tüm kategoriler',
    search: 'ARA',
    searchPlaceholder: 'Tur adı veya aktivite...',
    searchButton: 'Ara',

    tourExperience: 'Tur & deneyim',
    language: 'Dil',
    localExperiences: 'Yerel deneyimler',
    bookingRequest247: 'Rezervasyon',

    chooseExperience: 'Deneyiminizi seçin',
    chooseExperienceText:
      'Deniz, doğa, macera, wellness ve kültür seçeneklerini tek yerde keşfedin.',
    all: 'Tümü',

    options: '24 SEÇENEK',
    popularTours: 'Popüler Turlar',
    toursShown: 'tur gösteriliyor',

    startingFrom: 'KİŞİ BAŞI',
    contactForPrice: 'Fiyat için iletişime geçin',
    details: 'Detayları Gör →',

    bannerTitle:
      "Antalya'da sıradan bir tatil değil, güzel bir deneyim yaşayın.",
    bannerText:
      'Turunuzu seçin, fiyatı görüntüleyin ve rezervasyon talebinizi kolayca oluşturun.',
    viewTours: 'Turları İncele',

    whoWeAre: 'BİZ KİMİZ?',
    aboutText:
      'Antalya ve Akdeniz çevresindeki deneyimleri modern bir rezervasyon deneyiminde buluşturmak için tasarlanmış seyahat platformu.',

    footerText: "Antalya'nın deneyimlerini keşfedin.",
    menu: 'Menü',
    legal: 'Yasal',
    privacy: 'Gizlilik',
    kvkk: 'KVKK',
    cookies: 'Çerezler',

    booking: 'REZERVASYON',
    bookingRequest: 'Rezervasyon Talebi',
    fullName: 'Ad Soyad',
    email: 'E-posta',
    phone: 'Telefon / WhatsApp',
    adults: 'Yetişkin',
    children: 'Çocuk',
    note: 'Otel, alınış noktası, özel istek...',
    sendBooking: 'Rezervasyon Talebi Gönder',
    bookingSuccess:
      'Rezervasyon talebiniz alındı. En kısa sürede sizinle iletişime geçeceğiz.',
    bookingError: 'Rezervasyon gönderilemedi.',
  },

  en: {
    location: 'Antalya • Mediterranean • Türkiye',
    tours: 'Tours',
    categories: 'Categories',
    about: 'About Us',
    contact: 'Contact',
    discover: 'Explore Tours',

    heroTitle1: 'Discover Antalya',
    heroTitle2: 'with RIVIERA PLUS',
    heroTitle3: '',
    heroText:
      '24 carefully selected experiences, from boat tours and water sports to safari adventures and wellness.',

    where: 'WHERE?',
    antalya: 'Antalya & surroundings',
    experience: 'EXPERIENCE',
    allCategories: 'All categories',
    search: 'SEARCH',
    searchPlaceholder: 'Tour name or activity...',
    searchButton: 'Search',

    tourExperience: 'Tours & experiences',
    language: 'Languages',
    localExperiences: 'Local experiences',
    bookingRequest247: 'Reservations',

    chooseExperience: 'Choose your experience',
    chooseExperienceText:
      'Discover sea, nature, adventure, wellness and cultural experiences in one place.',
    all: 'All',

    options: '24 OPTIONS',
    popularTours: 'Popular Tours',
    toursShown: 'tours shown',

    startingFrom: 'PER PERSON',
    contactForPrice: 'Contact us for price',
    details: 'View Details →',

    bannerTitle:
      'Experience more than an ordinary holiday in Antalya.',
    bannerText:
      'Choose your tour, view the price and easily send your booking request.',
    viewTours: 'View Tours',

    whoWeAre: 'WHO ARE WE?',
    aboutText:
      'A travel platform designed to bring Antalya and Mediterranean experiences together with a modern booking experience.',

    footerText: 'Discover the experiences of Antalya.',
    menu: 'Menu',
    legal: 'Legal',
    privacy: 'Privacy',
    kvkk: 'Data Protection',
    cookies: 'Cookies',

    booking: 'BOOKING',
    bookingRequest: 'Booking Request',
    fullName: 'Full Name',
    email: 'Email',
    phone: 'Phone / WhatsApp',
    adults: 'Adults',
    children: 'Children',
    note: 'Hotel, pickup point, special requests...',
    sendBooking: 'Send Booking Request',
    bookingSuccess:
      'Your booking request has been received. We will contact you as soon as possible.',
    bookingError: 'Booking request could not be sent.',
  },

  de: {
    location: 'Antalya • Mittelmeer • Türkiye',
    tours: 'Touren',
    categories: 'Kategorien',
    about: 'Über uns',
    contact: 'Kontakt',
    discover: 'Touren entdecken',

    heroTitle1: 'Entdecken Sie Antalya',
    heroTitle2: 'mit RIVIERA PLUS',
    heroTitle3: '',
    heroText:
      '24 ausgewählte Erlebnisse – von Bootstouren und Wassersport bis zu Safari-Abenteuern und Wellness.',

    where: 'WOHIN?',
    antalya: 'Antalya & Umgebung',
    experience: 'ERLEBNIS',
    allCategories: 'Alle Kategorien',
    search: 'SUCHE',
    searchPlaceholder: 'Tour oder Aktivität suchen...',
    searchButton: 'Suchen',

    tourExperience: 'Touren & Erlebnisse',
    language: 'Sprachen',
    localExperiences: 'Lokale Erlebnisse',
    bookingRequest247: 'Reservierung',

    chooseExperience: 'Wählen Sie Ihr Erlebnis',
    chooseExperienceText:
      'Entdecken Sie Meer, Natur, Abenteuer, Wellness und Kultur an einem Ort.',
    all: 'Alle',

    options: '24 OPTIONEN',
    popularTours: 'Beliebte Touren',
    toursShown: 'Touren angezeigt',

    startingFrom: 'PRO PERSON',
    contactForPrice: 'Preis auf Anfrage',
    details: 'Details ansehen →',

    bannerTitle:
      'Erleben Sie in Antalya mehr als nur einen gewöhnlichen Urlaub.',
    bannerText:
      'Wählen Sie Ihre Tour, sehen Sie den Preis und senden Sie ganz einfach Ihre Reservierungsanfrage.',
    viewTours: 'Touren ansehen',

    whoWeAre: 'ÜBER UNS',
    aboutText:
      'Eine Reiseplattform, die Erlebnisse in Antalya und am Mittelmeer mit einem modernen Buchungserlebnis verbindet.',

    footerText: 'Entdecken Sie die Erlebnisse von Antalya.',
    menu: 'Menü',
    legal: 'Rechtliches',
    privacy: 'Datenschutz',
    kvkk: 'Datenschutz',
    cookies: 'Cookies',

    booking: 'RESERVIERUNG',
    bookingRequest: 'Reservierung anfragen',
    fullName: 'Vor- und Nachname',
    email: 'E-Mail',
    phone: 'Telefon / WhatsApp',
    adults: 'Erwachsene',
    children: 'Kinder',
    note: 'Hotel, Abholort, besondere Wünsche...',
    sendBooking: 'Reservierungsanfrage senden',
    bookingSuccess:
      'Ihre Reservierungsanfrage wurde erhalten. Wir kontaktieren Sie so schnell wie möglich.',
    bookingError: 'Reservierungsanfrage konnte nicht gesendet werden.',
  },

  ru: {
    location: 'Анталья • Средиземноморье • Турция',
    tours: 'Туры',
    categories: 'Категории',
    about: 'О нас',
    contact: 'Контакты',
    discover: 'Посмотреть туры',

    heroTitle1: 'Откройте Анталью',
    heroTitle2: 'с RIVIERA PLUS',
    heroTitle3: '',
    heroText:
      '24 тщательно отобранных варианта отдыха: морские прогулки, водные развлечения, сафари, wellness и многое другое.',

    where: 'КУДА?',
    antalya: 'Анталья и окрестности',
    experience: 'РАЗВЛЕЧЕНИЕ',
    allCategories: 'Все категории',
    search: 'ПОИСК',
    searchPlaceholder: 'Название тура или активности...',
    searchButton: 'Найти',

    tourExperience: 'Туры и развлечения',
    language: 'Языка',
    localExperiences: 'Местные развлечения',
    bookingRequest247: 'Бронирование',

    chooseExperience: 'Выберите впечатление',
    chooseExperienceText:
      'Море, природа, приключения, wellness и культура — всё в одном месте.',
    all: 'Все',

    options: '24 ВАРИАНТА',
    popularTours: 'Популярные туры',
    toursShown: 'туров показано',

    startingFrom: 'ЗА ЧЕЛОВЕКА',
    contactForPrice: 'Уточните цену',
    details: 'Подробнее →',

    bannerTitle:
      'Проведите в Анталье не просто отпуск, а незабываемое путешествие.',
    bannerText:
      'Выберите тур, посмотрите цену и легко отправьте заявку на бронирование.',
    viewTours: 'Посмотреть туры',

    whoWeAre: 'О НАС',
    aboutText:
      'Туристическая платформа, объединяющая лучшие впечатления Антальи и Средиземноморья с современной системой бронирования.',

    footerText: 'Откройте для себя Анталью.',
    menu: 'Меню',
    legal: 'Правовая информация',
    privacy: 'Конфиденциальность',
    kvkk: 'Защита данных',
    cookies: 'Файлы cookie',

    booking: 'БРОНИРОВАНИЕ',
    bookingRequest: 'Забронировать',
    fullName: 'Имя и фамилия',
    email: 'Электронная почта',
    phone: 'Телефон / WhatsApp',
    adults: 'Взрослые',
    children: 'Дети',
    note: 'Отель, место встречи, особые пожелания...',
    sendBooking: 'Отправить заявку',
    bookingSuccess:
      'Ваша заявка получена. Мы свяжемся с вами в ближайшее время.',
    bookingError: 'Не удалось отправить заявку.',
  },
};

const languageLabels: Record<Lang, string> = {
  tr: '🇹🇷 TR',
  en: '🇬🇧 EN',
  de: '🇩🇪 DE',
  ru: '🇷🇺 RU',
};

function getTourName(tour: Tour, lang: Lang) {
  if (lang === 'en') return tour.nameEn || tour.nameTr;
  if (lang === 'de') return tour.nameDe || tour.nameTr;
  if (lang === 'ru') return tour.nameRu || tour.nameTr;
  return tour.nameTr;
}

function getTourDescription(tour: Tour, lang: Lang) {
  if (lang === 'en') return tour.descEn || tour.descTr;
  if (lang === 'de') return tour.descDe || tour.descTr;
  if (lang === 'ru') return tour.descRu || tour.descTr;
  return tour.descTr;
}

function getCategoryName(category: string, lang: Lang) {
  const categories: Record<string, Record<Lang, string>> = {
    'Tekne Turları': {
      tr: 'Tekne Turları',
      en: 'Boat Tours',
      de: 'Bootstouren',
      ru: 'Морские прогулки',
    },

    'Deniz Macera': {
      tr: 'Deniz Macera',
      en: 'Sea Adventure',
      de: 'Meeresabenteuer',
      ru: 'Морские приключения',
    },

    'Hava Macera': {
      tr: 'Hava Macera',
      en: 'Air Adventure',
      de: 'Luftabenteuer',
      ru: 'Воздушные приключения',
    },

    'VIP Deneyimler': {
      tr: 'VIP Deneyimler',
      en: 'VIP Experiences',
      de: 'VIP-Erlebnisse',
      ru: 'VIP-впечатления',
    },

    'Doğa Turları': {
      tr: 'Doğa Turları',
      en: 'Nature Tours',
      de: 'Naturtouren',
      ru: 'Природные туры',
    },

    'Wellness & Spa': {
      tr: 'Wellness & Spa',
      en: 'Wellness & Spa',
      de: 'Wellness & Spa',
      ru: 'Wellness и SPA',
    },

    'Kombine Turlar': {
      tr: 'Kombine Turlar',
      en: 'Combo Tours',
      de: 'Kombitouren',
      ru: 'Комбинированные туры',
    },

    'Özel Deneyimler': {
      tr: 'Özel Deneyimler',
      en: 'Special Experiences',
      de: 'Besondere Erlebnisse',
      ru: 'Особые впечатления',
    },

    'Aile & Eğlence': {
      tr: 'Aile & Eğlence',
      en: 'Family & Fun',
      de: 'Familie & Spaß',
      ru: 'Семья и развлечения',
    },

    'Kültür Turları': {
      tr: 'Kültür Turları',
      en: 'Cultural Tours',
      de: 'Kulturtouren',
      ru: 'Культурные туры',
    },

    'Şehir Turları': {
      tr: 'Şehir Turları',
      en: 'City Tours',
      de: 'Stadttouren',
      ru: 'Городские туры',
    },

    'Doğa Macera': {
      tr: 'Doğa Macera',
      en: 'Nature Adventure',
      de: 'Naturabenteuer',
      ru: 'Приключения на природе',
    },

    'Deniz Turları': {
      tr: 'Deniz Turları',
      en: 'Sea Tours',
      de: 'Meerestouren',
      ru: 'Морские туры',
    },
  };

  return categories[category]?.[lang] || category;
}

function getPickupText(pickup: string, lang: Lang) {
  const pickupMap: Record<string, Record<Lang, string>> = {
    'Antalya bölgesi': {
      tr: 'Antalya bölgesi',
      en: 'Antalya region',
      de: 'Region Antalya',
      ru: 'Регион Антальи',
    },
  };

  return pickupMap[pickup]?.[lang] || pickup;
}

function getDurationText(duration: string, lang: Lang) {
  const durationMap: Record<string, Record<Lang, string>> = {
    'Süre seçilebilir': {
      tr: 'Süre seçilebilir',
      en: 'Duration can be selected',
      de: 'Dauer wählbar',
      ru: 'Продолжительность на выбор',
    },
  };

  return durationMap[duration]?.[lang] || duration;
}

export default function HomeClient({tours}: {tours: Tour[]}) {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState('');
  const [selected, setSelected] = useState<Tour | null>(null);
  const [book, setBook] = useState(false);
  const [lang, setLang] = useState<Lang>('tr');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get('lang');
    const saved = window.localStorage.getItem('riviera-language');

    if (
      urlLang === 'tr' ||
      urlLang === 'en' ||
      urlLang === 'de' ||
      urlLang === 'ru'
    ) {
      setLang(urlLang);
    } else if (
      saved === 'tr' ||
      saved === 'en' ||
      saved === 'de' ||
      saved === 'ru'
    ) {
      setLang(saved);
    }

    const bookingSlug = params.get('booking');

    if (bookingSlug) {
      const bookingTour = tours.find(
        (tour) => tour.slug === bookingSlug,
      );

      if (bookingTour) {
        setSelected(bookingTour);
        setBook(true);
      }
    }
  }, [tours]);

  useEffect(() => {
    window.localStorage.setItem('riviera-language', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const closeBookingFlow = () => {
    setBook(false);
    setSelected(null);

    const url = new URL(window.location.href);
    url.searchParams.delete('booking');
    const query = url.searchParams.toString();
    window.history.replaceState({}, '', `${url.pathname}${query ? `?${query}` : ''}${url.hash}`);
  };

  const t = translations[lang];

  const cats = useMemo(
    () => [...new Set(tours.map((tour) => tour.category))],
    [tours],
  );

  const filtered = tours.filter((tour) => {
    const name = getTourName(tour, lang);
    const description = getTourDescription(tour, lang);

    return (
      (!cat || tour.category === cat) &&
      (!q ||
        `${name} ${description}`
          .toLocaleLowerCase()
          .includes(q.toLocaleLowerCase()))
    );
  });

  return (
    <>
      <div className="top">
        <div className="container">
          <span>{t.location}</span>

          <select
            value={lang}
            onChange={(e) => setLang(e.target.value as Lang)}
            aria-label="Language"
            style={{
              background: 'transparent',
              border: '1px solid rgba(255,255,255,.45)',
              borderRadius: '8px',
              color: 'inherit',
              padding: '5px 9px',
              cursor: 'pointer',
            }}
          >
            {(Object.keys(languageLabels) as Lang[]).map((language) => (
              <option
                key={language}
                value={language}
                style={{color: '#111'}}
              >
                {languageLabels[language]}
              </option>
            ))}
          </select>
        </div>
      </div>

      <header className="nav container">
        <a href="/">
          <img
            className="logo"
            src="/logo.webp"
            alt="Riviera Plus Travel Agency"
          />
        </a>

        <nav className="navlinks">
          <a href="#turlar">{t.tours}</a>
          <a href="#kategoriler">{t.categories}</a>
          <a href="#hakkimizda">{t.about}</a>
          <a href="#iletisim">{t.contact}</a>
        </nav>

        <a className="btn gold" href="#turlar">
          {t.discover}
        </a>
      </header>

      <section className="hero">
        <div className="container">
          <span className="eyebrow">RIVIERA PLUS EXPERIENCE</span>

          <h1>
            {t.heroTitle1}{' '}
            <span>{t.heroTitle2}</span>{' '}
            {t.heroTitle3}
          </h1>

          <p>{t.heroText}</p>

          <div className="search">
            <div>
              <small>{t.where}</small>
              <b>{t.antalya}</b>
            </div>

            <div>
              <small>{t.experience}</small>

              <select
                value={cat}
                onChange={(e) => setCat(e.target.value)}
              >
                <option value="">{t.allCategories}</option>

                {cats.map((category) => (
                  <option key={category} value={category}>
                    {getCategoryName(category, lang)}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <small>{t.search}</small>

              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder={t.searchPlaceholder}
              />
            </div>

            <button
              className="btn"
              onClick={() =>
                document
                  .getElementById('turlar')
                  ?.scrollIntoView({behavior: 'smooth'})
              }
            >
              {t.searchButton}
            </button>
          </div>
        </div>
      </section>

      <div className="strip">
        <div className="container stripgrid">
          <div>
            <b>24</b>
            <span>{t.tourExperience}</span>
          </div>

          <div>
            <b>4</b>
            <span>{t.language}</span>
          </div>

          <div>
            <b>Antalya</b>
            <span>{t.localExperiences}</span>
          </div>

          <div>
            <b>7/24</b>
            <span>{t.bookingRequest247}</span>
          </div>
        </div>
      </div>

      <section id="kategoriler">
        <div className="container">
          <div className="head">
            <div>
              <span className="eyebrow">RIVIERA PLUS</span>
              <h2>{t.chooseExperience}</h2>
            </div>

            <p>{t.chooseExperienceText}</p>
          </div>

          <div className="chips">
            <button className="chip" onClick={() => setCat('')}>
              {t.all}
            </button>

            {cats.map((category) => (
              <button
                className="chip"
                key={category}
                onClick={() => {
                  setCat(category);

                  document
                    .getElementById('turlar')
                    ?.scrollIntoView({behavior: 'smooth'});
                }}
              >
                {getCategoryName(category, lang)}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="turlar">
        <div className="container">
          <div className="head">
            <div>
              <span className="eyebrow">{t.options}</span>
              <h2>{t.popularTours}</h2>
            </div>

            <p>
              {filtered.length} {t.toursShown}
            </p>
          </div>

          <div className="grid">
            {filtered.map((tour) => {
              const name = getTourName(tour, lang);
              const description = getTourDescription(tour, lang);

              return (
                <article className="card" key={tour.id}>
                  <div className="photo">
                    <img src={tour.image} alt={name} />

                    <span className="num">
                      {String(tour.id).padStart(2, '0')}
                    </span>

                    <span className="cat">
                      {getCategoryName(tour.category, lang)}
                    </span>
                  </div>

                  <div className="body">
                    <h3>{name}</h3>
                    <p>{description}</p>

                    <div className="bottom">
                      <div className="price">
                        <small>{t.startingFrom}</small>

                        <strong>
                          {tour.priceTry
                            ? `${tour.priceTry} ₺`
                            : t.contactForPrice}
                        </strong>
                      </div>

                      <a
                        className="details"
                        href={`/tour/${tour.slug}`}
                      >
                        {t.details}
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="banner">
        <div className="container">
          <span className="eyebrow">
            RIVIERA PLUS TRAVEL AGENCY
          </span>

          <h2>{t.bannerTitle}</h2>
          <p>{t.bannerText}</p>

          <a className="btn" href="#turlar">
            {t.viewTours}
          </a>
        </div>
      </section>

      <section id="hakkimizda">
        <div className="container">
          <div className="head">
            <div>
              <span className="eyebrow">{t.whoWeAre}</span>
              <h2>RIVIERA PLUS</h2>
            </div>

            <p>{t.aboutText}</p>
          </div>
        </div>
      </section>

      <footer id="iletisim" className="footer">
        <div className="container footergrid">
          <div>
            <img
              src="/logo.webp"
              alt="Riviera Plus Travel Agency"
            />

            <p>{t.footerText}</p>
          </div>

          <div>
            <h4>{t.menu}</h4>
            <a href="#turlar">{t.tours}</a>
            <a href="#kategoriler">{t.categories}</a>
          </div>

          <div>
            <h4>{t.contact}</h4>

            <a
              href={`https://wa.me/${
                process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ||
                '905000000000'
              }`}
            >
              WhatsApp
            </a>

            <a href="mailto:info@rivieraplus.com">
              info@rivieraplus.com
            </a>
          </div>

          <div>
            <h4>{t.legal}</h4>
            <a href="#">{t.privacy}</a>
            <a href="#">{t.kvkk}</a>
            <a href="#">{t.cookies}</a>
          </div>
        </div>

        <div className="container copy">
          © 2026 RIVIERA PLUS TRAVEL AGENCY
        </div>
      </footer>

      {selected && (
        <div
          className="modal"
          onClick={closeBookingFlow}
        >
          <div
            className="modalbox"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close"
              onClick={closeBookingFlow}
            >
              ×
            </button>

            <img
              src={selected.image}
              alt={getTourName(selected, lang)}
            />

            <div className="modalbody">
              <span className="eyebrow">
                {getCategoryName(selected.category, lang)}
              </span>

              <h2>{getTourName(selected, lang)}</h2>

              <p>{getTourDescription(selected, lang)}</p>

              <p>
                📍 {getPickupText(selected.pickup, lang)}
                &nbsp; • &nbsp;
                🕒 {getDurationText(selected.duration, lang)}
              </p>

              <button
                className="btn gold"
                onClick={() => setBook(true)}
              >
                {t.bookingRequest}
              </button>
            </div>
          </div>
        </div>
      )}

      {book && selected && (
        <BookingForm
          tour={selected}
          lang={lang}
          onClose={closeBookingFlow}
        />
      )}
    </>
  );
}

function BookingForm({
  tour,
  lang,
  onClose,
}: {
  tour: Tour;
  lang: Lang;
  onClose: () => void;
}) {
  const [sent, setSent] = useState(false);
  const t = translations[lang];

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = Object.fromEntries(
      new FormData(e.currentTarget),
    );

    const response = await fetch('/api/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        tourId: tour.id,
      }),
    });

    if (response.ok) {
      setSent(true);
    } else {
      alert(t.bookingError);
    }
  };

  return (
    <div className="modal">
      <div className="modalbox">
        <button className="close" onClick={onClose}>
          ×
        </button>

        <div className="modalbody">
          <span className="eyebrow">{t.booking}</span>

          <h2>{getTourName(tour, lang)}</h2>

          {sent ? (
            <div className="notice">
              {t.bookingSuccess}
            </div>
          ) : (
            <form className="form" onSubmit={submit}>
              <input
                name="name"
                placeholder={t.fullName}
                required
              />

              <input
                name="email"
                type="email"
                placeholder={t.email}
                required
              />

              <input
                name="phone"
                placeholder={t.phone}
                required
              />

              <input
                name="date"
                type="date"
                required
              />

              <div className="two">
                <input
                  name="adults"
                  type="number"
                  min="1"
                  defaultValue="2"
                  aria-label={t.adults}
                  title={t.adults}
                />

                <input
                  name="children"
                  type="number"
                  min="0"
                  defaultValue="0"
                  aria-label={t.children}
                  title={t.children}
                />
              </div>

              <textarea
                name="note"
                rows={4}
                placeholder={t.note}
              />

              <button className="btn gold">
                {t.sendBooking}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}