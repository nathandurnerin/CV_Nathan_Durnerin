const wildEatsImg = "/WildEats.png";
const JardinAlsacienImg = "/JardinAlsacien.png";
const CvNathanImg = "/CvNathan.png";
const TakuTakuImg = "/TakuTakuImg.png"

export const HERO_CONTENT = "On dit souvent de moi que je suis une personne empathique, à l’écoute et capable de m’intégrer naturellement dans une équipe. Travailler avec moi, c’est collaborer avec quelqu’un de toujours enthousiaste, qui allie intuition et sens de la cohésion pour créer un environnement bienveillant et constructif.";

export const EXPERIENCES = [
	{
		year: "2025 - 2026",
		role: "Etudiant en alternance",
		company: "Eni - Ecole Informatique",
		description: "Soucieux de poursuivre ma montée en compétences et de consolider mon profil professionnel, j’ai choisi d’intégrer l’école ENI dans le cadre d’une licence en alternance.",
		technologies: ["Java", "Angular", "JavaScript", "PHP", "mySQL","Python", "HTML", "CSS"],
	},
	{
		year: "2025",
		role: "Etudiant Développeur Web Full Stack",
		company: "Wild Code School",
		description: "Suite à une reconversion professionnelle, j’ai décidé de donner un nouveau souffle à ma carrière en intégrant la WILD CODE SCHOOL.",
		technologies: ["HTML", "CSS", "JavaScript", "mySQL", "React", "Node.js", "Express","GitHub", "Git"],
	},
	{
		year: "2022 - 2025",
		role: "Graphiste",
		company: "Sobefi",
		description: "SOBEFI a été ma première expérience professionnelle significative. J’y ai travaillé pendant trois ans, une période particulièrement formatrice qui m’a permis de consolider mes compétences en design graphique.",
		technologies: ["Illustrator", "InDesign", "Photoshop"],
	},
	{
		year: "Août 2018",
		role: "Stagiaire Graphiste",
		company: "T-IN Communication",
		description: "T-IN COMMUNICATION a été la première entreprise que j’ai intégrée en tant que stagiaire dans le cadre de ma formation de graphiste.",
		technologies: ["Illustrator", "InDesign", "Photoshop"],
	},
	{
		year: "2016 - 2019",
		role: "Etudiant Graphiste",
		company: "Académie des Arts Appliqués",
		description: "J’ai suivi une formation de trois ans à l’Académie des Arts Appliqués. Ce cursus m’a permis de me former de manière approfondie au métier de graphiste.",
		technologies: ["Illustrator", "InDesign", "Photoshop"],
	},
];

export const PROJECTS = [
	{
		title: "CV & Portfolio",
		image: CvNathanImg,
		description:
		"Un portfolio personnel présentant mes expériences, mes compétences et mes projets.",
		technologies: ["HTML", "CSS", "React", "JavaScript", "Tailwind"],
	},
	{
		title: "TakuTaku",
		image: TakuTakuImg,
		link: "https://takutaku-app.vercel.app/",
		description:
		"Troisième projet de groupe après 3 mois de formation : Un site de streaming pour visionner vos animés préférés.",
		technologies: ["HTML", "CSS", "React", "JavaScript","Supabase", "Tailwind"],
	},
	{
		title: "Le jardin Alsacien",
		image: JardinAlsacienImg,
		link: "https://strasbouq-client.vercel.app/",
		description:
			"Deuxième projet de groupe après 2 mois de formation : ce site e-commerce permet d’acheter des bouquets de fleurs livrables dans la région de Strasbourg.",
		technologies: ["HTML", "CSS", "React", "JavaScript","Local Storage", "Tailwind"],
	},
	{
		title: "Wild Eats",
		image: wildEatsImg,
		link: "https://nathandurnerin.github.io/Projet-Wild-Eats/",
		description:
			"Premier projet de groupe après 1 mois de formation : ce site recense les différentes options de restauration disponibles pour les étudiants de la Wild Code School.",
		technologies: ["HTML", "CSS", "JavaScript"],
	},
];

export const CONTACT = {
	adresse: "01390 Mionnay",
	tel: "06 67 42 17 45",
	email: "durnerin.nathan01@gmail.com",
};
