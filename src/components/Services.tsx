import { Link } from "react-router";
import { SERVICES } from "./constants";
import { ArrowRight } from "lucide-react";

function Services() {
	return (
		<section id="services" className="scroll-mt-30 mt-25">
			<h2 className="font-semibold text-base bg-tertiary text-[#305C4E] rounded-full w-54 h-8 flex justify-center items-center pb-0.5 ">
				Services Web & Design
			</h2>
			<p className="text-sm text-gray-600 mt-6 md:w-[55%] w-[90%]">
				Un accompagnement complet, de la création graphique au développement,{" "}
				pour des projets cohérents et performants.
			</p>

			<div className="mt-10">
				{SERVICES.map((service) => (
					<div
						key={service.title}
						className="card2 bg-white mb-24 px-6 sm:px-12 lg:px-18 flex flex-col lg:flex-row justify-between lg:items-center gap-8 lg:h-[260px]"
					>
						<div className="flex flex-col items-center lg:items-start text-center lg:text-left">
							<h3 className="text-2xl font-semibold mb-6 mt-8 lg:mt-0 text-primary">
								{service.title}
							</h3>

							<p className="text-sm font-semibold text-primary mx-4 lg:mx-0 mb-3 lg:mb-0">
								{service.description1}
							</p>

							<p className="text-sm max-w-[360px] mx-4 lg:mx-0">
								{service.description2}
							</p>

							<Link
								to={`/services/${service.slug}`}
								className="group font-medium text-xs bg-tertiary text-[#305C4E] rounded-full w-32 h-6 flex items-center justify-center gap-2 cursor-pointer mt-6 lg:mt-3"
							>
								En savoir plus
								<ArrowRight
									className="group-hover:rotate-90 duration-300"
									size={16}
									strokeWidth={2}
								/>
							</Link>
						</div>

						<img
							src={service.image}
							alt={service.title}
							className="
      h-[180px] sm:h-[200px] lg:h-[230px] xl:h-[260px]
      w-auto
      self-center lg:self-auto
      lg:-translate-y-10 transition-transform duration-300 mb-8 lg:mb-0
    "
						/>
					</div>
				))}
			</div>
		</section>
	);
}

export default Services;
