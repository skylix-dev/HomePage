import style from "../styles/Login.module.scss";
import { Icon } from "@iconify/react"

export default function Login() {
    return (
        <div className={style.root}>
            <div className={style.form}>
                <h1>Login</h1>

                <form>
                    <input placeholder="Username or Email" />
                    <input placeholder="Password" type="password" />
                    <button>Sign In</button>
                </form>
            </div>

            <div className={style.divider}></div>

            <div className={style.socials}>
                <button>
                    <Icon icon="akar-icons:github-fill" />
                    <span>Sign in with GitHub</span>
                </button>

                <button>
                    <Icon icon="bi:google" />
                    <span>Sign in with Google</span>
                </button>

                <button>
                    <Icon icon="akar-icons:facebook-fill" />
                    <span>Sign in with Facebook</span>
                </button>
            </div>
        </div>
    );
}