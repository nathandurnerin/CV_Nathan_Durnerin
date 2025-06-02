import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";


type Slide = {
	logo: string;
	alt: string;
	content: React.ReactNode;
   details: React.ReactNode;
};

const slides: Slide[] = [
	{
		logo: "./icone_wild_code_school.png", // à remplacer par ton chemin
		alt: "Wild Code School",
		content:<>
			Suite à une reconversion professionnelle, j’ai décidé de donner un nouveau souffle à ma carrière en intégrant la Wild Code School, une formation reconnue pour son approche innovante et immersive. <br /><br /> Mon objectif était clair : approfondir mes compétences dans le domaine du design, tout en consolidant mes bases techniques. Passionnée par l’esthétique, la créativité et la conception d’expériences utilisateur intuitives, j’ai choisi un environnement d’apprentissage dynamique, axé sur la pratique et les projets concrets.
         </>,
         details:<>
         Suite à une reconversion professionnelle, j’ai décidé de donner un nouveau souffle à ma carrière en intégrant la Wild Code School, une formation reconnue pour son approche innovante et immersive. Mon objectif était clair : approfondir mes compétences dans le domaine du design, tout en consolidant mes bases techniques. Passionnée par l’esthétique, la créativité et la conception d’expériences utilisateur intuitives, j’ai choisi un environnement d’apprentissage dynamique, axé sur la pratique et les projets concrets. <br /><br /> Cette formation m’a permis de développer une véritable méthodologie de travail, de collaborer avec d’autres profils créatifs et techniques, et d’explorer les différents aspects du design digital, de l’UX à l’UI en passant par le prototypage. Elle a été une étape décisive pour élargir mes horizons professionnels et renforcer ma capacité à concevoir des solutions à la fois fonctionnelles et esthétiques.
         </>
	},
	{
		logo: "./sobefi.png",
		alt: "Sobefi",
		content:<>
			Sobefi a été ma première expérience professionnelle significative. J’y ai travaillé pendant trois ans, une période particulièrement formatrice qui m’a permis de consolider mes compétences en design graphique. <br /><br /> Au sein de cette entreprise, j’ai eu l’opportunité de mettre en pratique mes connaissances théoriques dans un cadre concret, tout en répondant à des problématiques variées et exigeantes.</>,
         details:<>Sobefi a été ma première expérience professionnelle significative. J’y ai travaillé pendant trois ans, une période particulièrement formatrice qui m’a permis de consolider mes compétences en design graphique. Au sein de cette entreprise, j’ai eu l’opportunité de mettre en pratique mes connaissances théoriques dans un cadre concret, tout en répondant à des problématiques variées et exigeantes. <br /><br />Chaque projet représentait un nouveau défi créatif, stimulant mon sens de l’esthétique, ma rigueur et ma capacité à proposer des solutions visuelles cohérentes et impactantes. Cette expérience m’a également permis de mieux appréhender les contraintes professionnelles du métier et d’acquérir une autonomie précieuse dans la gestion de projets design.</>
	},
	{
		logo: "./t-in.png",
		alt: "T-in Communication",
		content:<>
			T-in Communication a été la première entreprise que j’ai intégrée en tant que stagiaire dans le cadre de ma formation de graphiste. <br /><br /> Ce stage d’un mois a marqué une étape importante dans mon parcours, en me permettant de faire mes premiers pas dans le monde professionnel du design graphique.</>,
         details:<>T-in Communication a été la première entreprise que j’ai intégrée en tant que stagiaire dans le cadre de ma formation de graphiste. Ce stage d’un mois a marqué une étape importante dans mon parcours, en me permettant de faire mes premiers pas dans le monde professionnel du design graphique. <br /><br />Plongée dans un environnement de travail réel, j’ai pu confronter mes acquis théoriques à des projets concrets, tout en découvrant les exigences du métier au quotidien. Cette expérience m’a permis de mieux comprendre les attentes des clients, les processus de création en agence et l’importance du travail en équipe. Elle a renforcé ma motivation à évoluer dans ce domaine et m’a donné un aperçu précieux de la réalité du métier de graphiste.</>
	},
	{
		logo: "./AAA-ECOLE-LOGO.png",
		alt: "Académie des Arts Appliqués",
		content:<>
			J’ai suivi une formation de trois ans à l’Académie des Arts Appliqués, une école reconnue pour la qualité de son enseignement et son approche professionnalisante. <br /><br /> Ce cursus m’a permis de me former de manière approfondie au métier de graphiste, en développant une base solide de compétences techniques et créatives.</>,
         details:<>J’ai suivi une formation de trois ans à l’Académie des Arts Appliqués, une école reconnue pour la qualité de son enseignement et son approche professionnalisante. Ce cursus m’a permis de me former de manière approfondie au métier de graphiste, en développant une base solide de compétences techniques et créatives. <br /><br />Dans un environnement stimulant et exigeant, j’ai eu l’opportunité d’explorer une grande diversité de supports et de méthodes, allant du design print traditionnel aux outils numériques les plus récents. Cette formation m’a également appris à affiner mon regard graphique, à structurer mes idées visuellement, et à concevoir des projets complets, de la phase de recherche jusqu’à la finalisation. Elle a constitué le socle essentiel de mon parcours dans le domaine du design visuel.</>
	},
];

const Slideshow = () => {
	const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const paginate = (newDirection: number) => {
		setIndex(([prevIndex]) => {
			const nextIndex =
				(prevIndex + newDirection + slides.length) % slides.length;
			return [nextIndex, newDirection];
		});
	};

	const variants = {
		enter: (direction: number) => ({
			x: direction > 0 ? 100 : -100,
			opacity: 0,
		}),
		center: {
			x: 0,
			opacity: 1,
		},
		exit: (direction: number) => ({
			x: direction > 0 ? -100 : 100,
			opacity: 0,
		}),
	};

	return (
		<div className="w-full max-w-3xl mx-auto px-4 py-8">
			<div className="relative h-[600px] md:w-2/3 md:mx-auto xl:w-full">
				<AnimatePresence mode="wait" custom={direction}>
					<motion.div
						key={index}
						custom={direction}
						variants={variants}
						initial="enter"
						animate="center"
						exit="exit"
						transition={{ duration: 0.4 }}
						className="absolute inset-0 bg-tertiary rounded-2xl p-6 text-white shadow-xl flex flex-col items-center justify-center text-center"
					>
						<img
							src={slides[index].logo}
							alt={slides[index].alt}
							className="h-30 mb-10"
						/>
						<p className="mb-6 text-sm leading-6 ">{slides[index].content}</p>
						<button
							type="button"
							onClick={() => setIsModalOpen(true)}
							className="px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition-colors"
						>
							En savoir plus
						</button>
					</motion.div>
				</AnimatePresence>
			</div>
			{/* 🔘 Indicateurs de pagination */}
			<div className="mt-4 flex justify-center gap-2">
				{slides.map((slide) => (
					<div
						key={slide.alt}
						className={`w-2 h-2 rounded-full transition-all ${
							slides.indexOf(slide) === index
								? "bg-white scale-110"
								: "bg-zinc-400"
						}`}
					/>
				))}
			</div>

			{/* 🔽 Boutons sous la carte */}
			<div className="pt-10 flex justify-center gap-10">
				<button
					type="button"
					onClick={() => paginate(-1)}
					className="bg-white hover:bg-zinc-400 rounded-full p-2 text-secondary shadow"
					aria-label="Slide précédente"
				>
					<ChevronLeft size={20} />
				</button>
				<button
					type="button"
					onClick={() => paginate(1)}
					className="bg-white hover:bg-zinc-300 rounded-full p-2 text-secondary shadow"
					aria-label="Slide suivante"
				>
					<ChevronRight size={20} />
				</button>
			</div>
         
         <AnimatePresence>
	{isModalOpen && (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
		>
			<motion.div
				initial={{ y: 30, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				exit={{ y: 30, opacity: 0 }}
				transition={{ duration: 0.3 }}
				className="bg-white text-black rounded-2xl p-6 w-full max-w-md shadow-xl relative"
			>
				<h2 className="text-2xl font-semibold mb-4">{slides[index].alt}</h2>
				<p className="text-sm leading-6 mb-6">
					{slides[index].details}
				</p>
				<button
					type="button"
					onClick={() => setIsModalOpen(false)}
					className="absolute top-4 right-4 text-zinc-500 hover:text-black text-lg"
				>
					✕
				</button>
			</motion.div>
		</motion.div>
	)}
</AnimatePresence>


		</div>
	);
};

export default Slideshow;
