import style from "../styles/Index.module.scss";

export default function Index() {
	return (
		<div className={style.root}>
			<div className={style.banner}>
				<h1>ILLUX is an open source development team!</h1>
				<span>The open source development team!</span>

				<div className={style.bannerButtons}>
					<button className={style.bannerButtonsPrimary}>Get Started</button>
					<button>Documentation</button>
				</div>
			</div>
		</div>
	);
}
