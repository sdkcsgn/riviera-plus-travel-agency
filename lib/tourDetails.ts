export type Lang = 'tr' | 'en' | 'de' | 'ru';

export type LocalizedText = Record<Lang, string>;
export type LocalizedList = Record<Lang, string[]>;

export type TourDetail = {
  title: LocalizedText;
  location: LocalizedText;
  duration: LocalizedText;
  description: LocalizedText;
  included: LocalizedList;
  excluded: LocalizedList;
  important: LocalizedList;
};

export const tourDetails: Record<string, TourDetail> = {
  'bot-turu': {
    title: {
      tr: 'Alanya: Korsan Ayılar Konseptli Katamaran Tekne Turu',
      en: 'Alanya: Pirate Bears Themed Catamaran Boat Tour',
      de: 'Alanya: Katamaran-Bootstour im Piratenbären-Thema',
      ru: 'Аланья: Катамаран-тур в стиле пиратских медведей',
    },
    location: {
      tr: 'Alanya Merkez • Antalya',
      en: 'Alanya Center • Antalya',
      de: 'Alanya Zentrum • Antalya',
      ru: 'Центр Аланьи • Анталья',
    },
    duration: {
      tr: 'Yaklaşık 4 saat',
      en: 'Approx. 4 hours',
      de: 'Ca. 4 Stunden',
      ru: 'Около 4 часов',
    },
    description: {
      tr: 'Akdeniz kıyılarında eğlence, yüzme molaları ve manzara odaklı keyifli bir katamaran deneyimi.',
      en: 'A fun catamaran experience along the Mediterranean coast with swimming stops and scenic views.',
      de: 'Eine unterhaltsame Katamaranfahrt entlang der Mittelmeerküste mit Badestopps und schönen Ausblicken.',
      ru: 'Весёлая прогулка на катамаране вдоль Средиземного моря с остановками для купания и красивыми видами.',
    },
    included: {
      tr: ['Tekne turu', 'Yüzme molaları', 'Öğle yemeği', 'Rehberlik hizmeti'],
      en: ['Boat tour', 'Swimming stops', 'Lunch', 'Guide service'],
      de: ['Bootstour', 'Badestopps', 'Mittagessen', 'Reiseleitung'],
      ru: ['Прогулка на лодке', 'Остановки для купания', 'Обед', 'Сопровождение гида'],
    },
    excluded: {
      tr: ['Kişisel harcamalar', 'Alkollü içecekler', 'Fotoğraf ve video hizmetleri'],
      en: ['Personal expenses', 'Alcoholic drinks', 'Photo and video services'],
      de: ['Persönliche Ausgaben', 'Alkoholische Getränke', 'Foto- und Videoservice'],
      ru: ['Личные расходы', 'Алкогольные напитки', 'Фото- и видеосъёмка'],
    },
    important: {
      tr: ['Mayo ve havlu getirmeniz önerilir.', 'Güneş kremi ve şapka kullanınız.', 'Program deniz ve hava koşullarına göre değişebilir.'],
      en: ['Bring swimwear and a towel.', 'Use sunscreen and a hat.', 'The program may change depending on sea and weather conditions.'],
      de: ['Badesachen und Handtuch mitbringen.', 'Sonnenschutz und Hut verwenden.', 'Das Programm kann sich je nach See- und Wetterlage ändern.'],
      ru: ['Возьмите купальник и полотенце.', 'Используйте солнцезащитный крем и головной убор.', 'Программа может меняться в зависимости от моря и погоды.'],
    },
  },

  'jet-ski': {
    title: {
      tr: 'Alanya Jet Ski Deneyimi',
      en: 'Alanya Jet Ski Experience',
      de: 'Alanya Jetski-Erlebnis',
      ru: 'Катание на гидроцикле в Аланье',
    },
    location: {
      tr: 'Alanya Sahili • Antalya',
      en: 'Alanya Coast • Antalya',
      de: 'Küste von Alanya • Antalya',
      ru: 'Побережье Аланьи • Анталья',
    },
    duration: {
      tr: '15–20 dakika',
      en: '15–20 minutes',
      de: '15–20 Minuten',
      ru: '15–20 минут',
    },
    description: {
      tr: 'Akdeniz’in berrak sularında yüksek tempolu ve eğlenceli bir jet ski deneyimi.',
      en: 'A fast and exciting jet ski experience on the clear waters of the Mediterranean.',
      de: 'Ein schnelles und aufregendes Jetski-Erlebnis auf dem klaren Mittelmeer.',
      ru: 'Динамичное и захватывающее катание на гидроцикле по прозрачным водам Средиземного моря.',
    },
    included: {
      tr: ['Jet ski kullanımı', 'Can yeleği', 'Kısa güvenlik bilgilendirmesi'],
      en: ['Jet ski use', 'Life jacket', 'Short safety briefing'],
      de: ['Jetski-Nutzung', 'Schwimmweste', 'Kurze Sicherheitseinweisung'],
      ru: ['Использование гидроцикла', 'Спасательный жилет', 'Краткий инструктаж'],
    },
    excluded: {
      tr: ['Otel transferi aksi belirtilmedikçe', 'Fotoğraf ve video', 'Kişisel harcamalar'],
      en: ['Hotel transfer unless stated otherwise', 'Photo and video', 'Personal expenses'],
      de: ['Hoteltransfer, sofern nicht anders angegeben', 'Foto und Video', 'Persönliche Ausgaben'],
      ru: ['Трансфер из отеля, если не указано иное', 'Фото и видео', 'Личные расходы'],
    },
    important: {
      tr: ['Talimatlara uyulması zorunludur.', 'Hava ve deniz koşullarına göre süre değişebilir.', 'Değerli eşyalarınızı suya karşı koruyunuz.'],
      en: ['Safety instructions must be followed.', 'Duration may vary with weather and sea conditions.', 'Protect valuables from water.'],
      de: ['Sicherheitsanweisungen sind zu befolgen.', 'Die Dauer kann je nach Wetter und See variieren.', 'Wertsachen vor Wasser schützen.'],
      ru: ['Необходимо соблюдать инструкции по безопасности.', 'Продолжительность может меняться из-за погоды и моря.', 'Защитите ценные вещи от воды.'],
    },
  },

  'parasut': {
    title: {
      tr: 'Alanya Parasailing Deneyimi',
      en: 'Alanya Parasailing Experience',
      de: 'Alanya Parasailing-Erlebnis',
      ru: 'Парасейлинг в Аланье',
    },
    location: { tr: 'Alanya Sahili • Antalya', en: 'Alanya Coast • Antalya', de: 'Küste von Alanya • Antalya', ru: 'Побережье Аланьи • Анталья' },
    duration: { tr: 'Yaklaşık 10–15 dakika uçuş', en: 'Approx. 10–15 min flight', de: 'Ca. 10–15 Min. Flug', ru: 'Около 10–15 минут полёта' },
    description: {
      tr: 'Deniz üzerinde paraşütle yükselerek Alanya kıyılarını havadan izleyebileceğiniz heyecanlı bir aktivite.',
      en: 'An exciting activity that lets you enjoy aerial views of the Alanya coastline above the sea.',
      de: 'Ein aufregendes Erlebnis mit Blick aus der Luft auf die Küste von Alanya.',
      ru: 'Захватывающий полёт над морем с видом на побережье Аланьи.',
    },
    included: {
      tr: ['Parasailing ekipmanı', 'Can yeleği', 'Güvenlik bilgilendirmesi'],
      en: ['Parasailing equipment', 'Life jacket', 'Safety briefing'],
      de: ['Parasailing-Ausrüstung', 'Schwimmweste', 'Sicherheitseinweisung'],
      ru: ['Снаряжение для парасейлинга', 'Спасательный жилет', 'Инструктаж'],
    },
    excluded: {
      tr: ['Fotoğraf ve video', 'Kişisel harcamalar'],
      en: ['Photo and video', 'Personal expenses'],
      de: ['Foto und Video', 'Persönliche Ausgaben'],
      ru: ['Фото и видео', 'Личные расходы'],
    },
    important: {
      tr: ['Aktivite hava koşullarına bağlıdır.', 'Personel talimatlarına uyunuz.', 'Uygun kıyafet ve güneş koruması önerilir.'],
      en: ['The activity depends on weather conditions.', 'Follow staff instructions.', 'Suitable clothing and sun protection are recommended.'],
      de: ['Die Aktivität ist wetterabhängig.', 'Anweisungen des Personals beachten.', 'Geeignete Kleidung und Sonnenschutz werden empfohlen.'],
      ru: ['Активность зависит от погоды.', 'Следуйте инструкциям персонала.', 'Рекомендуется удобная одежда и защита от солнца.'],
    },
  },

  'kanepe-su-sporlari': {
    title: { tr: 'Alanya Kanepe Su Sporları', en: 'Alanya Ringo Sofa Water Sports', de: 'Alanya Sofa-Wassersport', ru: 'Водный диван в Аланье' },
    location: { tr: 'Alanya Sahili • Antalya', en: 'Alanya Coast • Antalya', de: 'Küste von Alanya • Antalya', ru: 'Побережье Аланьи • Анталья' },
    duration: { tr: 'Yaklaşık 10–15 dakika', en: 'Approx. 10–15 minutes', de: 'Ca. 10–15 Minuten', ru: 'Около 10–15 минут' },
    description: { tr: 'Arkadaşlarınız veya ailenizle deniz üzerinde hız ve eğlenceyi bir arada yaşayabileceğiniz grup aktivitesi.', en: 'A fun group activity combining speed and excitement on the sea with friends or family.', de: 'Gruppenspaß auf dem Meer mit Geschwindigkeit und Action für Freunde oder Familie.', ru: 'Весёлая групповая водная активность для друзей и семьи.' },
    included: { tr: ['Aktivite ekipmanı', 'Can yeleği', 'Güvenlik bilgilendirmesi'], en: ['Activity equipment', 'Life jacket', 'Safety briefing'], de: ['Ausrüstung', 'Schwimmweste', 'Sicherheitseinweisung'], ru: ['Снаряжение', 'Спасательный жилет', 'Инструктаж'] },
    excluded: { tr: ['Fotoğraf ve video', 'Kişisel harcamalar'], en: ['Photo and video', 'Personal expenses'], de: ['Foto und Video', 'Persönliche Ausgaben'], ru: ['Фото и видео', 'Личные расходы'] },
    important: { tr: ['Sıkı tutunun ve personel talimatlarına uyun.', 'Deniz koşullarına göre aktivite ertelenebilir.'], en: ['Hold on firmly and follow staff instructions.', 'The activity may be postponed due to sea conditions.'], de: ['Gut festhalten und Anweisungen beachten.', 'Die Aktivität kann wegen Seegang verschoben werden.'], ru: ['Крепко держитесь и следуйте инструкциям.', 'Активность может быть перенесена из-за состояния моря.'] },
  },

  'banana': {
    title: { tr: 'Alanya Banana Boat', en: 'Alanya Banana Boat', de: 'Alanya Banana Boat', ru: 'Банан-боат в Аланье' },
    location: { tr: 'Alanya Sahili • Antalya', en: 'Alanya Coast • Antalya', de: 'Küste von Alanya • Antalya', ru: 'Побережье Аланьи • Анталья' },
    duration: { tr: 'Yaklaşık 10–15 dakika', en: 'Approx. 10–15 minutes', de: 'Ca. 10–15 Minuten', ru: 'Около 10–15 минут' },
    description: { tr: 'Grup halinde yapılabilen, deniz üzerinde eğlenceli ve hareketli klasik su sporu deneyimi.', en: 'A classic, lively water-sports experience enjoyed as a group.', de: 'Ein klassischer, lebhafter Wassersportspaß für Gruppen.', ru: 'Классическая весёлая водная активность для компании.' },
    included: { tr: ['Banana bot kullanımı', 'Can yeleği', 'Güvenlik bilgilendirmesi'], en: ['Banana boat ride', 'Life jacket', 'Safety briefing'], de: ['Banana-Boot-Fahrt', 'Schwimmweste', 'Sicherheitseinweisung'], ru: ['Катание на банане', 'Спасательный жилет', 'Инструктаж'] },
    excluded: { tr: ['Fotoğraf ve video', 'Kişisel harcamalar'], en: ['Photo and video', 'Personal expenses'], de: ['Foto und Video', 'Persönliche Ausgaben'], ru: ['Фото и видео', 'Личные расходы'] },
    important: { tr: ['Can yeleği kullanımı zorunludur.', 'Personel talimatlarını takip ediniz.'], en: ['Life jackets are mandatory.', 'Follow staff instructions.'], de: ['Schwimmwesten sind Pflicht.', 'Anweisungen des Personals beachten.'], ru: ['Спасательные жилеты обязательны.', 'Следуйте инструкциям персонала.'] },
  },

  'vip-tur': {
    title: { tr: 'Alanya VIP Özel Tur', en: 'Alanya Private VIP Tour', de: 'Alanya Private VIP-Tour', ru: 'Индивидуальный VIP-тур по Аланье' },
    location: { tr: 'Alanya • Antalya', en: 'Alanya • Antalya', de: 'Alanya • Antalya', ru: 'Аланья • Анталья' },
    duration: { tr: 'Programa göre değişir', en: 'Depends on program', de: 'Je nach Programm', ru: 'Зависит от программы' },
    description: { tr: 'Kişiye özel program, özel araç ve daha esnek gezi planı ile konforlu bir VIP deneyimi.', en: 'A comfortable VIP experience with a private itinerary, vehicle and flexible schedule.', de: 'Komfortables VIP-Erlebnis mit privatem Programm, Fahrzeug und flexiblem Ablauf.', ru: 'Комфортный VIP-тур с индивидуальной программой, транспортом и гибким расписанием.' },
    included: { tr: ['Özel planlama', 'Belirlenen program dahilindeki hizmetler', 'VIP destek'], en: ['Private planning', 'Services included in the agreed program', 'VIP support'], de: ['Private Planung', 'Leistungen laut vereinbartem Programm', 'VIP-Betreuung'], ru: ['Индивидуальное планирование', 'Услуги по согласованной программе', 'VIP-поддержка'] },
    excluded: { tr: ['Program dışı harcamalar', 'Kişisel alışverişler'], en: ['Expenses outside the program', 'Personal shopping'], de: ['Ausgaben außerhalb des Programms', 'Persönliche Einkäufe'], ru: ['Расходы вне программы', 'Личные покупки'] },
    important: { tr: ['Program rezervasyon öncesinde netleştirilir.', 'Fiyat kişi sayısı ve programa göre değişebilir.'], en: ['The program is confirmed before booking.', 'Price may vary by group size and itinerary.'], de: ['Das Programm wird vor der Buchung abgestimmt.', 'Der Preis kann je nach Gruppengröße und Programm variieren.'], ru: ['Программа согласовывается до бронирования.', 'Цена может зависеть от количества гостей и маршрута.'] },
  },

  'antalya-kemer-bot-turu': {
    title: { tr: 'Antalya Kemer Tekne Turu', en: 'Antalya Kemer Boat Tour', de: 'Antalya Kemer Bootstour', ru: 'Морская прогулка Кемер — Анталья' },
    location: { tr: 'Kemer • Antalya', en: 'Kemer • Antalya', de: 'Kemer • Antalya', ru: 'Кемер • Анталья' },
    duration: { tr: 'Tam gün', en: 'Full day', de: 'Ganztägig', ru: 'На весь день' },
    description: { tr: 'Kemer kıyıları, koylar ve yüzme molaları eşliğinde keyifli bir tam günlük tekne turu.', en: 'A full-day boat tour along the Kemer coast with bays and swimming stops.', de: 'Ganztägige Bootstour entlang der Küste von Kemer mit Buchten und Badestopps.', ru: 'Дневная морская прогулка вдоль побережья Кемера с бухтами и остановками для купания.' },
    included: { tr: ['Tekne turu', 'Yüzme molaları', 'Öğle yemeği'], en: ['Boat tour', 'Swimming stops', 'Lunch'], de: ['Bootstour', 'Badestopps', 'Mittagessen'], ru: ['Морская прогулка', 'Остановки для купания', 'Обед'] },
    excluded: { tr: ['İçecekler', 'Kişisel harcamalar'], en: ['Drinks', 'Personal expenses'], de: ['Getränke', 'Persönliche Ausgaben'], ru: ['Напитки', 'Личные расходы'] },
    important: { tr: ['Mayo, havlu ve güneş kremi getiriniz.', 'Program hava koşullarına göre değişebilir.'], en: ['Bring swimwear, towel and sunscreen.', 'The program may change due to weather.'], de: ['Badesachen, Handtuch und Sonnenschutz mitbringen.', 'Programm kann wetterbedingt geändert werden.'], ru: ['Возьмите купальник, полотенце и солнцезащитный крем.', 'Программа может меняться из-за погоды.'] },
  },

  'green-canyon-5-1': {
    title: { tr: 'Green Canyon 5+1 Kombine Tur', en: 'Green Canyon 5+1 Combo Tour', de: 'Green Canyon 5+1 Kombitour', ru: 'Green Canyon 5+1 Комбо-тур' },
    location: { tr: 'Manavgat • Antalya', en: 'Manavgat • Antalya', de: 'Manavgat • Antalya', ru: 'Манавгат • Анталья' },
    duration: { tr: 'Tam gün', en: 'Full day', de: 'Ganztägig', ru: 'На весь день' },
    description: { tr: 'Green Canyon çevresinde doğa, manzara ve çeşitli aktiviteleri tek programda birleştiren tam günlük deneyim.', en: 'A full-day experience combining nature, scenery and multiple activities around Green Canyon.', de: 'Ganztägiges Erlebnis rund um den Green Canyon mit Natur, Panorama und mehreren Aktivitäten.', ru: 'Дневная программа в Green Canyon, объединяющая природу, виды и несколько активностей.' },
    included: { tr: ['Programdaki aktiviteler', 'Öğle yemeği', 'Rehberlik'], en: ['Activities in the program', 'Lunch', 'Guide'], de: ['Aktivitäten laut Programm', 'Mittagessen', 'Reiseleitung'], ru: ['Активности по программе', 'Обед', 'Гид'] },
    excluded: { tr: ['Kişisel harcamalar', 'Program dışı aktiviteler'], en: ['Personal expenses', 'Activities outside the program'], de: ['Persönliche Ausgaben', 'Zusatzaktivitäten'], ru: ['Личные расходы', 'Дополнительные активности'] },
    important: { tr: ['Rahat ayakkabı tercih ediniz.', 'Yanınıza su ve güneş koruması alınız.'], en: ['Wear comfortable shoes.', 'Bring water and sun protection.'], de: ['Bequeme Schuhe tragen.', 'Wasser und Sonnenschutz mitnehmen.'], ru: ['Наденьте удобную обувь.', 'Возьмите воду и защиту от солнца.'] },
  },

  'green-canyon': {
    title: { tr: 'Green Canyon Tekne ve Doğa Turu', en: 'Green Canyon Boat & Nature Tour', de: 'Green Canyon Boots- und Naturtour', ru: 'Green Canyon: лодка и природа' },
    location: { tr: 'Manavgat • Antalya', en: 'Manavgat • Antalya', de: 'Manavgat • Antalya', ru: 'Манавгат • Анталья' },
    duration: { tr: 'Tam gün', en: 'Full day', de: 'Ganztägig', ru: 'На весь день' },
    description: { tr: 'Torosların arasında sakin tekne gezisi, göl manzaraları ve doğayla iç içe huzurlu bir gün.', en: 'A peaceful day with a calm boat trip, lake views and nature among the Taurus Mountains.', de: 'Ein ruhiger Tag mit Bootsfahrt, Seeblick und Natur im Taurusgebirge.', ru: 'Спокойный день с прогулкой на лодке, видами на озеро и природой среди Таврских гор.' },
    included: { tr: ['Tekne turu', 'Öğle yemeği', 'Rehberlik'], en: ['Boat tour', 'Lunch', 'Guide'], de: ['Bootstour', 'Mittagessen', 'Reiseleitung'], ru: ['Прогулка на лодке', 'Обед', 'Гид'] },
    excluded: { tr: ['İçecekler', 'Kişisel harcamalar'], en: ['Drinks', 'Personal expenses'], de: ['Getränke', 'Persönliche Ausgaben'], ru: ['Напитки', 'Личные расходы'] },
    important: { tr: ['Mevsime uygun kıyafet giyiniz.', 'Fotoğraf makinesi veya telefon için koruma önerilir.'], en: ['Dress for the season.', 'Protection for cameras or phones is recommended.'], de: ['Der Jahreszeit entsprechend kleiden.', 'Schutz für Kamera oder Handy empfohlen.'], ru: ['Одевайтесь по погоде.', 'Рекомендуется защита для камеры или телефона.'] },
  },

  'sun-set': {
    title: { tr: 'Alanya Gün Batımı Tekne Turu', en: 'Alanya Sunset Cruise', de: 'Alanya Sonnenuntergangsfahrt', ru: 'Закатный круиз в Аланье' },
    location: { tr: 'Alanya • Antalya', en: 'Alanya • Antalya', de: 'Alanya • Antalya', ru: 'Аланья • Анталья' },
    duration: { tr: 'Yaklaşık 3–4 saat', en: 'Approx. 3–4 hours', de: 'Ca. 3–4 Stunden', ru: 'Около 3–4 часов' },
    description: { tr: 'Akdeniz üzerinde gün batımını izleyebileceğiniz romantik ve dinlendirici akşam tekne turu.', en: 'A relaxing evening cruise to enjoy the Mediterranean sunset.', de: 'Entspannte Abendfahrt, um den Sonnenuntergang über dem Mittelmeer zu genießen.', ru: 'Расслабляющий вечерний круиз с видом на закат над Средиземным морем.' },
    included: { tr: ['Tekne turu', 'Yüzme molası', 'Program dahilindeki ikramlar'], en: ['Boat tour', 'Swimming stop', 'Refreshments included in the program'], de: ['Bootstour', 'Badestopp', 'Erfrischungen laut Programm'], ru: ['Морская прогулка', 'Остановка для купания', 'Угощения по программе'] },
    excluded: { tr: ['Ekstra içecekler', 'Kişisel harcamalar'], en: ['Extra drinks', 'Personal expenses'], de: ['Zusätzliche Getränke', 'Persönliche Ausgaben'], ru: ['Дополнительные напитки', 'Личные расходы'] },
    important: { tr: ['Akşam serinliği için ince bir üstlük önerilir.', 'Kalkış saati mevsime göre değişebilir.'], en: ['A light layer is recommended for the evening.', 'Departure time may vary by season.'], de: ['Für den Abend wird eine leichte Jacke empfohlen.', 'Abfahrtszeit kann saisonal variieren.'], ru: ['На вечер рекомендуется лёгкая верхняя одежда.', 'Время отправления зависит от сезона.'] },
  },

  'amon-spa': {
    title: { tr: 'Amon Spa & Hamam Deneyimi', en: 'Amon Spa & Hammam Experience', de: 'Amon Spa & Hamam Erlebnis', ru: 'Amon Spa и хамам' },
    location: { tr: 'Alanya • Antalya', en: 'Alanya • Antalya', de: 'Alanya • Antalya', ru: 'Аланья • Анталья' },
    duration: { tr: 'Pakete göre 1,5–3 saat', en: '1.5–3 hours depending on package', de: '1,5–3 Stunden je nach Paket', ru: '1,5–3 часа в зависимости от пакета' },
    description: { tr: 'Hamam, sauna ve spa ritüelleriyle dinlenmeye odaklanan rahatlatıcı bakım deneyimi.', en: 'A relaxing wellness experience focused on hammam, sauna and spa rituals.', de: 'Entspannendes Wellness-Erlebnis mit Hamam, Sauna und Spa-Ritualen.', ru: 'Расслабляющая wellness-программа с хамамом, сауной и spa-ритуалами.' },
    included: { tr: ['Paket kapsamındaki spa hizmetleri', 'Hamam kullanımı', 'Sauna'], en: ['Spa services in selected package', 'Hammam use', 'Sauna'], de: ['Spa-Leistungen des gewählten Pakets', 'Hamam', 'Sauna'], ru: ['SPA-услуги выбранного пакета', 'Хамам', 'Сауна'] },
    excluded: { tr: ['Ekstra masaj ve bakımlar', 'Kişisel harcamalar'], en: ['Extra massages and treatments', 'Personal expenses'], de: ['Zusätzliche Massagen und Anwendungen', 'Persönliche Ausgaben'], ru: ['Дополнительный массаж и процедуры', 'Личные расходы'] },
    important: { tr: ['Seçilen paket içeriğini rezervasyonda kontrol ediniz.', 'Sağlık açısından uygun olmadığını düşündüğünüz uygulamalarda personele bilgi veriniz.'], en: ['Check the selected package contents when booking.', 'Inform staff if any treatment may not be suitable for you.'], de: ['Paketinhalt bei der Buchung prüfen.', 'Personal informieren, wenn eine Anwendung ungeeignet sein könnte.'], ru: ['Уточните состав пакета при бронировании.', 'Сообщите персоналу, если какая-либо процедура вам не подходит.'] },
  },

  'crown-spa': {
    title: { tr: 'Crown Spa & Hamam Deneyimi', en: 'Crown Spa & Hammam Experience', de: 'Crown Spa & Hamam Erlebnis', ru: 'Crown Spa и хамам' },
    location: { tr: 'Alanya • Antalya', en: 'Alanya • Antalya', de: 'Alanya • Antalya', ru: 'Аланья • Анталья' },
    duration: { tr: 'Pakete göre 1,5–3 saat', en: '1.5–3 hours depending on package', de: '1,5–3 Stunden je nach Paket', ru: '1,5–3 часа в зависимости от пакета' },
    description: { tr: 'Geleneksel hamam atmosferini spa ve bakım seçenekleriyle birleştiren dinlendirici deneyim.', en: 'A relaxing experience combining traditional hammam atmosphere with spa treatments.', de: 'Entspannendes Erlebnis mit traditionellem Hamam und Spa-Anwendungen.', ru: 'Расслабляющий отдых, сочетающий традиционный хамам и spa-процедуры.' },
    included: { tr: ['Paket kapsamındaki hizmetler', 'Hamam', 'Sauna'], en: ['Services in selected package', 'Hammam', 'Sauna'], de: ['Leistungen des gewählten Pakets', 'Hamam', 'Sauna'], ru: ['Услуги выбранного пакета', 'Хамам', 'Сауна'] },
    excluded: { tr: ['Ekstra bakım paketleri', 'Kişisel harcamalar'], en: ['Extra treatments', 'Personal expenses'], de: ['Zusätzliche Anwendungen', 'Persönliche Ausgaben'], ru: ['Дополнительные процедуры', 'Личные расходы'] },
    important: { tr: ['Paket detaylarını rezervasyon sırasında doğrulayınız.', 'Rahat kıyafet tercih ediniz.'], en: ['Confirm package details when booking.', 'Wear comfortable clothing.'], de: ['Paketdetails bei Buchung bestätigen.', 'Bequeme Kleidung tragen.'], ru: ['Уточните детали пакета при бронировании.', 'Выбирайте удобную одежду.'] },
  },

  'combo-4-1': {
    title: { tr: 'Alanya Combo 4+1 Macera Paketi', en: 'Alanya Combo 4+1 Adventure Package', de: 'Alanya Combo 4+1 Abenteuerpaket', ru: 'Alanya Combo 4+1 приключенческий пакет' },
    location: { tr: 'Alanya • Antalya', en: 'Alanya • Antalya', de: 'Alanya • Antalya', ru: 'Аланья • Анталья' },
    duration: { tr: 'Tam gün', en: 'Full day', de: 'Ganztägig', ru: 'На весь день' },
    description: { tr: 'Birden fazla eğlence ve macera aktivitesini tek rezervasyonda bir araya getiren avantajlı paket.', en: 'A value package combining several fun and adventure activities in one booking.', de: 'Vorteilspaket mit mehreren Spaß- und Abenteueraktivitäten in einer Buchung.', ru: 'Выгодный пакет, объединяющий несколько развлечений и активностей.' },
    included: { tr: ['Paket kapsamında belirtilen aktiviteler', 'Gerekli temel ekipmanlar'], en: ['Activities stated in the package', 'Required basic equipment'], de: ['Aktivitäten laut Paket', 'Benötigte Grundausrüstung'], ru: ['Активности по пакету', 'Необходимое базовое снаряжение'] },
    excluded: { tr: ['Program dışı aktiviteler', 'Kişisel harcamalar'], en: ['Activities outside the package', 'Personal expenses'], de: ['Aktivitäten außerhalb des Pakets', 'Persönliche Ausgaben'], ru: ['Активности вне пакета', 'Личные расходы'] },
    important: { tr: ['Kesin aktivite listesi rezervasyon sırasında doğrulanmalıdır.', 'Program hava ve operasyon koşullarına göre değişebilir.'], en: ['Confirm the exact activity list when booking.', 'The program may change due to weather or operations.'], de: ['Genaue Aktivitätsliste bei Buchung bestätigen.', 'Programm kann wetter- oder betriebsbedingt geändert werden.'], ru: ['Уточните точный список активностей при бронировании.', 'Программа может меняться из-за погоды или условий работы.'] },
  },

  'combo-5-1': {
    title: { tr: 'Alanya Combo 5+1 Macera Paketi', en: 'Alanya Combo 5+1 Adventure Package', de: 'Alanya Combo 5+1 Abenteuerpaket', ru: 'Alanya Combo 5+1 приключенческий пакет' },
    location: { tr: 'Alanya • Antalya', en: 'Alanya • Antalya', de: 'Alanya • Antalya', ru: 'Аланья • Анталья' },
    duration: { tr: 'Tam gün', en: 'Full day', de: 'Ganztägig', ru: 'На весь день' },
    description: { tr: 'Daha fazla aktiviteyi tek programda bir araya getiren yoğun ve eğlenceli tam günlük combo paketi.', en: 'A full-day combo package bringing more activities together in one exciting program.', de: 'Ganztägiges Kombipaket mit mehreren Aktivitäten in einem abwechslungsreichen Programm.', ru: 'Насыщенный дневной комбо-пакет с несколькими активностями.' },
    included: { tr: ['Paket kapsamındaki aktiviteler', 'Temel güvenlik ekipmanları'], en: ['Activities in the package', 'Basic safety equipment'], de: ['Aktivitäten laut Paket', 'Grundlegende Sicherheitsausrüstung'], ru: ['Активности по пакету', 'Базовое защитное снаряжение'] },
    excluded: { tr: ['Ekstra aktiviteler', 'Kişisel harcamalar'], en: ['Extra activities', 'Personal expenses'], de: ['Zusatzaktivitäten', 'Persönliche Ausgaben'], ru: ['Дополнительные активности', 'Личные расходы'] },
    important: { tr: ['Aktivite sıralaması operasyona göre değişebilir.', 'Rahat kıyafet ve ayakkabı önerilir.'], en: ['Activity order may vary operationally.', 'Comfortable clothing and shoes are recommended.'], de: ['Reihenfolge der Aktivitäten kann variieren.', 'Bequeme Kleidung und Schuhe empfohlen.'], ru: ['Порядок активностей может меняться.', 'Рекомендуется удобная одежда и обувь.'] },
  },

  'diving': {
    title: { tr: 'Alanya Dalış Deneyimi', en: 'Alanya Diving Experience', de: 'Alanya Taucherlebnis', ru: 'Дайвинг в Аланье' },
    location: { tr: 'Alanya • Antalya', en: 'Alanya • Antalya', de: 'Alanya • Antalya', ru: 'Аланья • Анталья' },
    duration: { tr: 'Yaklaşık yarım gün', en: 'Approx. half day', de: 'Ca. halber Tag', ru: 'Около половины дня' },
    description: { tr: 'Akdeniz’in su altı dünyasını eğitmen eşliğinde keşfetmeye yönelik keyifli dalış deneyimi.', en: 'An enjoyable diving experience to discover Mediterranean underwater life with an instructor.', de: 'Ein Taucherlebnis zur Entdeckung der Unterwasserwelt des Mittelmeers mit Tauchlehrer.', ru: 'Погружение с инструктором для знакомства с подводным миром Средиземного моря.' },
    included: { tr: ['Dalış ekipmanı', 'Eğitmen desteği', 'Güvenlik bilgilendirmesi'], en: ['Diving equipment', 'Instructor support', 'Safety briefing'], de: ['Tauchausrüstung', 'Tauchlehrer', 'Sicherheitseinweisung'], ru: ['Дайвинг-снаряжение', 'Инструктор', 'Инструктаж'] },
    excluded: { tr: ['Fotoğraf ve video', 'Kişisel harcamalar'], en: ['Photo and video', 'Personal expenses'], de: ['Foto und Video', 'Persönliche Ausgaben'], ru: ['Фото и видео', 'Личные расходы'] },
    important: { tr: ['Sağlık ve dalış uygunluğu operasyon ekibi tarafından değerlendirilir.', 'Talimatlara tam uyum gereklidir.'], en: ['Health and diving suitability are assessed by the operator.', 'Instructions must be followed carefully.'], de: ['Gesundheitliche Tauchtauglichkeit wird vom Anbieter geprüft.', 'Anweisungen müssen genau befolgt werden.'], ru: ['Допуск к погружению оценивает оператор.', 'Необходимо строго соблюдать инструкции.'] },
  },

  'maldiv': {
    title: { tr: 'Alanya Maldiv Koyu Tekne Deneyimi', en: 'Alanya Maldives Bay Boat Experience', de: 'Alanya Malediven-Bucht Bootserlebnis', ru: 'Аланья: морская прогулка в бухту «Мальдивы»' },
    location: { tr: 'Alanya Çevresi • Antalya', en: 'Alanya Area • Antalya', de: 'Region Alanya • Antalya', ru: 'Район Аланьи • Анталья' },
    duration: { tr: 'Programa göre yarım/tam gün', en: 'Half/full day depending on program', de: 'Halb-/Ganztag je nach Programm', ru: 'Полдня/день по программе' },
    description: { tr: 'Turkuaz su, koy manzaraları ve yüzme molalarıyla dinlenmeye odaklanan deniz deneyimi.', en: 'A relaxing sea experience with turquoise water, bay views and swimming stops.', de: 'Entspanntes Meereserlebnis mit türkisfarbenem Wasser, Buchten und Badestopps.', ru: 'Морская прогулка с бирюзовой водой, бухтами и остановками для купания.' },
    included: { tr: ['Tekne turu', 'Yüzme molaları', 'Program dahilindeki ikramlar'], en: ['Boat tour', 'Swimming stops', 'Refreshments included in program'], de: ['Bootstour', 'Badestopps', 'Verpflegung laut Programm'], ru: ['Морская прогулка', 'Остановки для купания', 'Угощения по программе'] },
    excluded: { tr: ['Ekstra içecekler', 'Kişisel harcamalar'], en: ['Extra drinks', 'Personal expenses'], de: ['Zusätzliche Getränke', 'Persönliche Ausgaben'], ru: ['Дополнительные напитки', 'Личные расходы'] },
    important: { tr: ['Mayo, havlu ve güneş koruması getiriniz.', 'Rota deniz koşullarına göre değişebilir.'], en: ['Bring swimwear, towel and sun protection.', 'Route may change due to sea conditions.'], de: ['Badesachen, Handtuch und Sonnenschutz mitbringen.', 'Route kann je nach Seegang variieren.'], ru: ['Возьмите купальник, полотенце и защиту от солнца.', 'Маршрут может меняться из-за состояния моря.'] },
  },

  'antalya-akvaryum': {
    title: { tr: 'Antalya Akvaryum Turu', en: 'Antalya Aquarium Tour', de: 'Antalya Aquarium Tour', ru: 'Экскурсия в Аквариум Антальи' },
    location: { tr: 'Konyaaltı • Antalya', en: 'Konyaaltı • Antalya', de: 'Konyaaltı • Antalya', ru: 'Коньяалты • Анталья' },
    duration: { tr: 'Yaklaşık yarım gün', en: 'Approx. half day', de: 'Ca. halber Tag', ru: 'Около половины дня' },
    description: { tr: 'Aileler için uygun, deniz yaşamını ve tematik akvaryum alanlarını keşfetmeye yönelik keyifli gezi.', en: 'A family-friendly visit to discover marine life and themed aquarium areas.', de: 'Familienfreundlicher Besuch mit Meereswelt und thematischen Aquarienbereichen.', ru: 'Семейная экскурсия по тематическим зонам и миру морских обитателей.' },
    included: { tr: ['Programda belirtilen giriş bileti', 'Planlanan transfer hizmeti'], en: ['Admission stated in program', 'Scheduled transfer'], de: ['Eintritt laut Programm', 'Geplanter Transfer'], ru: ['Входной билет по программе', 'Трансфер по программе'] },
    excluded: { tr: ['Yeme-içme', 'Kişisel harcamalar', 'Ekstra alanlar aksi belirtilmedikçe'], en: ['Food and drinks', 'Personal expenses', 'Extra areas unless stated'], de: ['Essen und Getränke', 'Persönliche Ausgaben', 'Zusatzbereiche, sofern nicht angegeben'], ru: ['Еда и напитки', 'Личные расходы', 'Дополнительные зоны, если не указано иное'] },
    important: { tr: ['Bilet kapsamını rezervasyonda kontrol ediniz.', 'Çocuklar için yaş bilgisi gerekebilir.'], en: ['Check ticket inclusions when booking.', 'Children’s ages may be required.'], de: ['Ticketumfang bei Buchung prüfen.', 'Alter der Kinder kann erforderlich sein.'], ru: ['Уточните, что входит в билет.', 'Может потребоваться возраст детей.'] },
  },

  'pamukkale': {
    title: { tr: 'Pamukkale ve Hierapolis Turu', en: 'Pamukkale & Hierapolis Tour', de: 'Pamukkale & Hierapolis Tour', ru: 'Экскурсия в Памуккале и Иераполис' },
    location: { tr: 'Pamukkale • Denizli', en: 'Pamukkale • Denizli', de: 'Pamukkale • Denizli', ru: 'Памуккале • Денизли' },
    duration: { tr: 'Tam gün', en: 'Full day', de: 'Ganztägig', ru: 'На весь день' },
    description: { tr: 'Pamukkale travertenleri ve Hierapolis antik kentini bir arada keşfetmeye yönelik kültür ve doğa turu.', en: 'A culture and nature tour combining Pamukkale travertines with the ancient city of Hierapolis.', de: 'Kultur- und Naturtour zu den Travertinen von Pamukkale und der antiken Stadt Hierapolis.', ru: 'Культурно-природная экскурсия к травертинам Памуккале и древнему Иераполису.' },
    included: { tr: ['Ulaşım', 'Rehberlik', 'Program dahilindeki öğünler'], en: ['Transport', 'Guide', 'Meals stated in program'], de: ['Transport', 'Reiseleitung', 'Verpflegung laut Programm'], ru: ['Транспорт', 'Гид', 'Питание по программе'] },
    excluded: { tr: ['Müze/ören yeri girişleri aksi belirtilmedikçe', 'Kişisel harcamalar'], en: ['Site/museum admissions unless stated', 'Personal expenses'], de: ['Eintritte, sofern nicht angegeben', 'Persönliche Ausgaben'], ru: ['Входные билеты, если не указано иное', 'Личные расходы'] },
    important: { tr: ['Rahat yürüyüş ayakkabısı kullanınız.', 'Uzun yolculuk içeren bir programdır.', 'Güneş koruması önerilir.'], en: ['Wear comfortable walking shoes.', 'The program includes a long journey.', 'Sun protection is recommended.'], de: ['Bequeme Schuhe tragen.', 'Das Programm beinhaltet eine längere Fahrt.', 'Sonnenschutz empfohlen.'], ru: ['Наденьте удобную обувь.', 'Программа включает длительную дорогу.', 'Рекомендуется защита от солнца.'] },
  },

  'antalya-city-tur': {
    title: { tr: 'Antalya Şehir Turu', en: 'Antalya City Tour', de: 'Antalya Stadtrundfahrt', ru: 'Обзорная экскурсия по Анталье' },
    location: { tr: 'Antalya Merkez', en: 'Antalya City Center', de: 'Antalya Stadtzentrum', ru: 'Центр Антальи' },
    duration: { tr: 'Tam gün', en: 'Full day', de: 'Ganztägig', ru: 'На весь день' },
    description: { tr: 'Antalya’nın tarihi, şehir manzaraları ve öne çıkan noktalarını bir günlük programda keşfedin.', en: 'Discover Antalya’s history, city views and highlights in a one-day program.', de: 'Entdecken Sie Geschichte, Stadtpanorama und Highlights von Antalya an einem Tag.', ru: 'Познакомьтесь с историей, видами и главными местами Антальи за один день.' },
    included: { tr: ['Ulaşım', 'Rehberlik', 'Programdaki ziyaretler'], en: ['Transport', 'Guide', 'Visits in the program'], de: ['Transport', 'Reiseleitung', 'Besichtigungen laut Programm'], ru: ['Транспорт', 'Гид', 'Посещения по программе'] },
    excluded: { tr: ['Kişisel harcamalar', 'Ekstra giriş ücretleri aksi belirtilmedikçe'], en: ['Personal expenses', 'Extra admissions unless stated'], de: ['Persönliche Ausgaben', 'Zusätzliche Eintritte, sofern nicht angegeben'], ru: ['Личные расходы', 'Дополнительные входные билеты, если не указано иное'] },
    important: { tr: ['Rahat ayakkabı önerilir.', 'Program trafik ve operasyon koşullarına göre değişebilir.'], en: ['Comfortable shoes are recommended.', 'The program may vary due to traffic and operations.'], de: ['Bequeme Schuhe empfohlen.', 'Programm kann sich durch Verkehr und Betrieb ändern.'], ru: ['Рекомендуется удобная обувь.', 'Программа может меняться из-за трафика и условий работы.'] },
  },

  'jeep-safari': {
    title: { tr: 'Alanya Jeep Safari', en: 'Alanya Jeep Safari', de: 'Alanya Jeep Safari', ru: 'Джип-сафари в Аланье' },
    location: { tr: 'Toros Dağları • Alanya', en: 'Taurus Mountains • Alanya', de: 'Taurusgebirge • Alanya', ru: 'Таврские горы • Аланья' },
    duration: { tr: 'Yaklaşık 6–8 saat', en: 'Approx. 6–8 hours', de: 'Ca. 6–8 Stunden', ru: 'Около 6–8 часов' },
    description: { tr: 'Toros yollarında manzara, köy atmosferi ve eğlenceli off-road bölümleriyle dolu macera turu.', en: 'An adventure through Taurus roads with scenery, village atmosphere and fun off-road sections.', de: 'Abenteuertour durch das Taurusgebirge mit Panorama, Dorfatmosphäre und Offroad-Abschnitten.', ru: 'Приключенческий тур по Таврским горам с красивыми видами, деревнями и бездорожьем.' },
    included: { tr: ['Jeep safari', 'Şoför/ekip desteği', 'Programdaki öğle yemeği'], en: ['Jeep safari', 'Driver/team support', 'Lunch stated in program'], de: ['Jeep-Safari', 'Fahrer/Team', 'Mittagessen laut Programm'], ru: ['Джип-сафари', 'Водитель/команда', 'Обед по программе'] },
    excluded: { tr: ['İçecekler', 'Kişisel harcamalar'], en: ['Drinks', 'Personal expenses'], de: ['Getränke', 'Persönliche Ausgaben'], ru: ['Напитки', 'Личные расходы'] },
    important: { tr: ['Tozlanmaya uygun kıyafet tercih ediniz.', 'Güneş koruması ve su önerilir.', 'Hamileler ve ciddi hareket kısıtlılığı olanlar için uygun olmayabilir.'], en: ['Wear clothes suitable for dusty conditions.', 'Sun protection and water are recommended.', 'May not be suitable for pregnant guests or those with serious mobility limitations.'], de: ['Staubgeeignete Kleidung tragen.', 'Sonnenschutz und Wasser empfohlen.', 'Für Schwangere oder Personen mit starken Bewegungseinschränkungen eventuell ungeeignet.'], ru: ['Выбирайте одежду, которую не жалко запылить.', 'Рекомендуются вода и защита от солнца.', 'Может не подходить беременным и гостям с серьёзными ограничениями подвижности.'] },
  },

  'quard-safari': {
    title: { tr: 'Alanya Quad Safari', en: 'Alanya Quad Safari', de: 'Alanya Quad Safari', ru: 'Квадро-сафари в Аланье' },
    location: { tr: 'Alanya • Antalya', en: 'Alanya • Antalya', de: 'Alanya • Antalya', ru: 'Аланья • Анталья' },
    duration: { tr: 'Yaklaşık 2–3 saat', en: 'Approx. 2–3 hours', de: 'Ca. 2–3 Stunden', ru: 'Около 2–3 часов' },
    description: { tr: 'Doğal ve toprak parkurlarda ATV/quad araçlarıyla gerçekleştirilen tempolu off-road macerası.', en: 'An energetic off-road adventure on natural and dirt tracks with ATV/quad vehicles.', de: 'Actionreiches Offroad-Abenteuer auf Natur- und Schotterstrecken mit Quads.', ru: 'Динамичное бездорожье на квадроциклах по природным и грунтовым трассам.' },
    included: { tr: ['Quad kullanımı', 'Kask', 'Güvenlik bilgilendirmesi'], en: ['Quad use', 'Helmet', 'Safety briefing'], de: ['Quad-Nutzung', 'Helm', 'Sicherheitseinweisung'], ru: ['Квадроцикл', 'Шлем', 'Инструктаж'] },
    excluded: { tr: ['Gözlük/bandana gibi kişisel ekipmanlar', 'Fotoğraf ve video', 'Kişisel harcamalar'], en: ['Personal gear such as goggles/bandana', 'Photo and video', 'Personal expenses'], de: ['Persönliche Ausrüstung wie Brille/Bandana', 'Foto und Video', 'Persönliche Ausgaben'], ru: ['Личные аксессуары, например очки/бандана', 'Фото и видео', 'Личные расходы'] },
    important: { tr: ['Tozlu parkur için uygun kıyafet giyiniz.', 'Güvenlik talimatlarına uyunuz.', 'Operatörün yaş ve sürüş kuralları geçerlidir.'], en: ['Wear clothes suitable for dusty tracks.', 'Follow safety instructions.', 'Operator age and driving rules apply.'], de: ['Kleidung für staubige Strecken tragen.', 'Sicherheitsregeln beachten.', 'Alters- und Fahrregeln des Betreibers gelten.'], ru: ['Одевайтесь с учётом пыльной трассы.', 'Соблюдайте правила безопасности.', 'Действуют возрастные и водительские правила оператора.'] },
  },

  'delphin': {
    title: { tr: 'Alanya Yunus Deneyimi', en: 'Alanya Dolphin Experience', de: 'Alanya Delfin-Erlebnis', ru: 'Дельфины в Аланье' },
    location: { tr: 'Alanya Bölgesi • Antalya', en: 'Alanya Area • Antalya', de: 'Region Alanya • Antalya', ru: 'Район Аланьи • Анталья' },
    duration: { tr: 'Pakete göre değişir', en: 'Depends on package', de: 'Je nach Paket', ru: 'Зависит от пакета' },
    description: { tr: 'Yunusları yakından gözlemleyebileceğiniz, seçilen pakete göre farklı deneyimler sunan aile dostu aktivite.', en: 'A family-friendly activity offering close-up dolphin observation and package-based experiences.', de: 'Familienfreundliches Erlebnis mit Delfinbeobachtung und verschiedenen Paketoptionen.', ru: 'Семейная программа с наблюдением за дельфинами и различными вариантами пакетов.' },
    included: { tr: ['Seçilen paket kapsamındaki etkinlik', 'Tesis giriş hizmetleri program dahilindeyse'], en: ['Activity in selected package', 'Facility admission if included in program'], de: ['Aktivität laut gewähltem Paket', 'Anlageneintritt, falls im Programm enthalten'], ru: ['Активность выбранного пакета', 'Вход на территорию, если включён'] },
    excluded: { tr: ['Fotoğraf ve video', 'Ekstra aktiviteler'], en: ['Photo and video', 'Extra activities'], de: ['Foto und Video', 'Zusatzaktivitäten'], ru: ['Фото и видео', 'Дополнительные активности'] },
    important: { tr: ['Paket içeriğini rezervasyon öncesinde kontrol ediniz.', 'Tesis kurallarına uyulması zorunludur.'], en: ['Check package contents before booking.', 'Facility rules must be followed.'], de: ['Paketinhalt vor Buchung prüfen.', 'Regeln der Anlage sind einzuhalten.'], ru: ['Уточните состав пакета до бронирования.', 'Необходимо соблюдать правила комплекса.'] },
  },

  'fish': {
    title: { tr: 'Alanya Balık Avı Turu', en: 'Alanya Fishing Tour', de: 'Alanya Angeltour', ru: 'Рыбалка в Аланье' },
    location: { tr: 'Alanya Açıkları • Antalya', en: 'Off Alanya Coast • Antalya', de: 'Vor der Küste Alanyas • Antalya', ru: 'У побережья Аланьи • Анталья' },
    duration: { tr: 'Yaklaşık 4–6 saat', en: 'Approx. 4–6 hours', de: 'Ca. 4–6 Stunden', ru: 'Около 4–6 часов' },
    description: { tr: 'Akdeniz açıklarında sakin ve keyifli bir balık avı deneyimi; yeni başlayanlar ve deneyimliler için uygundur.', en: 'A relaxed fishing experience off the Mediterranean coast suitable for beginners and experienced guests.', de: 'Entspanntes Angelerlebnis auf dem Mittelmeer für Anfänger und Erfahrene.', ru: 'Спокойная морская рыбалка в Средиземном море для новичков и опытных гостей.' },
    included: { tr: ['Balıkçılık ekipmanları', 'Tekne hizmeti', 'Temel yönlendirme'], en: ['Fishing equipment', 'Boat service', 'Basic guidance'], de: ['Angelausrüstung', 'Boot', 'Grundlegende Anleitung'], ru: ['Рыболовные снасти', 'Лодка', 'Базовый инструктаж'] },
    excluded: { tr: ['Kişisel ekipmanlar', 'Ekstra yiyecek/içecekler'], en: ['Personal gear', 'Extra food/drinks'], de: ['Persönliche Ausrüstung', 'Zusätzliche Speisen/Getränke'], ru: ['Личное снаряжение', 'Дополнительная еда/напитки'] },
    important: { tr: ['Deniz koşullarına göre rota ve saat değişebilir.', 'Güneş koruması önerilir.'], en: ['Route and timing may vary with sea conditions.', 'Sun protection is recommended.'], de: ['Route und Zeit können je nach Seegang variieren.', 'Sonnenschutz empfohlen.'], ru: ['Маршрут и время могут меняться из-за моря.', 'Рекомендуется защита от солнца.'] },
  },

  'bugy': {
    title: { tr: 'Alanya Buggy Safari', en: 'Alanya Buggy Safari', de: 'Alanya Buggy-Safari', ru: 'Багги-сафари в Аланье' },
    location: { tr: 'Alanya • Antalya', en: 'Alanya • Antalya', de: 'Alanya • Antalya', ru: 'Аланья • Анталья' },
    duration: { tr: 'Yaklaşık 2–3 saat', en: 'Approx. 2–3 hours', de: 'Ca. 2–3 Stunden', ru: 'Около 2–3 часов' },
    description: { tr: 'Doğal parkurlarda buggy araçlarıyla gerçekleştirilen eğlenceli, çamurlu ve hareketli off-road deneyimi.', en: 'A fun, muddy and energetic off-road experience on natural tracks with buggy vehicles.', de: 'Spaßiges, schlammiges und actionreiches Offroad-Erlebnis mit Buggys.', ru: 'Весёлое, динамичное и местами грязное бездорожье на багги.' },
    included: { tr: ['Buggy kullanımı', 'Kask', 'Güvenlik bilgilendirmesi'], en: ['Buggy use', 'Helmet', 'Safety briefing'], de: ['Buggy-Nutzung', 'Helm', 'Sicherheitseinweisung'], ru: ['Багги', 'Шлем', 'Инструктаж'] },
    excluded: { tr: ['Fotoğraf/video', 'Kişisel koruyucu aksesuarlar', 'Kişisel harcamalar'], en: ['Photo/video', 'Personal protective accessories', 'Personal expenses'], de: ['Foto/Video', 'Persönliche Schutzaccessoires', 'Persönliche Ausgaben'], ru: ['Фото/видео', 'Личные защитные аксессуары', 'Личные расходы'] },
    important: { tr: ['Kirlenebilecek kıyafetler tercih ediniz.', 'Sürüş ve yaş kuralları operatöre göre uygulanır.', 'Talimatlara uyulması zorunludur.'], en: ['Wear clothes that can get dirty.', 'Driving and age rules are set by the operator.', 'Instructions must be followed.'], de: ['Kleidung tragen, die schmutzig werden darf.', 'Fahr- und Altersregeln legt der Betreiber fest.', 'Anweisungen sind zu befolgen.'], ru: ['Наденьте одежду, которую не жалко испачкать.', 'Возрастные и водительские правила определяет оператор.', 'Инструкции обязательны к соблюдению.'] },
  },
};
