'use client';

import { useState } from 'react';

type TourImageManagerProps = {
  tourId: number;
};

export default function TourImageManager({ tourId }: TourImageManagerProps) {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  async function uploadImage() {
    if (!file) {
      setMessage('Önce bir fotoğraf seçin.');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      const formData = new FormData();
      formData.append('tourId', String(tourId));
      formData.append('file', file);

      const response = await fetch('/api/admin/tour-images', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.error || 'Fotoğraf yüklenemedi.');
        return;
      }

      setMessage('Fotoğraf başarıyla yüklendi.');
      setFile(null);

      setTimeout(() => {
        window.location.reload();
      }, 800);
    } catch {
      setMessage('Fotoğraf yüklenirken bağlantı hatası oluştu.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        border: '1px solid #e1e1e1',
        borderRadius: 12,
        padding: 16,
        background: '#fafafa',
        display: 'grid',
        gap: 12,
      }}
    >
      <div>
        <strong>Tur Fotoğrafı Yükle</strong>
        <div
          style={{
            fontSize: 13,
            color: '#666',
            marginTop: 4,
          }}
        >
          JPG, PNG veya WebP — maksimum 10 MB
        </div>
      </div>

      <input
        type="file"
        accept="image/jpeg,image/png,image/webp"
        onChange={(event) => {
          setFile(event.target.files?.[0] ?? null);
          setMessage('');
        }}
      />

      {file && (
        <div
          style={{
            fontSize: 13,
            color: '#333',
          }}
        >
          Seçilen dosya: {file.name}
        </div>
      )}

      <button
        type="button"
        className="btn gold"
        onClick={uploadImage}
        disabled={loading || !file}
        style={{
          justifySelf: 'start',
          minWidth: 170,
          opacity: loading || !file ? 0.6 : 1,
        }}
      >
        {loading ? 'Yükleniyor...' : 'Fotoğrafı Yükle'}
      </button>

      {message && (
        <div
          style={{
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          {message}
        </div>
      )}
    </div>
  );
}