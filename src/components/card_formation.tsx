import type { ReactNode } from "react";

interface ValeurFormationProps {
	image: string; // Changer de ReactNode à string
	button: string;
	description: ReactNode;
}

function CardFormation({ image, description, button }: ValeurFormationProps) {
	return (
		<div className="grid mx-auto place-items-center rounded-xl w-[85%] h-[600px] mt-10 align-middle bg-tertiary shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
			<div className="w-[50%] py-10 mx-auto">
				<img className="mx-auto" src={image} alt="formation" />
			</div>
			<p className="text-white font-light w-[79%] text-center">{description}</p>
			<button
				type="button"
				className="text-white bg-secondary p-2 w-[150px] rounded-full border border-gray-400 flex justify-center my-5 font-light cursor-pointer"
			>
				{button}
			</button>
		</div>
	);
}

export default CardFormation;
