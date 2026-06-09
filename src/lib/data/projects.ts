import { m } from '$lib/paraglide/messages';

export interface Project {
	id: string;
	title: string;
	description: string;
	link: {
		github: string;
		website?: string;
	};
	stack: string[];
}

export const projects: Project[] = [
	{
		id: 'fsw_barber',
		title: 'FSW Barber',
		description: m['projects.entries.fsw_barber.description'](),
		link: {
			github: 'https://github.com/KaianDev/fsw-barbershop',
			website: 'https://fsw-barbershop-six.vercel.app'
		},
		stack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Shadcn UI', 'React Hook Form', 'Zod']
	},
	{
		id: 'facilitador',
		title: 'Facilitador',
		description: m['projects.entries.facilitador.description'](),
		link: {
			github: 'https://github.com/KaianDev/facilitador',
			website: 'https://facilitador.vercel.app'
		},
		stack: ['React', 'TypeScript', 'Tailwind CSS', 'Shadcn UI', 'React Hook Form', 'Zod', 'Vite']
	},
	{
		id: 'fintrack_challenger',
		title: 'Fintrack Challenger',
		description: m['projects.entries.fintrack_challenger.description'](),
		link: {
			github: 'https://github.com/KaianDev/fintrack-challenger'
		},
		stack: [
			'React',
			'Next.js',
			'TypeScript',
			'Tailwind CSS',
			'Shadcn UI',
			'Chart.js',
			'React Hook Form',
			'Zod'
		]
	},
	{
		id: 'gg_test',
		title: 'GG Test',
		description: m['projects.entries.gg_test.description'](),
		link: {
			github: 'https://github.com/KaianDev/gg-test'
		},
		stack: ['Svelte', 'TypeScript', 'Tailwind CSS', 'Gamepad API']
	}
];
