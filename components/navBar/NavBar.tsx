import style from "./NavBar.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
	const links = [
		{
			to: "/",
			label: "Home"
		},
		{
			to: "/about",
			label: "About"
		},
		{
			to: "/contact",
			label: "Contact"
		}
	];

	return (
		<div className={style.root}>
			<div className={style.inner}>
				<div className={style.logo}>
					<Image
						draggable={false}
						src="https://raw.githubusercontent.com/IlluxDev/Illux/main/Logo.svg"
						alt="ILLUX's Logo"
						width={25}
						height={25}
					/>
					<span>ILLUX</span>
				</div>

				<div className={style.links}>
					{ links.map((link, index) => {
						return (
							<div className={style.linksLinkWrapper} key={"link-" + index + "-" + link.label}>
								<Link href={link.to}>{link.label}</Link>

								{links[index + 1] && <span className={style.linksSeparator}></span>}
							</div>
						);
					}) }
				</div>

				<div className={style.buttons}>
					<button>Sign In</button>
				</div>
			</div>
		</div>
	);
}
