import { useRef } from "react";

export function HoverCard({
	children,
	className = "",
	center = true,
}: {
	children: React.ReactNode;
	className?: string;
	center?: boolean;
}) {
	const ref = useRef<HTMLDivElement>(null);

	const handleMouseMove = (e: React.MouseEvent) => {
		if (!ref.current) return;
		const rect = ref.current.getBoundingClientRect();
		ref.current.style.setProperty("--x", `${e.clientX - rect.left}px`);
		ref.current.style.setProperty("--y", `${e.clientY - rect.top}px`);
	};

	return (
		<div
			ref={ref}
			onMouseMove={handleMouseMove}
			className={`relative w-full h-full overflow-hidden group ${className}`}
		>
			{/* Glow */}
			<div
				className="pointer-events-none absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
				style={{
					background:
						"radial-gradient(450px circle at var(--x) var(--y), rgba(200,200,200,0.3), transparent 40%)",
				}}
			/>

			<div
				className={`relative z-20 w-full h-full ${
					center ? "flex items-center justify-center" : ""
				}`}
			>
				{children}
			</div>
		</div>
	);
}
