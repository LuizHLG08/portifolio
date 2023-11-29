import styles from "./style.module.scss"

export const ProjectCard = ({project}) => {
    return (
        <li className={styles.card}>
            <img className={styles.img} src={project.thumb} alt={project.name} />
            <div className={styles.text}>
                <p>Ver detalhes</p>
            </div>
            <div className={styles.shadow}></div>
        </li>
    )
}