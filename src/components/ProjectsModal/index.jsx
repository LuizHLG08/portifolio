import styles from "./style.module.scss"
import macbook from "../../assets/macbook.svg"
import iphone from "../../assets/iphone.svg"

export const ProjectsModal = ({ project, setSelectedProject }) => {

    const colorTheme = project.colorTheme

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContainer}>
                <div style={{backgroundColor: colorTheme}} className={styles.modalHeader}>
                    <h2>{project.name}</h2>
                    <p>{project.shortDescription}</p>
                </div>
                <div className={styles.previewContainer}>
                    <div className={styles.desktopContainer}>
                        <img src={macbook} alt="macbook" className={styles.desktop} />
                        <img src={project.desktopImage} alt={project.name} className={styles.desktopImage} />
                    </div>
                    <div className={styles.mobileContainer}>
                        <img src={iphone} alt="iphone" className={styles.mobile} />
                        <img src={project.mobileImage} alt={project.name} className={styles.mobileImage} />
                    </div>
                </div>
                <div className={styles.descriptionContainer}>
                    <p>{project.longDescription}</p>
                </div>
                <button style={{backgroundColor: colorTheme}} onClick={() => setSelectedProject(null)}>Continuar</button>
            </div>
        </div>
    )
}