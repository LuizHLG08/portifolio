import profile from "../../assets/perfil.svg";
import banner from "../../assets/banner-img.svg";
import styles from "./style.module.scss"
import { useTypewriter, Cursor } from "react-simple-typewriter";

export const AboutMeSection = () => {

    const [ text ] = useTypewriter({
        words: ["Olá, sou Luiz Henrique, um desenvolvedor fullstack com expertise em JavaScript, React, Node, TypeScript e Java. Tenho a ambição de sempre aprender mais, e acredito que minha capacidade de aprendizado rápido e minha base de conhecimento me ajudam nesse processo. Acredito na colaboração eficaz e estou pronto para contribuir com as melhores soluções. Vamos construir algo incrível juntos!"],
        typeSpeed: 20,
    })

    return (
        <section className={styles.section}>
            <div className={styles.sectionContainer}>
                <div className={styles.nameContainer}>
                    <div>
                        <h2>Luiz Henrique</h2>
                        <p>Transformando linhas de código em experiências incríveis.</p>
                    </div>
                    <img src={profile} alt="" className={styles.profile} />
                </div>
                <div className={styles.about}>
                    <h2>Sobre Mim</h2>
                    <p>{text}</p>
                </div>
            </div>
        </section>
    )
}