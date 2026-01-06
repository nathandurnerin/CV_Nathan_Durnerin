import { LocationMap } from "@/components/expand-map";
import { Marquee } from "./ui/marquee";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { ArrowRight } from "lucide-react";
import { HoverCard } from "./HoverCard";
import { Link } from "react-router";
import { Globe, Palette, NotebookPen } from "lucide-react";

function Layout() {
	return (
		<section className="mb-32">
			<div className="grid grid-cols-1 md:grid-cols-13 gap-6 md:gap-3 lg:gap-6">
				{/* A */}
				<HoverCard className="card2 w-full min-h-[220px] md:aspect-auto md:h-[220px] md:col-span-3">
					<LocationMap
						location="Mionnay, France"
						coordinates="45.895502° N, 4.930235° E"
						mapUrl="https://www.google.com/maps?q=45.895502,4.930235"
					/>
				</HoverCard>

				{/* B */}
				<HoverCard
					className="card2 w-full min-h-[220px] md:col-span-6 md:h-[220px] bg-white relative overflow-hidden group"
					center
				>
					<div className="flex flex-col items-center justify-center h-full text-center gap-3 md:gap-5">
						<h3 className="text-sm uppercase tracking-widest text-primary/70">
							Ce que je fais
						</h3>

						<p className=" text-primary px-6">
							Je crée des sites web, des interfaces UI / UX et des identités
							visuelles cohérentes, pensées pour être claires, utiles et
							durables.
						</p>

						<div className="flex gap-6 text-sm font-medium text-primary">
							<Globe size={36} color="#0cffb2" strokeWidth={1.5} />
							<Palette size={36} color="#0cffb2" strokeWidth={1.5} />
							<NotebookPen size={36} color="#0cffb2" strokeWidth={1.25} />
						</div>
					</div>
				</HoverCard>

				{/* C */}
				<HoverCard className="card2 w-full min-h-[220px] md:col-span-4 md:h-[220px] bg-white">
					<div className="flex flex-col justify-center items-center h-full gap-4 text-center">
						<div>
							<p className="text-3xl font-bold text-tertiary">+4</p>
							<p className="text-sm">Projets réalisés</p>
						</div>
						<div>
							<p className="text-3xl font-bold text-tertiary">1+</p>
							<p className="text-sm">Année d’expérience</p>
						</div>
						<div>
							<p className="text-3xl font-bold text-tertiary">100%</p>
							<p className="text-sm">Passion</p>
						</div>
					</div>
				</HoverCard>

				{/* D / E / F */}
				<div className="grid grid-cols-3 gap-4 md:hidden">
					{[FaLinkedin, FaGithub, IoIosMail].map((Icon) => (
						<div
							key={Icon.name}
							className="card2 h-[67px] bg-white flex justify-center items-center "
						>
							<Icon className="text-3xl text-primary" />
						</div>
					))}
				</div>

				<a
					href="https://www.linkedin.com/in/nathan-durnerin"
					className="card2 hidden md:flex col-span-1 h-[67px] bg-white items-center justify-center"
				>
					<FaLinkedin className="text-3xl text-primary cursor-pointer hover:text-tertiary duration-300" />
				</a>
				<a
					href="https://github.com/nathandurnerin"
					className="card2 hidden md:flex col-span-1 h-[67px] bg-white items-center justify-center"
				>
					<FaGithub className="text-3xl text-primary cursor-pointer hover:text-tertiary duration-300" />
				</a>
				<Link
					to="/contact"
					className="card2 hidden md:flex col-span-1 h-[67px] bg-white items-center justify-center"
				>
					<IoIosMail className="text-3xl text-primary cursor-pointer hover:text-tertiary duration-300" />
				</Link>

				{/* G */}
				<HoverCard
					className="card2 w-full md:col-span-5 min-h-[67px] md:h-[67px] bg-white flex items-center justify-center"
					center
				>
					<button
						type="button"
						onClick={() => {
							document
								.getElementById("projets")
								?.scrollIntoView({ behavior: "smooth" });
						}}
						className="group flex items-center gap-5 font-semibold text-primary md:text-sm lg:text-base cursor-pointer"
					>
						Découvrez plus de projets
						<ArrowRight className="group-hover:rotate-90 duration-300" />
					</button>
				</HoverCard>

				{/* H */}
				<HoverCard
					className="card2 w-full md:col-span-5 min-h-[67px] md:h-[67px] bg-white flex items-center justify-center"
					center
				>
					<button
						type="button"
						onClick={() => {
							document
								.getElementById("services")
								?.scrollIntoView({ behavior: "smooth" });
						}}
						className="group flex items-center gap-5 font-semibold text-primary md:text-sm lg:text-base cursor-pointer"
					>
						Découvrez mes services
						<ArrowRight className="group-hover:rotate-90 duration-300" />
					</button>
				</HoverCard>

				{/* I */}
				<div className="card2 col-span-1 md:col-span-13 min-h-[140px] bg-white flex items-center justify-center">
					<Marquee speed={20}>
						<img
							src="https://skillicons.dev/icons?i=js,html,react,nodejs,express,github,mysql,tailwindcss,angular,java,python,figma,ai,ps,vercel"
							alt="Skills"
							className="h-23 mx-2"
						/>
					</Marquee>
				</div>
			</div>
		</section>
	);
}

export default Layout;
