import { PUBLIC_SITE_ORIGIN } from '$env/static/public';

export const SITE_ORIGIN = PUBLIC_SITE_ORIGIN;
export const SITE_NAME = 'kaian.dev';

export const OG_IMAGE = {
	path: '/og.jpg',
	width: 460,
	height: 460,
	type: 'image/jpeg'
} as const;

export function absoluteUrl(path: string) {
	return `${SITE_ORIGIN}${path}`;
}
