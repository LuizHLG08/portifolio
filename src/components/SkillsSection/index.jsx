import { SkillsList } from "./SkillsList"
import styles from "./style.module.scss"

export const SkillsSection = () => {
    return (
        <section className={styles.skills}>
            <h2 className={styles.sectionTitle}>HARD SKILLS</h2>
            <SkillsList />
        </section>
    )
}