import "./App.css";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Home";
import Productspage from "./pages/Products";

const router = createBrowserRouter([
	{ path: "/", element: <Homepage /> },
	{ path: "/products", element: <Productspage /> },
]);
//here element is the jsx code that needs to rendered for the current active path.

//we can follow the other methdology for the router with elements.

// createRoutesFromElements(
// 	<Route>
// 		<Route path="/" element={<Homepage />} />
// 		<Route path="/products" element={<Productspage />} />
// 	</Route>
// );

function App() {
	return <RouterProvider router={router} />;

	// to tell the react to use above created router we need to use router provider and we need to a
	//assign the created router to the router property.
}

export default App;
