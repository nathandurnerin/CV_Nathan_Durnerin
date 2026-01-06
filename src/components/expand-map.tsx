import { useState } from "react";

interface LocationMapProps {
	location?: string;
	coordinates?: string;
	mapUrl?: string;
	className?: string;
}

export function LocationMap({
	location,
	coordinates,
	mapUrl,
}: LocationMapProps) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<a
			href={mapUrl}
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Ouvrir la localisation dans Google Maps"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			className="absolute inset-0 cursor-pointer select-none"
		>
			{/* CARD */}
			<div className="relative w-full h-full overflow-hidden bg-white">
				{/* Background */}
				<div className="absolute inset-0 bg-gradient-to-br from-muted/20 via-transparent to-muted/40" />

				{/* Grid */}
				<svg className="absolute inset-0 w-full h-full opacity-10">
					<title>Location</title>
					<defs>
						<pattern
							id="grid"
							width="24"
							height="24"
							patternUnits="userSpaceOnUse"
						>
							<path
								d="M 24 0 L 0 0 0 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="0.5"
							/>
						</pattern>
					</defs>
					<rect width="100%" height="100%" fill="url(#grid)" />
				</svg>

				{/* Pin */}
				<div className="absolute inset-0 flex items-center justify-center">
					<svg
						width="36"
						height="36"
						viewBox="0 0 24 24"
						fill="none"
						style={{ filter: "drop-shadow(0 0 12px #0CFFB2)" }}
					>
						<title>Location Pin</title>
						<path
							d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
							fill="#0CFFB2"
						/>
						<circle cx="12" cy="9" r="2.5" className="fill-background" />
					</svg>
				</div>

				{/* Content */}
				<div className="relative z-10 h-full flex flex-col justify-between p-5">
					<div className="flex justify-between items-start">
						<span className="text-xs font-medium text-tertiary">
							Localisation
						</span>
						<div className="flex items-center gap-1 px-2 py-1 rounded-full bg-foreground/5">
							<span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
							<span className="text-[10px] uppercase text-muted-foreground">
								Live
							</span>
						</div>
					</div>

					<div className="space-y-1">
						<h3 className="text-sm font-medium">{location}</h3>
						<p className="text-xs font-mono text-muted-foreground">
							{coordinates}
						</p>
						<div
							className="h-px bg-gradient-to-r from-emerald-500/60 to-transparent"
							style={{
								transform: `scaleX(${isHovered ? 1 : 0.3})`,
								transformOrigin: "left",
								transition: "0.3s",
							}}
						/>
					</div>
				</div>
			</div>
		</a>
	);
}
