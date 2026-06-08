/**
 * Hero frame video source. Supports:
 * - Public files: "/videos/hero.mp4" (place the file in `public/videos/`)
 * - Relative public paths: "videos/hero.mp4"
 * - External URLs: "https://example.com/video.mp4"
 */
export const HERO_VIDEO_SRC = "https://res.cloudinary.com/dtt1dhikf/video/upload/v1695841152/background_dsz0py.mp4";

export function resolveVideoSrc(src: string): string {
  if (/^https?:\/\//i.test(src)) {
    return src;
  }

  return src.startsWith("/") ? src : `/${src}`;
}
