import MainNavigation from "../components/MainNavigation";
function ErrorPage() {
	return (
		<>
			<MainNavigation />
			<h1> An error occured!</h1>
			<p>Couldn't find the page!</p>
		</>
	);
}

export default ErrorPage;
