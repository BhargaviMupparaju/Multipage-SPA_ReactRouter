import { Link } from "react-router-dom";
function Homepage() {
	return (
		<div>
			<h1>My Home Page</h1>
			<Link to="/products"> Go to products page</Link>
			{/* Here Link helps to redirects to the product page without sending new HTTP request*/}
		</div>
	);
}

export default Homepage;
