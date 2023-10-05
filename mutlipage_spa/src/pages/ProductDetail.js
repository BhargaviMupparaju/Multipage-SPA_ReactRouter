import { useParams } from "react-router-dom";

function ProductDetailPage() {
	const params = useParams();

    // useparams is used to access dynamic changing url id from productid

	return (
		<>
			<h1>ProductDetailPage</h1>
			<p>{params.productId}</p>
		</>
	);
}

export default ProductDetailPage;
