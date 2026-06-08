import { m } from '$lib/paraglide/messages';

export type CareerEntry = {
	id: string;
	company: string;
	current?: boolean;
	date: string;
	role: string;
	body: string;
};

export const CAREER_ENTRIES: CareerEntry[] = [
	{
		id: 'startamus',
		company: 'Startamus',
		date: m['career.entries.startamus.date'](),
		role: m['career.entries.startamus.role'](),
		body: m['career.entries.startamus.body']()
	},
	{
		id: 'nuuvem',
		company: 'Nuuvem',
		current: true,
		date: m['career.entries.nuuvem.date'](),
		role: m['career.entries.nuuvem.role'](),
		body: m['career.entries.nuuvem.body']()
	}
];
