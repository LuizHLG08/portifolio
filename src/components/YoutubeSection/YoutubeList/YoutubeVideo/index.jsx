import styles from "./style.module.scss"
import { IoPlayCircleOutline } from "react-icons/io5";

export const YoutubeVideo = ({video}) => {
    return (
        <li className={styles.card}>
            <a href={video.link} target="_blank">
                <img src={video.thumb} alt="thumb de um vídeo do youtube" />
                <div className={styles.thumbHover}>
                    <IoPlayCircleOutline className={styles.thumbIcon} />
                </div>
            </a>
            <div className={styles.content}>
                <h2>{video.title}</h2>
                <p>{video.description}</p>
            </div>
        </li>
    )
}