import profile from "../../assets/perfil.svg";
import styles from "./style.module.scss"

export const AboutMeSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.sectionContainer}>
                <div className={styles.nameContainer}>
                    <h2>Luiz Henrique</h2>
                    <p>Transformando linhas de código em experiências incríveis.</p>
                </div>
                <img src={profile} alt="" className={styles.profile} />
                <div className={styles.about}>
                    <h2>Sobre Mim</h2>
                    <p>Olá, sou Luiz Henrique, um desenvolvedor fullstack com expertise em JavaScript, React, Node, TypeScript e Java. Tenho a ambição de sempre aprender mais, e acredito que minha capacidade de aprendizado rápido e minha base de conhecimento me ajudam nesse processo. Acredito na colaboração eficaz e estou pronto para contribuir com as melhores soluções. Vamos construir algo incrível juntos!</p>
                </div>
            </div>
        </section>
    )
}