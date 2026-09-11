'use client';

import { useMemo, useState } from 'react';

type GalleryImage = {
  id: number;
  url: string;
  isCover: boolean;
  sortOrder: number;
};

type TourGalleryProps = {
  title: string;
  fallbackImage: string;
  images: GalleryImage[];
};

export default function TourGallery({
  title,
  fallbackImage,
  images,
}: TourGalleryProps) {
  const orderedImages = useMemo(() => {
    const sorted = [...images].sort((a, b) => {
      if (a.isCover !== b.isCover) return a.isCover ? -1 : 1;
      if (a.sortOrder !== b.sortOrder) return a.sortOrder - b.sortOrder;
      return a.id - b.id;
    });

    if (sorted.length === 0) {
      return [
        {
          id: -1,
          url: fallbackImage,
          isCover: true,
          sortOrder: 0,
        },
      ];
    }

    return sorted;
  }, [images, fallbackImage]);

  const [selectedId, setSelectedId] = useState<number>(orderedImages[0].id);

  const selectedImage =
    orderedImages.find((image) => image.id === selectedId) ?? orderedImages[0];

  return (
    <div className="tourGallery">
      <div className="tourGalleryMain">
        <img
          className="heroimg"
          src={selectedImage.url}
          alt={title}
        />
      </div>

      {orderedImages.length > 1 && (
        <div className="tourGalleryThumbs" aria-label={`${title} fotoğraf galerisi`}>
          {orderedImages.map((image, index) => {
            const active = image.id === selectedImage.id;

            return (
              <button
                key={image.id}
                type="button"
                className={`tourGalleryThumb ${active ? 'active' : ''}`}
                onClick={() => setSelectedId(image.id)}
                aria-label={`${title} fotoğraf ${index + 1}`}
                aria-pressed={active}
              >
                <img
                  src={image.url}
                  alt={`${title} - ${index + 1}`}
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
