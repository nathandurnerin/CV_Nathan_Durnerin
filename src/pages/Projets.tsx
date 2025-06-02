import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FlipCard } from "../components/flipCard";

const projetsData = [
	{
		id: 1,
		category: "Web",
		content: (
			<FlipCard
				front={
					<div className="bg-white rounded-xl w-[320px] h-[320px] flex flex-col items-center justify-center p-4">
						<video autoPlay muted loop className="w-full h-40 rounded-md">
							<source src="./public/wildeatvideo.mp4" type="video/mp4" />
						</video>
						<h3 className="text-xl font-semibold mt-10">Wild Eat</h3>
					</div>
				}
				back={
					<div className="bg-white text-secondary rounded-xl w-[320px] h-[320px] flex flex-col items-center justify-center p-4 text-center">
						<p className="text-base ">
							Projet en groupe d'un site vitrine d'une cafétéria pour étudiants.
						</p>
						<a
							href="https://thibaud-guadagna.github.io/project1/"
							className="mt-3 bg-white text-primary px-4 py-2 rounded-full font-semibold"
						>
							Visiter
						</a>
					</div>
				}
			/>
		),
	},
	{
		id: 2,
		category: "Logos",
		content: (
			<FlipCard
				front={
					<div className="w-[320px] h-[320px] rounded-xl overflow-hidden">
						<img
							src="./public/sobefi-noir.png"
							alt="sobefi"
							className=" bg-primary w-[320px] h-[320px] object-contain"
						/>
					</div>
				}
				back={
					<div className="bg-primary text-white w-[320px] h-[320px] rounded-xl flex flex-col justify-center items-center text-center p-4">
						<h3 className="text-2xl font-semibold">Logo Sobefi</h3>
						<p className="text-base mt-5">
							Création de logo pour l'entreprise Sobefi pour laquelle j'ai
							travailler pendant 3 ans
						</p>
					</div>
				}
			/>
		),
	},
	{
		id: 3,
		category: "Logos",
		content: (
			<FlipCard
				front={
					<div className="bg-white rounded-xl overflow-hidden w-[320px] h-[320px] content-center">
						<img
							src="./public/LCDN.png"
							alt="LCDN"
							className=" w-[250px] mx-auto"
						/>
					</div>
				}
				back={
					<div className="bg-white text-secondary w-[320px] h-[320px] rounded-xl flex flex-col justify-center items-center text-center p-4">
						<h3 className="text-2xl font-semibold">Logo Le Coin des Nanas</h3>
						<p className="text-base mt-5">
							Création de logo pour le salon d'esthétique Le Coin des Nanas
						</p>
					</div>
				}
			/>
		),
	},

	{
		id: 4,
		category: "Logos",
		content: (
			<FlipCard
				front={
					<div className="bg-tertiary w-[320px] h-[320px] content-center rounded-xl overflow-hidden">
						<img
							src="./public/Brin-evasion.png"
							alt="Brin d'evasion"
							className=" w-[250px] mx-auto"
						/>
					</div>
				}
				back={
					<div className="bg-tertiary text-white w-[320px] h-[320px] rounded-xl flex flex-col justify-center items-center text-center p-4">
						<h3 className="text-2xl font-semibold">Logo Brin d'évasion</h3>
						<p className="text-base mt-5">
							Création de logo pour un institut de massage
						</p>
					</div>
				}
			/>
		),
	},
	{
		id: 5,
		category: "Logos",
		content: (
			<FlipCard
				front={
					<div className="bg-white w-[320px] h-[320px] content-center rounded-xl overflow-hidden">
						<img
							src="./public/7jour.png"
							alt="7jour"
							className=" w-[250px] mx-auto"
						/>
					</div>
				}
				back={
					<div className="bg-white text-secondary w-[320px] h-[320px] rounded-xl flex flex-col justify-center items-center text-center p-4">
						<h3 className="text-2xl font-semibold">Logo 7e Jour</h3>
						<p className="text-base mt-5">Création de logo fictif pour des vêtements de sport.</p>
					</div>
				}
			/>
		),
	},
	{
		id: 6,
		category: "Logos",
		content: (
			<FlipCard
				front={
					<div className="bg-tertiary w-[320px] h-[320px] content-center rounded-xl overflow-hidden">
						<img
							src="./public/m&vous.png"
							alt="m&vous"
							className=" w-[250px] mx-auto"
						/>
					</div>
				}
				back={
					<div className="bg-tertiary text-white w-[320px] h-[320px] rounded-xl flex flex-col justify-center items-center text-center p-4">
						<h3 className="text-2xl font-semibold">Logo M&Vous</h3>
						<p className="text-base mt-5">
							Création de logo pour un salon de coiffure
						</p>
					</div>
				}
			/>
		),
	},
	{
		id: 7,
		category: "Design",
		content: (
			<FlipCard
				front={
					<div>
						<img
							src="./public/caisse-a-savon.jpg"
							alt="caisse a savon"
							className=" rounded-xl "
						/>
					</div>
				}
				back={
					<div className="bg-orange-600 text-white h-[365.8px] rounded-xl flex flex-col justify-center items-center text-center p-4">
						<h3 className="text-2xl font-semibold">Affiche caisse à savon</h3>
						<p className="text-base mt-5">
							Création d'une affiche pour une course de caisse à savon
						</p>
					</div>
				}
			/>
		),
	},
	{
		id: 8,
		category: "Design",
		content: (
			<FlipCard
				front={
					<div>
						<img src="./public/girly.jpg" alt="girly" className=" rounded-xl" />
					</div>
				}
				back={
					<div className="bg-pink-500 text-white h-[365.8px] rounded-xl flex flex-col justify-center items-center text-center p-4">
						<h3 className="text-2xl font-semibold">
							Affiche Soirée privé Girly
						</h3>
						<p className="text-base mt-5">
							Création d'une affiche pour une soirée privée
						</p>
					</div>
				}
			/>
		),
	},
	{
		id: 9,
		category: "Design",
		content: (
			<FlipCard
				front={
					<div className="bg-white rounded-xl w-[320px] h-[428px]">
						<img
							src="./public/aubureau1.jpg"
							alt="au bureau"
							className="h-[428px] w-[304px] mx-auto rounded-xl"
						/>
					</div>
				}
				back={
					<div className="bg-red-900 text-white h-[428px] rounded-xl flex flex-col justify-center items-center text-center p-4">
						<h3 className="text-2xl font-semibold">Affiche Au Bureau</h3>
						<p className="text-base mt-5">
							Création d'une carte brunch pour le restaurant Au Bureau
						</p>
					</div>
				}
			/>
		),
	},
	{
		id: 10,
		category: "Design",
		content: (
			<FlipCard
				front={
					<div className="bg-white rounded-xl w-[320px] h-[428px]">
						<img
							src="./public/aubureau2.jpg"
							alt="au bureau"
							className="h-[428px] w-[304px] mx-auto rounded-xl"
						/>
					</div>
				}
				back={
					<div className="bg-red-900 text-white h-[428px] rounded-xl flex flex-col justify-center items-center text-center p-4">
						<h3 className="text-2xl font-semibold">Affiche Au Bureau</h3>
						<p className="text-base mt-5">
							Création d'une carte brunch pour le restaurant Au Bureau
						</p>
					</div>
				}
			/>
		),
	},
	{
		id: 11,
		category: "Design",
		content: (
			<FlipCard
				front={
					<div className=" rounded-xl w-[320px] h-[428px]">
						<img
							src="./public/aubureau3.jpg"
							alt="au bureau"
							className="w-[320px] mx-auto rounded-xl"
						/>
					</div>
				}
				back={
					<div className="bg-slate-800 text-white h-[450px] rounded-xl flex flex-col justify-center items-center text-center p-4">
						<h3 className="text-2xl font-semibold">Affiche Au Bureau</h3>
						<p className="text-base mt-5">
							Création d'une carte Brasero pour le restaurant Au Bureau
						</p>
					</div>
				}
			/>
		),
	},
	{
		id: 12,
		category: "Design",
		content: (
			<FlipCard
				front={
					<div className=" rounded-xl w-[320px] h-[428px]">
						<img
							src="./public/aubureau4.jpg"
							alt="au bureau"
							className="w-[320px] mx-auto rounded-xl"
						/>
					</div>
				}
				back={
					<div className="bg-red-600 text-white h-[450px] rounded-xl flex flex-col justify-center items-center text-center p-4">
						<h3 className="text-2xl font-semibold">Affiche Au Bureau</h3>
						<p className="text-base mt-5">
							Création d'une carte Brasero pour le restaurant Au Bureau
						</p>
					</div>
				}
			/>
		),
	},
	{
		id: 13,
		category: "Design",
		content: (
			<FlipCard
				front={
					<div className=" rounded-xl">
						<img
							src="./public/viwa.jpg"
							alt="viwa"
							className="w-[320px] mx-auto rounded-xl"
						/>
					</div>
				}
				back={
					<div className="bg-orange-200 text-secondary h-[234px] rounded-xl flex flex-col justify-center items-center text-center p-4">
						<h3 className="text-2xl font-semibold">Livre puzzle</h3>
						<p className="text-base mt-5">
							Création d'un livre puzzle pour enfant
						</p>
					</div>
				}
			/>
		),
	},
];

const filters = ["All", "Web", "Logos", "Design"] as const;

type FilterType = (typeof filters)[number];

function Projets() {
	const [activeFilter, setActiveFilter] = useState<FilterType>("All");

	const filteredProjets =
		activeFilter === "All"
			? projetsData
			: projetsData.filter((proj) => proj.category === activeFilter);

	return (
		<>
			<section className="bg-secondary h-1340 md:h-750">
				<h1 className="text-primary text-3xl font-bold pt-25 ml-7 ">
					MES PROJETS{" "}
					<span className="text-primary text-3xl font-extrabold ">_</span>
				</h1>
				<nav className="flex justify-around">
					<ul className="text-white flex gap-x-4 mt-20 mb-4 cursor-pointer font-semibold text-[1rem]">
						{filters.map((filter) => (
							<li
								key={filter}
								onClick={() => setActiveFilter(filter)}
								onKeyUp={(e) => {
									if (e.key === "Enter" || e.key === " ")
										setActiveFilter(filter);
								}}
								className={`${
									activeFilter === filter ? "bg-primary" : "bg-tertiary"
								} p-2 w-17 rounded-2xl shadow-[0_3px_12px_rgba(0,0,0,0.4)] flex justify-center transition-colors`}
							>
								{filter}
							</li>
						))}
					</ul>
				</nav>

				<section className="flex justify-center mt-15 gap-6 flex-wrap">
					<AnimatePresence>
						{filteredProjets.map((proj) => (
							<motion.div
								key={proj.id}
								layout
								initial={{ opacity: 0, scale: 0.95 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.9 }}
								transition={{ duration: 0.3 }}
							>
								{proj.content}
							</motion.div>
						))}
					</AnimatePresence>
				</section>
			</section>
		</>
	);
}

export default Projets;
