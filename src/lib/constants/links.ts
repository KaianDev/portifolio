import { m } from '$lib/paraglide/messages';

export type NavLink = {
	label: string;
	href: string;
};

export const NAV_LINKS: NavLink[] = [
	{
		label: m['header.links.about'](),
		href: '/#about'
	},
	{
		label: m['header.links.stack'](),
		href: '/#stack'
	},
	{
		label: m['header.links.career'](),
		href: '/#career'
	},
	{
		label: m['header.links.projects'](),
		href: '/#projects'
	},
	{
		label: m['header.links.contact'](),
		href: '/#contact'
	}
];

export const SOCIAL_LINKS = {
	github: 'https://github.com/kaiandev',
	linkedin: 'https://www.linkedin.com/in/kaiandev',
	instagram: 'https://www.instagram.com/kaian.dev'
};

export const EXTERNAL_LINKS = {
	spawnd: 'https://spawnd.gg?utm_source=kaian.dev'
};
