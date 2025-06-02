const detailFormation: React.FC = () => {
	const items = [
		{
			title: "Académie des Arts Appliquées",
			date: "2016 - 2019",
		},
		{
			title: "T-in Communication",
			date: "Juillet - Aout 2018",
		},
		{
			title: "Sobefi",
			date: "2022 - 2025",
		},
		{
			title: "Wild Code School",
			date: "2025 - Aujourd’hui",
		},
	];

	return (
		<div className="flex flex-col backdrop-blur-md bg-white/10 border border-white/20 shadow-md rounded-2xl max-w-sm w-[80%] mx-auto p-5 items-center mt-10 mb-8">
			{items.map((item, index) => (
				<div key={item.title} className="flex flex-col items-center">
					<div className="text-center">
						<h3 className="text-lg text-primary font-semibold">{item.title}</h3>
						<p className="text-sm font-medium text-gray-500">{item.date}</p>
					</div>
					{index < items.length - 1 && (
						<div className="w-px h-12 bg-primary my-2" />
					)}
				</div>
			))}
		</div>
	);
};

export default detailFormation;
