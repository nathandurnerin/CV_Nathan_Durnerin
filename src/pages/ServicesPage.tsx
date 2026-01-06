import { useParams, Link } from "react-router-dom";
import { SERVICES } from "@/components/constants";
import { useNavigate } from "react-router-dom";

const ServicePage = () => {
	const { slug } = useParams<{ slug: string }>();
	const navigate = useNavigate();

	const service = SERVICES.find((service) => service.slug === slug);

	if (!service) {
		return (
			<div className="py-32 text-center">
				<p className="text-primary mb-6">Service introuvable.</p>
				<Link to="/" className="underline">
					Retour à l’accueil
				</Link>
			</div>
		);
	}

	return (
		<main className="max-w-6xl mx-auto px-6 pb-12 pt-34 md:pt-24">
			{/* HERO */}
			<header className="mb-24 grid md:grid-cols-2 gap-12 items-center">
				<div>
					<h1 className="text-2xl md:text-4xl text-primary font-bold mb-6">
						{service.title}
					</h1>

					<p className="md:text-lg text-primary mb-2">{service.description1}</p>

					<p className="md:text-lg text-primary">{service.description2}</p>
				</div>

				<img
					src={service.image}
					alt={service.title}
					className="w-full md:h-[350px] object-contain "
				/>
			</header>

			{/* CONTENT */}
			<section className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{/* INTRO */}
				<div className="card bg-white p-8 ">
					<div className="flex gap-4 items-center mb-4">
						<img
							src={service.content.intro.icon}
							alt=""
							className="w-10 h-10"
						/>
						<h2 className="text-xl font-semibold ">
							{service.content.intro.title}
						</h2>
					</div>

					{service.content.intro.body.map((paragraph) => (
						<p key={paragraph} className=" text-primary mb-4">
							{paragraph}
						</p>
					))}
				</div>

				{/* APPROACH */}
				<div className="card bg-white p-8">
					<div className="flex gap-4 items-center mb-4">
						<img
							src={service.content.approach.icon}
							alt=""
							className="w-10 h-10"
						/>
						<h2 className="text-xl font-semibold ">
							{service.content.approach.title}
						</h2>
					</div>

					<ul className="list-disc pl-5 space-y-2 text-primary">
						{service.content.approach.steps.map((step) => (
							<li key={step}>{step}</li>
						))}
					</ul>
				</div>

				{/* DELIVERABLES */}
				<div className="card bg-white p-8 ">
					<div className="flex gap-4 items-center mb-4">
						<img
							src={service.content.deliverables.icon}
							alt=""
							className="w-10 h-10"
						/>
						<h2 className="text-xl font-semibold ">
							{service.content.deliverables.title}
						</h2>
					</div>

					<ul className="list-disc pl-5 space-y-2 text-primary">
						{service.content.deliverables.list.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
				</div>

				{/* OUTCOME */}
				<div className="card bg-white p-8 ">
					<div className="flex gap-4 items-center mb-4">
						<img
							src={service.content.outcome.icon}
							alt=""
							className="w-10 h-10"
						/>
						<h2 className="text-xl font-semibold ">
							{service.content.outcome.title}
						</h2>
					</div>

					{service.content.outcome.body.map((paragraph) => (
						<p key={paragraph} className="text-primary mb-4">
							{paragraph}
						</p>
					))}
				</div>
			</section>

			{/* CTA */}
			<footer className="mt-32 text-center">
				<p className="text-primary mb-4">Un projet en tête ?</p>

				<Link
					to="/contact"
					className="inline-block font-medium underline hover:opacity-70 transition mb-16"
				>
					Discutons ensemble
				</Link>
			</footer>
			<button
				type="button"
				onClick={() => navigate(-1)}
				className="text-primary hover:text-black cursor-pointer transition"
			>
				← Voir tous les services
			</button>
		</main>
	);
};

export default ServicePage;
