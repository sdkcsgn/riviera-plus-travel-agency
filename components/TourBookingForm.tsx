'use client';

import {useState} from 'react';
import type {FormEvent} from 'react';
import type {Lang} from '@/lib/tourDetails';

const translations = {
  tr: {
    title: 'Rezervasyon Talebi',
    name: 'Ad Soyad',
    email: 'E-posta',
    phone: 'Telefon / WhatsApp',
    date: 'Tur Tarihi',
    adults: 'Yetişkin',
    children: 'Çocuk',
    note: 'Otel, alınış noktası veya özel isteğiniz...',
    send: 'Rezervasyon Talebi Gönder',
    sending: 'Gönderiliyor...',
    successTitle: 'Rezervasyon talebiniz alındı',
    successText: 'En kısa sürede sizinle iletişime geçeceğiz.',
    error: 'Rezervasyon gönderilemedi. Lütfen tekrar deneyin.',
    close: 'Kapat',
  },
  en: {
    title: 'Booking Request',
    name: 'Full Name',
    email: 'Email',
    phone: 'Phone / WhatsApp',
    date: 'Tour Date',
    adults: 'Adults',
    children: 'Children',
    note: 'Hotel, pickup point or special requests...',
    send: 'Send Booking Request',
    sending: 'Sending...',
    successTitle: 'Your booking request was received',
    successText: 'We will contact you as soon as possible.',
    error: 'Booking request could not be sent. Please try again.',
    close: 'Close',
  },
  de: {
    title: 'Reservierungsanfrage',
    name: 'Vor- und Nachname',
    email: 'E-Mail',
    phone: 'Telefon / WhatsApp',
    date: 'Tourdatum',
    adults: 'Erwachsene',
    children: 'Kinder',
    note: 'Hotel, Abholort oder besondere Wünsche...',
    send: 'Reservierungsanfrage senden',
    sending: 'Wird gesendet...',
    successTitle: 'Ihre Reservierungsanfrage wurde erhalten',
    successText: 'Wir kontaktieren Sie so schnell wie möglich.',
    error: 'Reservierungsanfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut.',
    close: 'Schließen',
  },
  ru: {
    title: 'Заявка на бронирование',
    name: 'Имя и фамилия',
    email: 'Электронная почта',
    phone: 'Телефон / WhatsApp',
    date: 'Дата тура',
    adults: 'Взрослые',
    children: 'Дети',
    note: 'Отель, место трансфера или особые пожелания...',
    send: 'Отправить заявку',
    sending: 'Отправка...',
    successTitle: 'Ваша заявка получена',
    successText: 'Мы свяжемся с вами в ближайшее время.',
    error: 'Не удалось отправить заявку. Пожалуйста, попробуйте снова.',
    close: 'Закрыть',
  },
} satisfies Record<Lang, Record<string, string>>;

export default function TourBookingForm({
  tourId,
  tourTitle,
  lang,
  buttonLabel,
}: {
  tourId: number;
  tourTitle: string;
  lang: Lang;
  buttonLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const t = translations[lang];

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError('');

    const form = new FormData(e.currentTarget);

    const payload = {
      tourId,
      name: String(form.get('name') || ''),
      email: String(form.get('email') || ''),
      phone: String(form.get('phone') || ''),
      date: String(form.get('date') || ''),
      adults: Number(form.get('adults') || 1),
      children: Number(form.get('children') || 0),
      note: String(form.get('note') || ''),
    };

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('BOOKING_FAILED');
      }

      setSent(true);
      e.currentTarget.reset();
    } catch {
      setError(t.error);
    } finally {
      setSending(false);
    }
  }

  function close() {
    setOpen(false);
    setSent(false);
    setError('');
    setSending(false);
  }

  return (
    <>
      <button
        type="button"
        className="reserveButton"
        onClick={() => setOpen(true)}
      >
        {buttonLabel}
      </button>

      {open && (
        <div className="bookingOverlay" onClick={close}>
          <div
            className="bookingModal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="bookingClose"
              onClick={close}
              aria-label={t.close}
            >
              ×
            </button>

            <div className="bookingEyebrow">RIVIERA PLUS</div>
            <h2>{t.title}</h2>
            <p className="bookingTour">{tourTitle}</p>

            {sent ? (
              <div className="bookingSuccess">
                <strong>{t.successTitle}</strong>
                <span>{t.successText}</span>

                <button
                  type="button"
                  className="bookingSubmit"
                  onClick={close}
                >
                  {t.close}
                </button>
              </div>
            ) : (
              <form className="bookingForm" onSubmit={submit}>
                <label>
                  <span>{t.name}</span>
                  <input name="name" required />
                </label>

                <label>
                  <span>{t.email}</span>
                  <input name="email" type="email" required />
                </label>

                <label>
                  <span>{t.phone}</span>
                  <input name="phone" required />
                </label>

                <label>
                  <span>{t.date}</span>
                  <input name="date" type="date" required />
                </label>

                <div className="bookingTwo">
                  <label>
                    <span>{t.adults}</span>
                    <input
                      name="adults"
                      type="number"
                      min="1"
                      defaultValue="2"
                      required
                    />
                  </label>

                  <label>
                    <span>{t.children}</span>
                    <input
                      name="children"
                      type="number"
                      min="0"
                      defaultValue="0"
                    />
                  </label>
                </div>

                <label>
                  <span>{t.note}</span>
                  <textarea name="note" rows={4} />
                </label>

                {error && <div className="bookingError">{error}</div>}

                <button
                  className="bookingSubmit"
                  type="submit"
                  disabled={sending}
                >
                  {sending ? t.sending : t.send}
                </button>
              </form>
            )}
          </div>

          <style jsx>{`
            .reserveButton {
              display: block;
              width: 100%;
              margin-top: 16px;
              padding: 14px 16px;
              border: 0;
              border-radius: 10px;
              background: #d9b94f;
              color: #17211e;
              text-align: center;
              font: inherit;
              font-weight: 900;
              cursor: pointer;
            }

            .bookingOverlay {
              position: fixed;
              inset: 0;
              z-index: 9999;
              display: grid;
              place-items: center;
              padding: 20px;
              background: rgba(10, 25, 21, .68);
              backdrop-filter: blur(4px);
            }

            .bookingModal {
              position: relative;
              width: min(590px, 100%);
              max-height: calc(100vh - 40px);
              overflow-y: auto;
              border-radius: 18px;
              background: #fff;
              padding: 28px;
              box-shadow: 0 24px 80px rgba(0,0,0,.28);
            }

            .bookingClose {
              position: absolute;
              top: 14px;
              right: 14px;
              width: 38px;
              height: 38px;
              border: 0;
              border-radius: 50%;
              background: #eef1f0;
              color: #173e36;
              font-size: 24px;
              line-height: 1;
              cursor: pointer;
            }

            .bookingEyebrow {
              margin-bottom: 8px;
              color: #b49229;
              font-size: 12px;
              font-weight: 900;
              letter-spacing: .12em;
            }

            h2 {
              margin: 0;
              color: #172521;
              font-size: 28px;
            }

            .bookingTour {
              margin: 8px 42px 22px 0;
              color: #66736f;
              line-height: 1.5;
            }

            .bookingForm {
              display: grid;
              gap: 14px;
            }

            label {
              display: grid;
              gap: 6px;
            }

            label span {
              color: #45534f;
              font-size: 13px;
              font-weight: 800;
            }

            input,
            textarea {
              width: 100%;
              border: 1px solid #dce1df;
              border-radius: 10px;
              background: #fff;
              padding: 12px 13px;
              color: #182522;
              font: inherit;
              outline: none;
            }

            input:focus,
            textarea:focus {
              border-color: #b99a36;
              box-shadow: 0 0 0 3px rgba(217,185,79,.16);
            }

            textarea {
              resize: vertical;
            }

            .bookingTwo {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 12px;
            }

            .bookingSubmit {
              width: 100%;
              border: 0;
              border-radius: 10px;
              background: #173e36;
              color: #fff;
              padding: 14px 16px;
              font: inherit;
              font-weight: 900;
              cursor: pointer;
            }

            .bookingSubmit:disabled {
              opacity: .65;
              cursor: wait;
            }

            .bookingError {
              border-radius: 10px;
              background: #fdecef;
              color: #a8293c;
              padding: 12px 14px;
              font-size: 14px;
            }

            .bookingSuccess {
              display: grid;
              gap: 12px;
              border-radius: 14px;
              background: #eef8f1;
              padding: 20px;
              color: #245f35;
            }

            .bookingSuccess strong {
              font-size: 18px;
            }

            .bookingSuccess span {
              color: #4f6b57;
              line-height: 1.5;
            }

            .bookingSuccess .bookingSubmit {
              margin-top: 6px;
            }

            @media (max-width: 560px) {
              .bookingModal {
                padding: 22px 18px;
              }

              .bookingTwo {
                grid-template-columns: 1fr;
              }

              h2 {
                font-size: 24px;
              }
            }
          `}</style>
        </div>
      )}
    </>
  );
}
