import { Marquee } from "./ui/marquee";

const Skills = () => {
	return (
		<div className="border-b border-neutral-900 pb-4">
			<h2 className="my-20 text-center text-4xl">Skills</h2>
			<Marquee speed={20} pauseOnHover direction="left">
				{[
					"/illustrator.svg",
					"/indesign.svg",
					"/photoshop.svg",
					"/express.svg",
					"/github.svg",
					"/html.svg",
					"/javascript.svg",
					"/mysql.svg",
					"/node.svg",
					"/react.svg",
					"/tailwindcss.svg",
					"/css.svg",
				].map((src) => (
					<img
						key={src}
						src={src}
						alt={`Logo ${src}`}
						className="h-22 mb-15 w-30 mx-5 md:mx-10 md:h-30 md:mt-12"
					/>
				))}
			</Marquee>
		</div>
	);
};

export default Skills;
