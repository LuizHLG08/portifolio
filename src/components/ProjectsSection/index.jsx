import { ProjectCard } from "./ProjectCard"
import styles from "./style.module.scss"
import { projects } from "../../database/projects"

export const ProjectsSection = ({setSelectedProject}) => {
    
    return (
        <section className={styles.section} id="projects">
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