import { useEffect, useState } from "react";
import { Swiper } from "swiper/react"
import styles from "./style.module.scss"

export const SwiperList = ({ children, slideNextTime = 2000, timeOut = 0, slidesPerView = 1}) => {

    const [swiper, setSwiper] = useState(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (swiper) {
                swiper.slideNext()
            }
        }, slideNextTime)

        return () => clearInterval(intervalId);
    }, [swiper])

    return (
        <Swiper className={styles.swiper}
            slidesPerView={slidesPerView}
            onSwiper={setSwiper}
            loop={true}
            pagination={{clickable: true}}
        >
            {children}
        </Swiper>
    )
}