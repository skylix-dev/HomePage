import Landing from "../components/landing/Landing";
import style from "../styles/Index.module.scss";

export default function Index() {
	return (
		<div className={style.root}>
			<div className={style.banner}>
				<h1>ILLUX is an open source development team!</h1>
				<span>Bringing open-source to another level!</span>

				<div className={style.bannerButtons}>
					<button className={style.bannerButtonsPrimary}>Get Started</button>
					<button>Documentation</button>
				</div>
			</div>

			<Landing sections={[
				{
					title: "Why Open-Source?",
					body: [
						"Open source makes you transparent! Everyone loves to just have the ability to see how something works.",
						"Transparency also contributes a great amount to trust and safety"
					]
				},
				{
					title: "Our Goal",
					body: [
						"Our goal is to make software development easier, faster, and more efficient!"
					]
				}
			]} />
		</div>
	);
}
