export interface ProjectLink {
	name: string;
	url: string;
}

export interface Project {
	name: string;
	slug: string;
	title: string;
	type: string;
	stack: string[];
	description: string;
	image: string;

	gallery?: string[];

	links?: {
		name: string;
		url: string;
	};

	content?: Record<
		string,
		{
			title: string;
			body?: string[];
			list?: string[];
			items?: {
				name: string;
				description: string;
			}[];
			next?: string[];
			gallery?: string[]; // ✅ AJOUT ICI
		}
	>;
}

export interface Filter {
	id: string;
	label: string;
	title: string;
	description: string;
	projects: Project[];
}
