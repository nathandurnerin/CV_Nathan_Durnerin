import { FILTERS } from "@/components/constants";
import Hero from "@/components/Projet/Hero";
import Content from "@/components/Projet/Content";
import Links from "@/components/Projet/Links";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

const ProjetPage = () => {
	const { slug } = useParams<{ slug: string }>();
	const navigate = useNavigate();

	const project = FILTERS.flatMap((filter) => filter.projects).find(
		(project) => project.slug === slug,
	);

	if (!project) return <div>Projet introuvable</div>;

	return (
		<>
			<Hero project={project} />

			{project.content && <Content content={project.content} />}

			<Links links={project.links} />
			<footer className="mt-12">
				<button
					type="button"
					onClick={() => navigate(-1)}
					className="text-primary hover:text-black cursor-pointer transition"
				>
					← Voir tous les projets
				</button>
			</footer>
		</>
	);
};

export default ProjetPage;
