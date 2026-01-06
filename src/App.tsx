import { Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "@/components/ScrollToTop";
import PageTransition from "@/components/PageTransition";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTopButton from "./components/scrollbutton";
import { useEffect, useState } from "react";
import Intro from "@/components/Intro";

function App() {
	const [showIntro, setShowIntro] = useState(true);

	useEffect(() => {
		const seen = sessionStorage.getItem("introSeen");

		if (seen) {
			setShowIntro(false);
			window.scrollTo({ top: 0, left: 0, behavior: "auto" });
			return;
		}

		const timer = setTimeout(() => {
			sessionStorage.setItem("introSeen", "true");
			setShowIntro(false);

			// 🔥 FIX DÉFINITIF
			requestAnimationFrame(() => {
				window.scrollTo({ top: 0, left: 0, behavior: "auto" });
			});
		}, 3500);

		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="bg-quadrary min-h-screen">
			<Intro isVisible={showIntro} />
			<Navigation />
			<ScrollToTop />

			<AnimatePresence mode="wait">
				<ScrollToTopButton />
				<PageTransition key={location.pathname}>
					<div className="2xl:mx-100 xl:mx-40 lg:mx-24 mx-8 sm:mx-16">
						<Outlet />
					</div>
				</PageTransition>
			</AnimatePresence>

			<Footer />
		</div>
	);
}

export default App;
