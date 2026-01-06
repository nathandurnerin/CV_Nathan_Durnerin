import { FaLinkedin, FaGithub} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

import { Link } from "react-router-dom";

function Footer() {
	return (
		<>
			<section className="2xl:mx-100 xl:mx-16 lg:mx-16 mx-8">
				<div className="block h-[1px] mt-2 bg-neutral-400 w-full" />
				<div className="flex justify-between items-baseline w-52 mt-24">
					<Link to="/">
						<img src="/NHN.svg" alt="NHN" className="w-[52px]" />
					</Link>
					<p className="text-primary font-semibold">—</p>
					<p className="text-primary font-semibold">Nathan Durnerin</p>
				</div>
				<p className="text-xs text-primary font-light mt-3">
					Une personne dévouée à la résolution de problèmes <br /> qui
					s'épanouit en apprenant et en construisant.
				</p>

				<div className=" flex items-center gap-4 mt-14 pb-14 text-primary text-2xl">
					<a
						href="https://www.linkedin.com/in/nathan-durnerin"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="LinkedIn"
					>
						<FaLinkedin className="hover:-translate-y-1 duration-300" />
					</a>
					<a
						href="https://github.com/nathandurnerin"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="GitHub"
					>
						<FaGithub className="hover:-translate-y-1 duration-300" />
					</a>
					<Link to="/contact"
					>
						<IoIosMail className="hover:-translate-y-1 duration-300" />
					</Link>
				</div>
			</section>
		</>
	);
}

export default Footer;
