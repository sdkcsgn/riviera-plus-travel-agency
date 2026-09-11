'use client';

import { ChangeEvent, useMemo, useState } from 'react';

export type TourImageItem = {
  id: number;
  url: string;
  path: string;
  isCover: boolean;
  sortOrder: number;
};

type TourImageManagerProps = {
  tourId: number;
  initialImages?: TourImageItem[];
};

export default function TourImageManager({
  tourId,
  initialImages = [],
}: TourImageManagerProps) {
  const [images, setImages] = useState<TourImageItem[]>(initialImages);
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [busyImageId, setBusyImageId] = useState<number | null>(null);
  const [message, setMessage] = useState('');

  const sortedImages = useMemo(
    () =>
      [...images].sort((a, b) => {
        if (a.isCover !== b.isCover) return a.isCover ? -1 : 1;
        if (a.sortOrder !== b.sortOrder) return a.sortOrder - b.sortOrder;
        return a.id - b.id;
      }),
    [images]
  );

  function handleFiles(event: ChangeEvent<HTMLInputElement>) {
    const selected = Array.from(event.target.files ?? []);
    setFiles(selected);
    setMessage('');
  }

  async function uploadImages() {
    if (files.length === 0) {
      setMessage('Önce en az bir fotoğraf seçin.');
      return;
    }

    setLoading(true);
    setMessage('');

    const uploaded: TourImageItem[] = [];
    let failed = 0;

    try {
      for (const file of files) {
        const formData = new FormData();
        formData.append('tourId', String(tourId));
        formData.append('file', file);

        const response = await fetch('/api/admin/tour-images', {
          method: 'POST',
          body: formData,
        });

        const data = await response.json();

        if (!response.ok) {
          failed += 1;
          continue;
        }

        uploaded.push(data.image as TourImageItem);
      }

      if (uploaded.length > 0) {
        setImages((current) => [...current, ...uploaded]);
        setFiles([]);
      }

      if (failed === 0) {
        setMessage(
          uploaded.length === 1
            ? 'Fotoğraf başarıyla yüklendi.'
            : `${uploaded.length} fotoğraf başarıyla yüklendi.`
        );
      } else if (uploaded.length > 0) {
        setMessage(
          `${uploaded.length} fotoğraf yüklendi, ${failed} fotoğraf yüklenemedi.`
        );
      } else {
        setMessage('Fotoğraflar yüklenemedi.');
      }
    } catch {
      setMessage('Fotoğraf yüklenirken bağlantı hatası oluştu.');
    } finally {
      setLoading(false);
    }
  }

  async function makeCover(imageId: number) {
    setBusyImageId(imageId);
    setMessage('');

    try {
      const response = await fetch('/api/admin/tour-images', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ imageId }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.error || 'Ana görsel değiştirilemedi.');
        return;
      }

      setImages((current) =>
        current.map((image) => ({
          ...image,
          isCover: image.id === imageId,
        }))
      );

      setMessage('Ana görsel başarıyla değiştirildi.');
    } catch {
      setMessage('Ana görsel değiştirilirken bağlantı hatası oluştu.');
    } finally {
      setBusyImageId(null);
    }
  }

  async function deleteImage(imageId: number) {
    if (
      !window.confirm(
        'Bu fotoğrafı silmek istediğinize emin misiniz? Bu işlem geri alınamaz.'
      )
    ) {
      return;
    }

    setBusyImageId(imageId);
    setMessage('');

    try {
      const response = await fetch('/api/admin/tour-images', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ imageId }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.error || 'Fotoğraf silinemedi.');
        return;
      }

      const deleted = images.find((image) => image.id === imageId);
      const remaining = images.filter((image) => image.id !== imageId);

      if (deleted?.isCover && remaining.length > 0) {
        const nextCover = [...remaining].sort((a, b) => {
          if (a.sortOrder !== b.sortOrder) return a.sortOrder - b.sortOrder;
          return a.id - b.id;
        })[0];

        setImages(
          remaining.map((image) => ({
            ...image,
            isCover: image.id === nextCover.id,
          }))
        );
      } else {
        setImages(remaining);
      }

      setMessage(
        data.storageWarning
          ? 'Fotoğraf kaydı silindi. Depolama temizliği için uyarı oluştu.'
          : 'Fotoğraf başarıyla silindi.'
      );
    } catch {
      setMessage('Fotoğraf silinirken bağlantı hatası oluştu.');
    } finally {
      setBusyImageId(null);
    }
  }

  return (
    <div
      style={{
        border: '1px solid #e1e1e1',
        borderRadius: 14,
        padding: 16,
        background: '#fafafa',
        display: 'grid',
        gap: 16,
      }}
    >
      <div>
        <strong style={{ fontSize: 16 }}>Tur Fotoğrafları</strong>
        <div
          style={{
            fontSize: 13,
            color: '#666',
            marginTop: 4,
            lineHeight: 1.5,
          }}
        >
          Birden fazla JPG, PNG veya WebP seçebilirsiniz. Her fotoğraf en fazla
          10 MB olabilir.
        </div>
      </div>

      {sortedImages.length > 0 ? (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
            gap: 12,
          }}
        >
          {sortedImages.map((image) => {
            const busy = busyImageId === image.id;

            return (
              <div
                key={image.id}
                style={{
                  border: image.isCover
                    ? '2px solid #b7952f'
                    : '1px solid #dcdcdc',
                  borderRadius: 12,
                  padding: 8,
                  background: '#fff',
                  display: 'grid',
                  gap: 8,
                  alignContent: 'start',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    aspectRatio: '4 / 3',
                    borderRadius: 9,
                    overflow: 'hidden',
                    background: '#ececec',
                  }}
                >
                  <img
                    src={image.url}
                    alt="Tur fotoğrafı"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />

                  {image.isCover && (
                    <span
                      style={{
                        position: 'absolute',
                        top: 8,
                        left: 8,
                        background: '#173f36',
                        color: '#fff',
                        padding: '5px 8px',
                        borderRadius: 7,
                        fontSize: 11,
                        fontWeight: 800,
                      }}
                    >
                      ANA GÖRSEL
                    </span>
                  )}
                </div>

                {!image.isCover && (
                  <button
                    type="button"
                    onClick={() => makeCover(image.id)}
                    disabled={busy || loading}
                    style={{
                      border: '1px solid #b7952f',
                      background: '#fff8df',
                      color: '#594916',
                      borderRadius: 8,
                      padding: '9px 10px',
                      fontWeight: 800,
                      cursor: busy || loading ? 'not-allowed' : 'pointer',
                      opacity: busy || loading ? 0.6 : 1,
                    }}
                  >
                    {busy ? 'İşleniyor...' : 'Ana Görsel Yap'}
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => deleteImage(image.id)}
                  disabled={busy || loading}
                  style={{
                    border: '1px solid #d9a7a7',
                    background: '#fff4f4',
                    color: '#9b2424',
                    borderRadius: 8,
                    padding: '9px 10px',
                    fontWeight: 800,
                    cursor: busy || loading ? 'not-allowed' : 'pointer',
                    opacity: busy || loading ? 0.6 : 1,
                  }}
                >
                  {busy ? 'İşleniyor...' : 'Sil'}
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <div
          style={{
            border: '1px dashed #cfcfcf',
            borderRadius: 10,
            padding: 14,
            fontSize: 13,
            color: '#666',
            background: '#fff',
          }}
        >
          Henüz galeri fotoğrafı yok.
        </div>
      )}

      <div
        style={{
          borderTop: '1px solid #e3e3e3',
          paddingTop: 14,
          display: 'grid',
          gap: 10,
        }}
      >
        <input
          type="file"
          accept="image/jpeg,image/png,image/webp"
          multiple
          onChange={handleFiles}
          disabled={loading}
        />

        {files.length > 0 && (
          <div
            style={{
              fontSize: 13,
              color: '#333',
              lineHeight: 1.5,
            }}
          >
            Seçilen fotoğraf sayısı: <strong>{files.length}</strong>
          </div>
        )}

        <button
          type="button"
          className="btn gold"
          onClick={uploadImages}
          disabled={loading || files.length === 0}
          style={{
            justifySelf: 'start',
            minWidth: 190,
            opacity: loading || files.length === 0 ? 0.6 : 1,
          }}
        >
          {loading
            ? 'Fotoğraflar Yükleniyor...'
            : files.length > 1
              ? 'Fotoğrafları Yükle'
              : 'Fotoğrafı Yükle'}
        </button>
      </div>

      {message && (
        <div
          style={{
            fontSize: 14,
            fontWeight: 700,
            padding: '10px 12px',
            borderRadius: 9,
            background: '#fff',
            border: '1px solid #e2e2e2',
          }}
        >
          {message}
        </div>
      )}
    </div>
  );
}
