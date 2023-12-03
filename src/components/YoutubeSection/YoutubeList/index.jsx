import { videoList } from "../../../database/videos"
import { YoutubeVideo } from "./YoutubeVideo"
import styles from "./style.module.scss"

export const YoutubeList = () => {
    return (
        <ul className={styles.list}>
            {videoList.map(video => (
                <YoutubeVideo key={video.id} video={video} />
            ))}
        </ul>
    )
}