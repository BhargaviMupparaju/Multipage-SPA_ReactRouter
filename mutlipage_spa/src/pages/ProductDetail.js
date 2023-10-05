import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function ProductDetailPage() {
	const params = useParams();

	// useparams is used to access dynamic changing url id from productid

	return (
		<>
			<h1>ProductDetailPage</h1>
			<p>{params.productId}</p>
			<p>
				<Link to=".." relative="path">
					Back
				</Link>
				{/* Here the link will go to above one level */}
				{/* Here we give the relatives as path instead route because when
                we click the back button it is going back to the root level because it the parent
                to products/productid . It is going in the route manner
                To avoid that we give relative as path. so when we click back it will go the previous path products  */}
			</p>
		</>
	);
}

export default ProductDetailPage;
