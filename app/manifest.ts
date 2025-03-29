import type { MetadataRoute } from 'next';
import { COLORS } from '~/_components/_common/_colors.css';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '편리자판기',
    short_name: '편리자판기',
    description: 'Util Vending Machine by Seungyoon Yu',
    start_url: '/',
    display: 'standalone',
    background_color: COLORS.GRAY_100,
    theme_color: COLORS.GRAY_900,
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
