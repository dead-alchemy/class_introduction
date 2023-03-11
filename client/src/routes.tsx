import Display from "components/Display";
import {App} from "./pages";

import {
	BrowserRouter,
	Route,
	Routes,
	createBrowserRouter,
} from "react-router-dom";
import Course from "./pages/Course/course";
import Hobbies from "./pages/Hobbies/hobbies";
import Where from "./pages/Where/where";

// {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//   },

export const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<Display>
				<App />
			</Display>
		),
		// errorElement: <ErrorPage />,
	},
	{
		path: "/course",
		element: (
			<Display>
				<Course />
			</Display>
		),
		// errorElement: <ErrorPage />,
	},
	{
		path: "/hobbies",
		element: (
			<Display>
				<Hobbies />
			</Display>
		),
		// errorElement: <ErrorPage />,
	},
	{
		path: "/where",
		element: (
			<Display>
				<Where />
			</Display>
		),
		// errorElement: <ErrorPage />,
	},
]);
