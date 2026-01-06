export interface Service {
	title: string;
	slug: string;
	description1: string;
	description2: string;
	image: string;

	content: {
		intro: {
			title: string;
			body: string[];
			icon: string;
		};

		approach: {
			icon: string;
			title: string;
			steps: string[];
		};

		deliverables: {
			icon: string;
			title: string;
			list: string[];
		};

		target?: {
			icon: string;
			title: string;
			list: string[];
		};

		outcome: {
			icon: string;
			title: string;
			body: string[];
		};
	};
}
