import { Outlet } from "react-router";

import "./App.css";
import ScrollToTopButton from "./components/scrollbutton";
import Navigation from "./components/Navigation";

function App() {
	return (
		<section>
			<Navigation />
			<main>
				<ScrollToTopButton />
				<Outlet />
			</main>
		</section>
	);
}

export default App;
