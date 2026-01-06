import { Contact2 } from "@/components/contact-2";

function ContactPage() {
	return (
		<Contact2
			title="Contactez-moi"
			description="Un projet en tête et vous souhaitez le concrétiser ?
Contactez-moi, je vous répondrai rapidement."
			phone="(+33) 6 67 42 17 45"
			email="durnerin.nathan01@gmail.com"
			web={{
				label: "https://www.linkedin.com/in/nathan-durnerin/",
				url: "https://www.linkedin.com/in/nathan-durnerin/",
			}}
		/>
	);
}

export default ContactPage;
