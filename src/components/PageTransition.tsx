import { motion } from "framer-motion";

export default function PageTransition({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<motion.main
			initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
			animate={{
				opacity: 1,
				y: 0,
				filter: "blur(0px)",
			}}
			transition={{
				delay: 0.4, // ⏳ délai de 1 seconde
				duration: 0.5,
				ease: "easeOut",
			}}
		>
			{children}
		</motion.main>
	);
}
