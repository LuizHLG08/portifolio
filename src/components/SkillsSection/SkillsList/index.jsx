import { SwiperSlide } from "swiper/react"
import { techList } from "../../../database"
import { SwiperList } from "../../SwiperList"
import styles from "./style.module.scss"

export const SkillsList = () => {
    return (
        <SwiperList slidesPerView={6} slideNextTime={4000}>
            {techList.map((tech, index) => (
                <SwiperSlide className={styles.techItem} key={index}>
                    <div className={styles.techContainer}>
                        <div className={styles.logoContainer}>
                            <img src={tech.logo} alt={tech.name} />
                        </div>
                        <h2 className={styles.techName}>{tech.name}</h2>
                    </div>
                </SwiperSlide>
            ))}
        </SwiperList>
    )
}