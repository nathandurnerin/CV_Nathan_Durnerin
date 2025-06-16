import { HERO_CONTENT } from "./constants";
import PhotoProfil from "/public/PhotoProfil.jpg";
import { motion } from "framer-motion";

const container = (delay: number) => ({
	hidden: { x: -100, opacity: 0 },
	visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } }
});

const Description = () => {
	return (
		<div className="border-b border-neutral-900 pb-4 lg:mb-35">
			<div className="flex flex-col lg:flex-row flex-wrap">
				{/* Bloc texte */}
				<div className="w-full lg:w-1/2">
					<div className="flex flex-col items-center lg:items-start">
						<motion.h1
							variants={container(0)}
							initial="hidden"
							animate="visible"
							className="pb-12 text-6xl font-semibold lg:mt-16 font-montserrat"
						>
							Nathan Durnerin
						</motion.h1>
						<motion.span
						variants={container(0.5)}
							initial="hidden"
							animate="visible"
							className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text
               text-2xl text-transparent"
						>
							Full Stack Developpeur & Graphiste
						</motion.span>
						<motion.p
						variants={container(1)}
							initial="hidden"
							animate="visible" className="my-2 max-w-xl py-6 font-light font-montserrat tracking-tight">
							{HERO_CONTENT}
						</motion.p>
					</div>
				</div>
				<div className="w-full lg:w-1/2 lg:p-8 flex justify-center items-center">
					<motion.img
							initial={{x:50, opacity:0}}
							animate={{x:0, opacity:1}}
							transition={{duration:1, delay:1.2}}
						className="rounded-2xl"
						src={PhotoProfil}
						width={400}
						alt="Nathan Durnerin"
					/>
				</div>
			</div>
		</div>
	);
};

export default Description;
