interface LinksProps {
	links?: {
		name: string;
		url: string;
	};
}

const Links = ({ links }: LinksProps) => {
	if (!links) return null;

	return (
		<section className="mt-20 text-center">
			<a
				href={links.url}
				target="_blank"
				rel="noopener noreferrer"
				className="underline"
			>
				{links.name}
			</a>

		</section>
	);
};

export default Links;
