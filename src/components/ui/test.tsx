import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Marquee } from "./marquee";
import DetailFormation from "../detailFormation";
import Description from "./description";
import Formation from "./formation";



const CarouselImages = [
	{
		name: "",
		image: "",
		component: null,
		bg: "bg-gradient-to-r from-rose-200 to-rose-50",
	},
	{
		name: "Photo Perso",
		image: "../PhotoPerso.png",
		component: <Description />,
		bg: "bg-[linear-gradient(135deg,_#F2F2F2,_#C2B8FF)]",
	},
	{
		name: "",
		image: "",
		component: (
			<>
				<DetailFormation />
				<Formation />
			</>
		),
		bg: "bg-gradient-to-r from-rose-200 to-gray-50",
	},
];

export default function Carousel() {
	const [index, setIndex] = useState(1);

	const nextSlide = () => {
		setDirection(1);
		setIndex((prevIndex) => (prevIndex + 1) % CarouselImages.length);
	};

	const prevSlide = () => {
		setDirection(-1);
		setIndex(
			(prevIndex) =>
				(prevIndex - 1 + CarouselImages.length) % CarouselImages.length,
		);
	};

	const [direction, setDirection] = useState(0);

	return (
		<div
			className={`w-full min-h-screen flex flex-col ${CarouselImages[index].bg} transition-colors duration-500`}
		>
			{/* ------------------------Carousel--------------------------- */}
			<div className="pt-10 md:mt-20 flex items-center justify-center relative">
				{/* Trait gauche */}
				

				{/* Trait droite */}
				
				<button
					type="button"
					onClick={prevSlide}
					className="absolute rounded-full md:left-20 left-5 z-60 bg-black/90 text-white p-1 -mt-10 cursor-pointer"
				>
					<ChevronLeft />
				</button>
				{/* Bouton gauche */}

				{/* Image animée */}
				<AnimatePresence mode="wait">
					<motion.div
						key={index}
						initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
						transition={{ duration: 0.4 }}
						className="z-20 flex flex-col items-center"
					>
						{/* Affiche l'image si elle existe */}
						{CarouselImages[index].image && (
							<img
								src={CarouselImages[index].image}
								alt={CarouselImages[index].name}
								className="h-96 object-contain max-w-full md:h-105"
							/>
						)}

						{/* Affiche le composant si défini */}
						{CarouselImages[index].component && (
							<div className="">{CarouselImages[index].component}</div>
						)}
					</motion.div>
				</AnimatePresence>
				{/* Bouton droite */}
				<button
					type="button"
					onClick={nextSlide}
					className="absolute rounded-full md:right-20 right-5 z-60 bg-black/90 text-white p-1 -mt-10 cursor-pointer"
				>
					<ChevronRight />
				</button>
			</div>
			<Marquee speed={20} pauseOnHover direction="left">
				{[
					"/illustrator.svg",
					"/indesign.svg",
					"/photoshop.svg",
					"/express.svg",
					"/github.svg",
					"/html.svg",
					"/javascript.svg",
					"/mysql.svg",
					"/node.svg",
					"/react.svg",
					"/tailwindcss.svg",
				].map((src) => (
					<img
						key={src}
						src={src}
						alt={`Logo ${src}`}
						className="h-11 -mt-2 w-30 mx-8 md:mx-10 md:h-15"
					/>
				))}
			</Marquee>
		</div>
	);
}
