import Head from "next/head";
import NavBar from "../components/navBar/NavBar";
import "../styles/Globals.scss";

function MyApp({ Component, pageProps }) {
	return (
		<div className="root">
			<Head>
				<title>ILLUX</title>
				<link rel="icon" type="image/svg+xml" href="https://raw.githubusercontent.com/IlluxDev/Illux/main/LogoDynamic.svg" />
			</Head>
			<NavBar />

			<div className="body">
				<div className="main">
					<Component {...pageProps} />
				</div>

				<footer>ILLUX - CopyRight 2021 - 2021</footer>
			</div>
		</div>
	);
}

export default MyApp;
