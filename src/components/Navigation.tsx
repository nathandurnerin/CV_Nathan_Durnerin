import { Link } from "react-router-dom";

function Navigation() {

	return (
		<nav className="fixed bg-quadrary top-0 left-0 z-50 w-full">
			{/* 1️⃣ NAV = FOND + FIXED */}

			{/* 2️⃣ CONTAINER = LIMITE LA LARGEUR DU CONTENU */}
			<div className="px-8 sm:px-16 lg:px-16">
				{/* 3️⃣ CONTENU = LARGEUR NATURELLE */}
				<div className="flex flex-col w-full py-2 md:pt-4">
					{/* BARRE HAUTE */}
					<div className="flex items-center justify-between h-16 w-full">
						{/* LOGO */}
						<Link to="/">
							<img src="/NHN.svg" alt="NHN" className="w-[80px] lg:w-[120px]" />
						</Link>

						{/* BOUTON CONTACT */}
						<Link to="/contact" className="btn2 px-5 py-2 hidden lg:block">
							<span className="btn2-text">Contactez-moi</span>
						</Link>

						{/* BURGER MOBILE */}
						{/* <button
							type="button"
							className="lg:hidden"
							onClick={() => setIsOpen((v) => !v)}
							aria-label="Toggle menu"
						>
							{isOpen ? <X size={26} /> : <Menu size={26} />}
						</button> */}
					</div>

					{/* LIGNE (DESKTOP UNIQUEMENT, largeur = contenu) */}
					{/* <div className="hidden lg:block h-[1px] mt-2 bg-neutral-500 w-full" /> */}

					{/* MENU MOBILE */}
					{/* {isOpen && (
						<ul className="lg:hidden py-6 flex flex-col gap-y-6">
							<li>
								<Link to="/" onClick={() => setIsOpen(false)}>
									ACCUEIL
								</Link>
							</li>
							<li>
								<Link to="/projets" onClick={() => setIsOpen(false)}>
									PROJETS
								</Link>
							</li>
							<li>
								<Link to="/services" onClick={() => setIsOpen(false)}>
									SERVICES
								</Link>
							</li>
							<li>
								<Link to="/contact" onClick={() => setIsOpen(false)}>
									CONTACT
								</Link>
							</li>
						</ul>
					)} */}
				</div>

				{/* <Link
					to="/contact"
					className="btn font-medium text-sm absolute top-6 right-10 hidden lg:block"
				>
					CONTACTEZ-MOI
				</Link> */}
			</div>
		</nav>
	);
}

export default Navigation;
