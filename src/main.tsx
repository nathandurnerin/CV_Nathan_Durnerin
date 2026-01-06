import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import Home from "./pages/Home.tsx";
import ProjetPage from "./pages/ProjetPage.tsx";
import "./App.css";
import ServicesPage from "./pages/ServicesPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/projets/:slug",
				element: <ProjetPage />,
			},
			{
				path: "/services/:slug",
				element: <ServicesPage />,
			},
			{
				path: "/contact",
				element: <ContactPage />,
			},
		],
	},
]);

const rootElement = document.getElementById("root");
if (!rootElement) {
	throw new Error('Your HTML Document should contain a <div id="root"></div>');
}

createRoot(rootElement).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
