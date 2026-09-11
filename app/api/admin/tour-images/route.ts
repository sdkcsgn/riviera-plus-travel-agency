import { randomUUID } from 'crypto';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

import { isAdmin } from '@/lib/auth';
import { db } from '@/lib/db';
import { supabaseAdmin } from '@/lib/supabaseAdmin';

const BUCKET = 'tour-images';
const MAX_FILE_SIZE = 10 * 1024 * 1024;

const allowedTypes = new Set([
  'image/jpeg',
  'image/png',
  'image/webp',
]);

function getExtension(file: File) {
  if (file.type === 'image/jpeg') return 'jpg';
  if (file.type === 'image/png') return 'png';
  if (file.type === 'image/webp') return 'webp';
  return null;
}

function refreshTourPages(slug: string) {
  revalidatePath('/admin');
  revalidatePath('/');
  revalidatePath(`/tour/${slug}`);
}

export async function POST(request: Request) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'Yetkisiz işlem' }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const tourId = Number(formData.get('tourId'));
    const file = formData.get('file');

    if (!Number.isInteger(tourId) || tourId <= 0) {
      return NextResponse.json({ error: 'Geçersiz tur' }, { status: 400 });
    }

    if (!(file instanceof File)) {
      return NextResponse.json({ error: 'Fotoğraf seçilmedi' }, { status: 400 });
    }

    if (!allowedTypes.has(file.type)) {
      return NextResponse.json(
        { error: 'Sadece JPG, PNG veya WebP yükleyebilirsiniz' },
        { status: 400 }
      );
    }

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: 'Fotoğraf en fazla 10 MB olabilir' },
        { status: 400 }
      );
    }

    const extension = getExtension(file);

    if (!extension) {
      return NextResponse.json(
        { error: 'Desteklenmeyen dosya türü' },
        { status: 400 }
      );
    }

    const tour = await db.tour.findUnique({
      where: { id: tourId },
      include: {
        images: {
          orderBy: [
            { isCover: 'desc' },
            { sortOrder: 'asc' },
            { id: 'asc' },
          ],
        },
      },
    });

    if (!tour) {
      return NextResponse.json({ error: 'Tur bulunamadı' }, { status: 404 });
    }

    const path = `${tour.slug}/${randomUUID()}.${extension}`;
    const buffer = Buffer.from(await file.arrayBuffer());

    const { error: uploadError } = await supabaseAdmin.storage
      .from(BUCKET)
      .upload(path, buffer, {
        contentType: file.type,
        upsert: false,
      });

    if (uploadError) {
      return NextResponse.json({ error: uploadError.message }, { status: 500 });
    }

    const {
      data: { publicUrl },
    } = supabaseAdmin.storage.from(BUCKET).getPublicUrl(path);

    const isFirstImage = tour.images.length === 0;
    const nextSortOrder =
      tour.images.length === 0
        ? 0
        : Math.max(...tour.images.map((image) => image.sortOrder)) + 1;

    try {
      const image = await db.$transaction(async (tx) => {
        if (isFirstImage) {
          await tx.tour.update({
            where: { id: tourId },
            data: { image: publicUrl },
          });
        }

        return tx.tourImage.create({
          data: {
            tourId,
            url: publicUrl,
            path,
            isCover: isFirstImage,
            sortOrder: nextSortOrder,
          },
        });
      });

      refreshTourPages(tour.slug);

      return NextResponse.json({ ok: true, image });
    } catch (databaseError) {
      await supabaseAdmin.storage.from(BUCKET).remove([path]);
      throw databaseError;
    }
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: 'Fotoğraf yüklenirken beklenmeyen bir hata oluştu' },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'Yetkisiz işlem' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const imageId = Number(body?.imageId);

    if (!Number.isInteger(imageId) || imageId <= 0) {
      return NextResponse.json({ error: 'Geçersiz fotoğraf' }, { status: 400 });
    }

    const image = await db.tourImage.findUnique({
      where: { id: imageId },
      include: { tour: true },
    });

    if (!image) {
      return NextResponse.json({ error: 'Fotoğraf bulunamadı' }, { status: 404 });
    }

    await db.$transaction(async (tx) => {
      await tx.tourImage.updateMany({
        where: { tourId: image.tourId },
        data: { isCover: false },
      });

      await tx.tourImage.update({
        where: { id: image.id },
        data: { isCover: true },
      });

      await tx.tour.update({
        where: { id: image.tourId },
        data: { image: image.url },
      });
    });

    refreshTourPages(image.tour.slug);

    return NextResponse.json({
      ok: true,
      message: 'Ana görsel güncellendi',
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: 'Ana görsel değiştirilirken bir hata oluştu' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'Yetkisiz işlem' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const imageId = Number(body?.imageId);

    if (!Number.isInteger(imageId) || imageId <= 0) {
      return NextResponse.json({ error: 'Geçersiz fotoğraf' }, { status: 400 });
    }

    const image = await db.tourImage.findUnique({
      where: { id: imageId },
      include: {
        tour: {
          include: {
            images: {
              orderBy: [
                { isCover: 'desc' },
                { sortOrder: 'asc' },
                { id: 'asc' },
              ],
            },
          },
        },
      },
    });

    if (!image) {
      return NextResponse.json({ error: 'Fotoğraf bulunamadı' }, { status: 404 });
    }

    const remainingImages = image.tour.images.filter(
      (item) => item.id !== image.id
    );

    if (remainingImages.length === 0) {
      return NextResponse.json(
        {
          error:
            'Turda en az bir fotoğraf kalmalı. Önce yeni bir fotoğraf yükleyin.',
        },
        { status: 400 }
      );
    }

    const nextCover = image.isCover ? remainingImages[0] : null;

    await db.$transaction(async (tx) => {
      if (nextCover) {
        await tx.tourImage.updateMany({
          where: { tourId: image.tourId },
          data: { isCover: false },
        });

        await tx.tourImage.update({
          where: { id: nextCover.id },
          data: { isCover: true },
        });

        await tx.tour.update({
          where: { id: image.tourId },
          data: { image: nextCover.url },
        });
      }

      await tx.tourImage.delete({
        where: { id: image.id },
      });
    });

    const { error: storageError } = await supabaseAdmin.storage
      .from(BUCKET)
      .remove([image.path]);

    if (storageError) {
      console.error('Supabase Storage delete error:', storageError);
    }

    refreshTourPages(image.tour.slug);

    return NextResponse.json({
      ok: true,
      message: 'Fotoğraf silindi',
      storageWarning: Boolean(storageError),
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: 'Fotoğraf silinirken bir hata oluştu' },
      { status: 500 }
    );
  }
}
