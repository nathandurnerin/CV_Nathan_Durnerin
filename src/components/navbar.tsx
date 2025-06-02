import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const location = useLocation();

	return (
		<>
			{/* Bouton burger avec fade-in */}
			<motion.div
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="fixed top-5 left-5 z-50 xl:left-50"
			>
				<motion.button
					type="button"
					onClick={() => setIsOpen(!isOpen)}
					className="text-black bg-white shadow-md p-2 rounded-full"
					whileTap={{ scale: 0.9 }}
				>
					{isOpen ? <X size={24} /> : <Menu size={24} />}
				</motion.button>
			</motion.div>

			{/* Menu en plein écran animé */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						key="fullscreen-menu"
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.95 }}
						transition={{ duration: 0.4, ease: "easeInOut" }}
						className="fixed inset-0 bg-white/90 z-40 flex flex-col items-center justify-center gap-8 text-xl font-semibold text-gray-800"
					>
						{[
							{ label: "Accueil", path: "/" },
							{ label: "Projets", path: "/projets" },
							{ label: "Contact", path: "/contact" },
						].map((item) => (
							<motion.div
								key={item.path}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.4 }}
							>
								<Link
									to={item.path}
									onClick={() => setIsOpen(false)}
									className={`group relative hover:text-primary transition-colors duration-300 ${
										location.pathname === item.path ? "text-primary" : ""
									}`}
								>
									{item.label}
									<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-400 group-hover:w-full" />
								</Link>
							</motion.div>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Navbar;
