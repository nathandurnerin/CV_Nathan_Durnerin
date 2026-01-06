import { useState } from "react";
import { FILTERS } from "./constants";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

function Projets() {
	const [activeFilter, setActiveFilter] = useState("web");

	const currentFilter = FILTERS.find((filter) => filter.id === activeFilter);

	return (
		<section id="projets" className="scroll-mt-28">
			{/* Title */}
			<div className="flex justify-between items-center">
				<h2 className="font-semibold text-base bg-tertiary text-[#305C4E] rounded-full w-25 h-8 flex justify-center items-center pb-0.5">
					Projets
				</h2>
			</div>

			{/* Description */}
			<div className="mt-6 max-w-xl">
				<h3 className="text-4xl font-semibold text-primary">
					{currentFilter?.title}
				</h3>
				<p className="text-sm text-gray-600 mt-6">
					{currentFilter?.description}
				</p>
			</div>

			{/* Filters */}
			<div className="flex gap-10 mt-8">
				{FILTERS.map((filter) => (
					<button
						type="button"
						key={filter.id}
						onClick={() => setActiveFilter(filter.id)}
						className={`pb-2 text-sm transition cursor-pointer ${
							activeFilter === filter.id
								? "font-semibold text-primary"
								: "text-gray-400"
						}`}
					>
						{filter.label}
					</button>
				))}
			</div>

			<div className="block h-[1px] mt-2 bg-neutral-400 w-full" />

			{/* Projects */}
			<AnimatePresence mode="wait">
				<motion.div
					key={activeFilter}
					initial={{ opacity: 0, x: 40 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: -40 }}
					transition={{ duration: 0.4, ease: "easeInOut" }}
					className="md:grid md:grid-cols-2 gap-x-8 gap-y-12 mt-10"
				>
					{currentFilter?.projects.map((project) => (
						<div key={project.name} className="group md:mb-4 mb-12">
							{/* IMAGE */}
							<div className="w-full h-[260px] sm:h-[320px] lg:h-[350px] overflow-hidden">
								<Link to={`/projets/${project.slug}`}>
									<img
										src={project.image}
										alt={project.name}
										className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
									/>
								</Link>
							</div>

							{/* TEXT */}
							<h4 className="font-semibold mt-4 text-lg text-primary">
								{project.name}
							</h4>

							<p className="text-sm text-gray-600 mt-1">
								{project.description}
							</p>
							<Link
								className="group mt-3 inline-flex items-center gap-4 rounded-full bg-tertiary px-4 py-1 text-xs font-medium text-[#305C4E] cursor-pointer"
								to={`/projets/${project.slug}`}
							>
								En savoir plus
								<ArrowRight
									className="transition-transform duration-300 group-hover:rotate-90"
									size={16}
									strokeWidth={2}
								/>
							</Link>
						</div>
					))}
				</motion.div>
			</AnimatePresence>
		</section>
	);
}

export default Projets;
