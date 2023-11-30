import { projects } from "../../database"
import { ProjectCard } from "./ProjectCard"
import styles from "./style.module.scss"

export const ProjectsSection = ({setSelectedProject}) => {
    return (
        <section className={styles.section}>
            <div className={styles.sectionHeader}>
                <h2>Projetos</h2>
                <p>Soluções para resolver os mais diversos problemas</p>
            </div>
            <ul className={styles.projectList}>
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project} setSelectedProject={setSelectedProject} />
                ))}
            </ul>
        </section>
    )
}