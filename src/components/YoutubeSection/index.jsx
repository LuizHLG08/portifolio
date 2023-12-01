import styles from "./style.module.scss"

export const YoutubeSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.sectionHeader}>
                <div className={styles.headerContainer}>
                    <div className={styles.headerTitle}>
                        <h2>YOUTUBE CHANNEL</h2>
                        <p>CONTEÚDO TÉCNICO SOBRE PROGRAMAÇÂO</p>
                    </div>
                    <div className={styles.subscribe}>
                        <p>INSCREVA-SE NO CANAL</p>
                        <p className={styles.link}>YOUTUBE.COM/MAGODEV</p>
                        <a href="">SE INSCREVER</a>
                    </div>
                </div>
            </div>
        </section>
    )
}