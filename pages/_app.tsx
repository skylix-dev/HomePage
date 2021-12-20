import NavBar from "../components/navBar/NavBar";
import "../styles/Globals.scss";

function MyApp({ Component, pageProps }) {
	return (
		<div className="root">
			<NavBar />

			<div className="body">
				<Component {...pageProps} />
			</div>

			<footer>ILLUX - CopyRight 2021 - 2021</footer>
		</div>
	);
}

export default MyApp;
