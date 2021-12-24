import Head from "next/head";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navBar/NavBar";
import "../styles/Globals.scss";

function MyApp({ Component, pageProps }) {
	return (
		<div className="root">
			<Head>
				<title>SkyLix</title>
				<link rel="icon" type="image/svg+xml" href="https://raw.githubusercontent.com/IlluxDev/Illux/main/LogoDynamic.svg" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<NavBar />

			<div className="body">
				<div className="main">
					<Component {...pageProps} />
				</div>

				<Footer />
			</div>
		</div>
	);
}

export default MyApp;
