import type React from "react";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
	const form = useRef<HTMLFormElement>(null);
	const [isSent, setIsSent] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		setError(null);

		if (!form.current) return;

		emailjs
			.sendForm(
				"YOUR_SERVICE_ID",
				"YOUR_TEMPLATE_ID",
				form.current,
				"YOUR_PUBLIC_KEY",
			)
			.then(
				() => {
					setIsSent(true);
					setLoading(false);
					form.current?.reset();
				},
				(err) => {
					setError("Une erreur est survenue.");
					setLoading(false);
					console.error(err);
				},
			);
	};

	return (
		<>
			<h1 className="text-primary text-3xl font-bold pt-22 ml-7 ">
				CONTACT <span className="text-primary text-3xl font-extrabold ">_</span>
			</h1>

			<motion.div
				className=" mx-auto ml-7 mt-10 w-[80%] bg-white  rounded-2xl"
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
			>
				<form ref={form} onSubmit={sendEmail} className="space-y-8">
					<input
						type="text"
						name="user_name"
						placeholder="Votre nom"
						required
						className="w-full p-3 font-medium border-b-1 border-b-gray-400 focus:outline-none focus:ring-0 focus:ring-gray-300"
					/>
					<input
						type="email"
						name="user_email"
						placeholder="Votre email"
						required
						className="w-full p-3 font-medium border-b-1 border-b-gray-400 focus:outline-none focus:ring-0 focus:ring-gray-300"
					/>
					<textarea
						name="message"
						placeholder="Votre message"
						required
						className="w-full p-3 font-medium border-b-1 border-b-gray-400 focus:outline-none focus:ring-0 focus:ring-gray-300"
					/>
					<div className="text-center">
						<button
							type="submit"
							disabled={loading}
							className="w-full bg-secondary text-white py-2 px-4 rounded-lg hover:bg-primary transition"
						>
							{loading ? "Envoi en cours..." : "Envoyer"}
						</button>
						{isSent && <p className="text-green-600 mt-2">Message envoyé !</p>}
						{error && <p className="text-red-600 mt-2">{error}</p>}
					</div>
				</form>
			</motion.div>
		</>
	);
};

export default Contact;
