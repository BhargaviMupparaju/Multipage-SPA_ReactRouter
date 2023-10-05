import { Link } from "react-router-dom";

function Homepage() {
	return (
		<div>
			<h1>My Home Page</h1>
			<Link to="products"> Go to products page</Link>
			{/* Here Link helps to redirects to the product page without sending new HTTP request*/}
            {/* Here if we have / before the products it will be added to the direct domain path. If we
            remove the / it will add that path to current active path. so we will not get the errors
             */}
		</div>
	);
}

export default Homepage;
