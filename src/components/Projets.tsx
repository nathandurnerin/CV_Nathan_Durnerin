import { PROJECTS } from "./constants";
import { motion } from "framer-motion";

type Project = {
	image: string;
	title: string;
	description: string;
	technologies: string[];
	link?: string;
};

const Projets = () => {
	return (
		<div className="border-b border-neutral-900 pb-4">
			<motion.h2
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -100 }}
				transition={{ duration: 0.5 }}
				className="my-20 text-center text-4xl"
			>
				Projets
			</motion.h2>
			<div>
				{PROJECTS.map((project: Project) => (
					<div key={project.title} className="mb-8 flex flex-wrap lg:justify-center">
						<motion.div
							whileInView={{ opacity: 1, x: 0 }}
							initial={{ opacity: 0, x: -100 }}
							transition={{ duration: 1 }}
							className="w-full lg:w-1/4"
						>
							<img
								src={project.image}
								width={150}
								alt={project.title}
								className="mb-6 rounded"
							/>
						</motion.div>
						<motion.div
							whileInView={{ opacity: 1, x: 0 }}
							initial={{ opacity: 0, x: 100 }}
							transition={{ duration: 1 }} className="w-full max-w-xl lg:w-3/4">
							<h6 className="mb-2 font-semibold">{project.title}</h6>
							<p className="mb-4 text-neutral-400">{project.description}</p>
							{project.technologies.map((tech: string) => (
								<span
									key={tech}
									className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600"
								>
									{tech}
								</span>
							))}
							{project.link && (
								<a
									href={project.link}
									className="cursor-pointer hover:text-neutral-700 text-sm flex mt-2"
								>
									{project.link}
								</a>
							)}
						</motion.div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Projets;
