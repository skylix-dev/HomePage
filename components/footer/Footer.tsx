import Link from "next/link";
import React from "react";
import style from "./Footer.module.scss";

export default function Footer() {
    return (
        <div className={style.root}>
            <div className={style.inner}>
                <div className={style.header}>
                    <div>ILLUX</div>
                </div>

                <div className={style.blocks}>
                    <div>
                        <h1>Quick Navigation</h1>

                        <ul>
                            <li>
                                <Link href="/">Home</Link>
                            </li>

                            <li>
                                <Link href="/about">About</Link>
                            </li>

                            <li>
                                <Link href="/login">Sign In</Link>
                            </li>

                            <li>
                                <Link href="sign-up">Sign Up</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h1>Legal</h1>

                        <ul>
                            <li>
                                <Link href="/legal/terms-of-service">Terms Of Service</Link>
                            </li>

                            <li>
                                <Link href="legal/privacy-policy">Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h1>Community</h1>

                        <ul>
                            <li>
                                <Link href="/community/discord">Discord</Link>
                            </li>

                            <li>
                                <Link href="/community/github">GitHub</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={style.copyright}>Copyright ILLUX 2021 - 2021. All Rights Reserved.</div>
            </div>
        </div>
    );
}
