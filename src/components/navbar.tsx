import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Navbar = () => {
	return (
		<nav className="mb-20 flex items-center justify-between py-6">
			<div className="flex flex-shrink-0 items-center">
				<p className="text-white font-montserrat text-2xl font-semibold">ND</p>
			</div>
			<div className="m-8 flex items-center justify-center gap-4 text-white text-2xl">
				<a
					href="https://www.linkedin.com/in/nathan-durnerin"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="LinkedIn"
				>
					<FaLinkedin className="hover:translate-y-1 duration-300" />
				</a>
				<a
					href="https://github.com/nathandurnerin"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="GitHub"
				>
					<FaGithub className="hover:translate-y-1 duration-300" />
				</a>
				<a
					href="https://www.instagram.com/nathan.dnr/"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Instagram"
				>
					<FaInstagram className="hover:translate-y-1 duration-300" />
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
