import type { Project } from "@/types/project";

interface ContentProps {
	content: NonNullable<Project["content"]>;
}

const Content = ({ content }: ContentProps) => (
	<>
		{Object.entries(content).map(([key, section]) => (
			<section key={key} className="mb-16">
				<h2 className="text-3xl text-primary font-semibold mb-4">
					{section.title}
				</h2>

				{section.body?.map((p) => (
					<p
						key={p}
						className="mb-4 text-primary/70 text-lg max-w-prose font-regular"
					>
						{p}
					</p>
				))}

				{section.list && (
					<ul className="list-disc pl-6 text-primary/70 text-lg font-regular">
						{section.list.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
				)}

				{section.items && (
					<ul className="space-y-4">
						{section.items.map((item) => (
							<li key={item.name}>
								<strong className="text-primary text-lg font-semibold">
									{item.name}
								</strong>
								<p className="text-primary/70 text-lg font-regular">
									{item.description}
								</p>
							</li>
						))}
					</ul>
				)}

				{section.next && (
					<ul className="list-disc pl-6 mt-4 text-lg text-primary/70">
						{section.next.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
				)}

				{section.gallery && (
					<div
						className={`grid gap-6 mt-10 ${
							section.gallery.length === 1
								? "grid-cols-1"
								: "grid-cols-1 md:grid-cols-2"
						}`}
					>
						{section.gallery.map((img) => (
							<div
								key={img}
								className={`${
									section.gallery && section.gallery.length === 1
										? "flex justify-center"
										: ""
								}`}
							>
								<img
									src={img}
									alt=""
									className={`${
										section.gallery && section.gallery.length === 1 ? "w-full max-w-3xl" : "w-full"
									} object-contain`}
								/>
							</div>
						))}
					</div>
				)}
			</section>
		))}
	</>
);

export default Content;
