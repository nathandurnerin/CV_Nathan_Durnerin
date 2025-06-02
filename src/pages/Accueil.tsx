import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Slideshow from "../components/slideShow";

type Category = "dev" | "design" | null;

function Accueil() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState<Category>(null);

	const devImages: string[] = [
		"./src/assets/images/html-5.svg",
		"./src/assets/images/tailwindcss-icon.svg",
		"./src/assets/images/javascript.svg",
		"./src/assets/images/github-icon.svg",
		"./src/assets/images/express.svg",
		"./src/assets/images/mysql.svg",
		"./src/assets/images/nodejs-icon.svg",
		"./src/assets/images/react.svg",
	];

	const designImages: string[] = [
		"./src/assets/images/adobe-illustrator.svg",
		"./src/assets/images/adobe-indesign.svg",
		"./src/assets/images/adobe-photoshop.svg",
	];

	const handleOpenModal = (category: Category) => {
		setSelectedCategory(category);
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
		setSelectedCategory(null);
	};

	return (
		<>
			<header>
				<div
					className="h-screen bg-cover bg-center bg-no-repeat xl:h-230 2xl:h-250"
					style={{
						backgroundImage: "url('/ImgGhibli.png')",
					}}
				>
					{/* Overlay pour lisibilité */}


					{/* Contenu texte */}
					<div className="relative z-10 flex flex-col pt-20 h-full px-8 md:pt-25">
						<div>
							<p className="text-white text-3xl font-medium tracking-widest md:text-5xl ">
								NATHAN
							</p>
							<p className="text-white text-5xl font-bold -mt-1 md:text-7xl">
								DURNERIN <span className="font-extrabold text-4xl">_</span>
							</p>
						</div>

						<div className="mt text-xl font-medium text-white md:text-3xl">
							<p>DEV WEB FULL STACK</p>
							<p className="-mt-1">& GRAPHISTE</p>
						</div>

					</div>
				</div>
			</header>

			{/* ------------------ ABOUT -------------------- */}

			<section className="bg-white md:h-[65vh]" aria-label="Présentation personnelle">
				<h2 className="text-primary text-3xl font-bold pt-12 ml-7">
					ABOUT ME <span className="font-extrabold">_</span>
				</h2>

				<section className="w-[90%] md:w-[90%] ml-4 md:ml-7 mt-8 text-sm leading-relaxed md:text-base md:text-justify">
					<p className=" md:mt-12">
						On dit souvent de moi que je suis une personne empathique, à
						l’écoute et capable de m’intégrer naturellement dans une équipe.
					</p>

					<p className="mt-3 md:mt-7">
						Travailler avec moi, c’est collaborer avec quelqu’un de toujours
						enthousiaste, qui allie intuition et sens de la cohésion pour créer
						un environnement bienveillant et constructif. J’ai également un fort
						attrait pour l’esthétisme : j’aime jouer avec les couleurs, les
						harmonies visuelles, et leur donner du sens.
					</p>

					<p className="mt-3 md:mt-7">
						Après trois années enrichissantes en tant que graphiste, j’ai
						souhaité approfondir mes compétences dans un secteur en constante
						évolution : le développement web. Ce virage m’a permis de lier ma
						sensibilité créative à des outils techniques plus poussés, et
						d’élargir mon champ d’action pour concevoir des expériences à la
						fois belles et fonctionnelles.
					</p>

					<p className="mt-3 mb-12 md:mt-7">
						Curieux et engagé, je suis toujours à la recherche de projets
						créatifs à fort impact.
					</p>
				</section>
			</section>

			{/* ------------------ FORMATION -------------------- */}

			<section className="bg-secondary h-auto pb-10 ">
				<div>
					<p className="text-white text-3xl font-bold ml-7 pt-12 pb-6 w-[400px]">
						FORMATION <br />
						<span className="text-primary">&</span> EXPÉRIENCE
						<span className="text-primary text-3xl font-extrabold ml-3 ">
							_
						</span>
					</p>
				</div>
				<Slideshow />
			</section>

			{/* ------------------ SKILLS -------------------- */}

			<section className="pb-20 bg-white">
				<p className="text-primary text-3xl font-bold pt-12 ml-7 ">
					SKILLS{" "}
					<span className="text-primary text-3xl font-extrabold ">_</span>
				</p>

				<article className="flex flex-wrap justify-center gap-5 mx-auto mt-5 ">
					{/* Web Developer Card */}
					<article className="grid place-items-center mx-auto rounded-xl mt-15 w-[85%] h-[468px] shadow-[0_4px_20px_rgba(0,0,0,0.5)] md:w-2/3">
						<img
							className="w-[100px] pt-5"
							src="./public/laptop-minimal.svg"
							alt="web dev icon"
						/>
						<h2 className="text-[2.2rem] font-bold">Web Developer</h2>
						<p className="font-bold text-5xl tracking-[0.2em] -mt-8">...</p>
						<p className="text-secondary font-medium w-[83%] text-center">
							Découvrez mes compétences dans le domaine de la programmation.
						</p>
						<button
							type="button"
							onClick={() => handleOpenModal("dev")}
							className="text-white bg-primary shadow-[0_3px_12px_rgba(0,0,0,0.4)] p-2 w-[150px] rounded-full border border-gray-400 flex justify-center mb-5 font-medium cursor-pointer hover:ease-in-out hover:scale-105 transition-transform duration-300"
						>
							En savoir plus
						</button>
					</article>

					{/* UI/UX Design Card */}
					<article className="grid place-items-center bg-primary rounded-xl mt-15 w-[85%] h-[468px] mx-auto shadow-[0_4px_20px_rgba(0,0,0,0.5)] md:w-2/3">
						<img
							className="w-[100px] pt-5"
							src="./public/pencil-ruler.svg"
							alt="design icon"
						/>
						<h2 className="text-[2.2rem] font-bold text-white">UI/UX Design</h2>
						<p className="font-bold text-5xl text-white tracking-[0.2em] -mt-8">
							...
						</p>
						<p className="text-white font-medium w-[83%] text-center">
							Découvrez mes compétences dans le domaine du design.
						</p>
						<button
							type="button"
							onClick={() => handleOpenModal("design")}
							className="text-primary bg-white shadow-[0_3px_12px_rgba(0,0,0,0.4)] p-2 w-[150px] rounded-full border border-gray-400 flex justify-center mb-5 font-medium cursor-pointer hover:ease-in-out hover:scale-105 transition-transform duration-300"
						>
							En savoir plus
						</button>
					</article>
				</article>
			</section>

			{/* ------------------ MODAL -------------------- */}
			<AnimatePresence>
				{isModalOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50"
						onClick={handleCloseModal}
					>
						<motion.div
							initial={{ scale: 0.95 }}
							animate={{ scale: 1 }}
							exit={{ scale: 0.95 }}
							onClick={(e) => e.stopPropagation()}
							className="relative bg-white dark:bg-secondary rounded-2xl shadow-xl p-8 max-w-4xl w-full overflow-auto max-h-[90vh] border border-zinc-200 dark:border-zinc-700 md:w-[80%]"
						>
							<button
								type="button"
								onClick={handleCloseModal}
								className="absolute top-4 right-4 p-2 dark:bg-zinc-700 text-white rounded-full transition"
								aria-label="Fermer"
							>
								<X size={20} />
							</button>

							<h2 className="text-2xl font-semibold text-center text-zinc-800 dark:text-white mb-8 ">
								Sites maîtrisés
							</h2>

							<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-2">
								{(selectedCategory === "dev" ? devImages : designImages).map(
									(src, idx) => (
										<div
											key={idx}
											className="flex items-center justify-center bg-white dark:bg-zinc-800 rounded-lg overflow-hidden shadow-md p-4 transition-transform hover:scale-105 hover:shadow-lg"
										>
											<img
												src={src}
												alt={`Preview ${idx + 1}`}
												className="max-h-32 w-auto object-contain"
											/>
										</div>
									),
								)}
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}

export default Accueil;
