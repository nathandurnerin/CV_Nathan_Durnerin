import { motion, AnimatePresence } from "framer-motion";

interface IntroProps {
	isVisible: boolean;
}

const Intro = ({ isVisible }: IntroProps) => {
	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					className="fixed inset-0 z-100 flex items-center justify-center bg-black overflow-hidden"
					initial={{ y: 0 }}
					exit={{ y: "-100%" }}
					transition={{
						duration: 2, // ⏱️ durée de la montée
						ease: "easeInOut",
						delay: 1.5, // ⏸️ ATTENTE AVANT de monter
					}}
				>
					<motion.img
						src="/NHN_white.svg"
						alt="Logo"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							duration: 1.2, // fade du logo
							ease: "easeOut",
						}}
						className="w-24 md:w-70"
					/>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Intro;
