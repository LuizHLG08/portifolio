import { SwiperSlide } from "swiper/react"
import styles from "./style.module.scss"

export const ProjectCard = ({project, setSelectedProject}) => {
    return (
        <li className={styles.card} onClick={() => setSelectedProject(project)}>
            <img className={styles.img} src={project.thumb} alt={project.name} />
            <div className={styles.text}>
                <p>Ver detalhes</p>
            </div>
            <div className={styles.shadow}></div>
        </li>
    )
}