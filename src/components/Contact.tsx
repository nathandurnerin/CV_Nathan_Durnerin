import { CONTACT } from "./constants";
import { motion } from "framer-motion";

const Contact = () => {
	return (
		<div className="border-b border-neutral-800 pb-20 ">
			<motion.h2
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -100 }}
				transition={{ duration: 0.5 }}
				className="my-10 text-center text-4xl"
			>
				Contact
			</motion.h2>
			<div className="text-center">
				<p className="my-4 ">{CONTACT.adresse}</p>
				<p className="my-4">{CONTACT.tel}</p>
				<p>{CONTACT.email}</p>
			</div>
		</div>
	);
};

export default Contact;
