import style from "../styles/Index.module.scss";

export default function Index() {
	return (
		<div className={style.root}>
			<div className={style.banner}>
				<h1>We distribute fast, powerful and easy to use frameworks!</h1>
				<span>ILLUX | The open source development team!</span>

				<div className={style.bannerButtons}>
					<button className={style.bannerButtonsPrimary}>Get Started</button>
					<button>Documentation</button>
				</div>
			</div>
		</div>
	);
}
