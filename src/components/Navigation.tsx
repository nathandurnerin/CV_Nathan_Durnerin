import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";



function Navigation() {

	const [isOpen, setIsOpen] = useState(false);


	return (
		<>
		<header className="absolute z-50 w-full px-6 pt-9 flex items-center justify-center text-sm text-black/70">
				{/* Bouton menu aligné avec la nav */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: "easeInOut" }}
					className="absolute left-6 " // Position absolue par rapport au header
				>
					<motion.button
						type="button"
						onClick={() => setIsOpen(!isOpen)}
						className="text-black p-2 cursor-pointer md:hidden"
						whileTap={{ scale: 0.9 }}
					>
						{isOpen ? <X size={24} /> : <Menu size={24} />}
					</motion.button>
				</motion.div>

				{/* --------------------Navigation centrée-------------------- */}
				<nav className="hidden md:flex space-x-25 font-semibold">
					<a
						className="hover:translate-y-1 transition duration-350 ease-in-out cursor-pointer"
						href="/"
					>
						Home
					</a>
					<a
						className="hover:translate-y-1 transition duration-350 ease-in-out cursor-pointer"
						href="/project"
					>
						Project
					</a>
					<a
						className="hover:translate-y-1 transition duration-350 ease-in-out cursor-pointer"
						href="/contact"
					>
						Contact
					</a>
				</nav>
			</header>
			{/* --------------------Menu Mobile-------------------- */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ x: "-100%", opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						exit={{ x: "-100%", opacity: 0 }}
						transition={{ duration: 0.4, ease: "easeInOut" }}
						className="fixed top-0 left-0 h-full w-64 bg-white shadow-md z-40 flex flex-col p-6 pt-15"
					>
						{/* Bouton de fermeture */}
						<button
							type="button"
							onClick={() => setIsOpen(false)}
							className="self-end mb-4 text-black cursor-pointer"
						>
						</button>

						{/* Liens du menu */}
						<div className="flex flex-col space-y-6">
							{[
								{ name: "Home", path: "/" },
								{ name: "Project", path: "/project" },
								{ name: "Contact", path: "/contact" },
							].map((item, idx) => (
								<motion.div
									key={item.name}
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									exit={{ opacity: 0, x: -20 }}
									transition={{ delay: 0.1 * idx }}
								>
									<Link
										to={item.path}
										onClick={() => setIsOpen(false)} // Fermer le menu au clic
										className="text-lg font-semibold text-black hover:text-gray-700"
									>
										{item.name}
									</Link>
								</motion.div>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}

export default Navigation;
