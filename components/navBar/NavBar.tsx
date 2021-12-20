import style from "./NavBar.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
	const router = useRouter();

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
				<div onClick={() => router.replace("/")} className={style.logo}>
					<Image
						draggable={false}
						src="https://raw.githubusercontent.com/IlluxDev/Illux/main/LogoDynamic.svg"
						alt="ILLUX's Logo"
						width={25}
						height={25}
					/>
					<span>ILLUX</span>
				</div>

				<div className={style.links}>
					{ links.map((link, index) => {
						return (
							<div className={style.linksLinkWrapper + (router.pathname.split("/")[1] == link.to.split("/")[1] ? " " + style.linksLinkWrapperActive : "")} key={"link-" + index + "-" + link.label}>
								<Link href={link.to}>{link.label}</Link>

								{links[index + 1] && <span className={style.linksSeparator}></span>}
							</div>
						);
					}) }
				</div>

				<div className={style.buttons}>
					<button className={router.pathname.split("/")[1] == "login" ? style.buttonsActive : ""} onClick={() => router.replace("/login")}>Sign In</button>
				</div>
			</div>
		</div>
	);
}
