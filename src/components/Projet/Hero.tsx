import type { Project } from "@/types/project";

interface HeroProps {
	project: Project;
}

const Hero = ({ project }: HeroProps) => (
	<header className="mb-16 pt-30">
			<h1 className="text-4xl text-primary font-semibold">{project.title}</h1>
			<p className="text-primary mt-2 mb-16">{project.type}</p>

			<img
				src={project.image}
				alt={project.title}
				className=" md:h-[600px] h-[300px] w-full object-cover"
			/>

	</header>
);

export default Hero;
