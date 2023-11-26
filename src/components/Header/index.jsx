import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <div className={styles.contactContainer}>
                    <nav>
                        <a href=""><FaYoutube className={styles.contactIcon} /></a>
                        <a href=""><FaLinkedin className={styles.contactIcon} /></a>
                        <a href=""><FaGithub className={styles.contactIcon} /></a>
                    </nav>
                    <div className={styles.whatsappContainer}>
                        <div>
                            <a href=""><FaWhatsapp className={styles.contactIcon} /></a>
                            <p>WHATSAPP</p>
                        </div>
                        <h2>33 99985 4190</h2>
                    </div>
                </div>
                <div className={styles.homeContainer}>
                    <nav>
                        <a>HOME</a>
                        <a>SOBRE MIM</a>
                        <a>TECNOLOGIAS</a>
                    </nav>
                    <nav>
                        <a >PORTIFÓLIO</a>
                        <a >REDES</a>
                        <a >FALE CONOSCO</a>
                    </nav>
                </div>
            </div>
        </header>
    )
}