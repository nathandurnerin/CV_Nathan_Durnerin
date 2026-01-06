import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Contact2 = ({
	title = "Contactez-moi",
	description = "Un projet en tête ? Contactez-moi, je vous répondrai rapidement.",
	phone = "(+33) 6 67 42 17 45",
	email = "durnerin.nathan01@gmail.com",
	web = {
		label: "LinkedIn",
		url: "https://www.linkedin.com/in/nathan-durnerin/",
	},
}) => {
	const formRef = useRef<HTMLFormElement>(null);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);

	const sendEmail = (e: React.FormEvent) => {
		e.preventDefault();
		setSuccess(false);
		setError(false);

		if (!formRef.current) return;

		emailjs
			.sendForm(
				import.meta.env.VITE_EMAILJS_SERVICE_ID, // ✅ Service ID
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // ✅ Template ID
				formRef.current,
				import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
			)
			.then(() => {
				setSuccess(true);
				formRef.current?.reset();
			})
			.catch(() => {
				setError(true);
			});
	};

	return (
		<section className="py-32">
			<div className="container">
				<div className="mx-auto flex max-w-screen-xl flex-col gap-10 lg:flex-row lg:gap-20">
					{/* TEXTE */}
					<div className="max-w-sm flex flex-col justify-between">
						<div>
							<h1 className="text-4xl font-semibold text-primary">{title}</h1>
							<p className="mt-3 text-primary">{description}</p>
						</div>

						<ul className="mt-10 list-disc ml-4">
							<li>
								<strong>Tél :</strong> {phone}
							</li>
							<li>
								<strong>Email :</strong>{" "}
								<a href={`mailto:${email}`} className="underline">
									{email}
								</a>
							</li>
							<li>
								<strong>LinkedIn :</strong>{" "}
								<a href={web.url} className="underline">
									{web.label}
								</a>
							</li>
						</ul>
					</div>

					{/* FORMULAIRE */}
					<form
						ref={formRef}
						onSubmit={sendEmail}
						className="card2 mx-auto flex max-w-screen-md flex-col gap-6 p-10"
					>
						<div className="flex gap-4">
							<div className="w-full">
								<Label>Prénom</Label>
								<Input name="name" placeholder="Prénom" required />
							</div>
							<div className="w-full">
								<Label>Nom</Label>
								<Input name="lastname" placeholder="Nom" />
							</div>
						</div>

						<div>
							<Label>Email</Label>
							<Input type="email" name="email" placeholder="Email" required />
						</div>

						<div>
							<Label>Objet</Label>
							<Input name="subject" placeholder="Objet" />
						</div>

						<div>
							<Label>Message</Label>
							<Textarea
								name="message"
								placeholder="Votre message ici."
								required
							/>
						</div>

						<Button type="submit" className="bg-tertiary w-full">
							Envoyer le message
						</Button>

						{success && <p className="text-green-600">Message envoyé ✅</p>}
						{error && <p className="text-red-600">Erreur lors de l’envoi ❌</p>}
					</form>
				</div>
			</div>
		</section>
	);
};
