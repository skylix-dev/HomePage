import style from "./Landing.module.scss";
import Props from './Props';

export default function Landing(props: Props) {
    return (
        <div className={style.root}>
            <div className={style.inner}>
                {props.sections.map((section, index) => {
                    return (
                        <div key={"landing-section-" + section.title.split(" ").join("_")} className={index % 2 ? style.rightSideSection : ""}>
                            <h1>{section.title}</h1>

                            {section.body.map((line, index) => {
                                return <span key={"landing-section-" + section.title.split(" ").join("_") + "-" + index}>{line}</span>;
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    )
}