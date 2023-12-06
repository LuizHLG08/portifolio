import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./style.module.scss";
import { Link } from "react-scroll";
import { TfiMenuAlt } from "react-icons/tfi";
import { useState } from "react";

export const Header = () => {

    const [visibility, setVisibility] = useState(false)

    return (
        <header className={styles.header} id="header">
            <div className={styles.headerContainer}>
                <div className={styles.contactContainer}>
                    <nav>
                        <a href="https://www.youtube.com/channel/UC0pOPYzBzw2GM9TVd4AlYrA" target="_blank"><FaYoutube className="contactIcon" /></a>
                        <a href="https://www.linkedin.com/in/luiz-henrique-lima-gonçalves-8a8b38273/" target="_blank"><FaLinkedin className="contactIcon" /></a>
                        <a href="https://github.com/LuizHLG08" target="_blank"><FaGithub className="contactIcon" /></a>
                    </nav>
                    <div className={styles.whatsappContainer}>
                        <div>
                            <a href="https://wa.me/5533999854190" target="_blank"><FaWhatsapp className="contactIcon" /></a>
                            <p>WHATSAPP</p>
                        </div>
                        <h2>33 99985 4190</h2>
                    </div>
                </div>
                <div className={styles.homeContainer}>
                    <nav>
                        <Link to="header" spy={true} smooth={true} offset={-70} duration={500} className={styles.sectionsNav}>HOME</Link>
                        <Link to="about" spy={true} smooth={true} offset={-70} duration={500} className={styles.sectionsNav}>SOBRE MIM</Link>
                        <Link to="techs" spy={true} smooth={true} offset={-70} duration={500} className={styles.sectionsNav}>TECNOLOGIAS</Link>
                    </nav>
                    <nav>
                        <Link to="projects" spy={true} smooth={true} offset={-70} duration={500} className={styles.sectionsNav} >PROJETOS</Link>
                        <Link to="redes" spy={true} smooth={true} offset={-70} duration={500} className={styles.sectionsNav} >REDES</Link>
                        <Link to="footer" spy={true} smooth={true} offset={-70} duration={500} className={styles.sectionsNav} >FALE CONOSCO</Link>
                    </nav>
                </div>
                <div className={styles.mobileMenuIcon}>
                    <button onClick={() => setVisibility(!visibility)}><TfiMenuAlt className={styles.icon} /></button>
                </div>
                <div className={`${styles.mobileMenu} ${visibility ? 'visible' : null}`}>
                    <div className={styles.contactContainerMobile}>
                        <nav>
                            <a href="https://www.youtube.com/channel/UC0pOPYzBzw2GM9TVd4AlYrA" target="_blank"><FaYoutube className="contactIcon" /></a>
                            <a href="https://www.linkedin.com/in/luiz-henrique-lima-gonçalves-8a8b38273/" target="_blank"><FaLinkedin className="contactIcon" /></a>
                            <a href="https://github.com/LuizHLG08" target="_blank"><FaGithub className="contactIcon" /></a>
                        </nav>
                        <div className={styles.whatsappContainer}>
                            <div>
                                <a href="https://wa.me/5533999854190" target="_blank"><FaWhatsapp className="contactIcon" /></a>
                                <p>WHATSAPP</p>
                            </div>
                            <h2>33 99985 4190</h2>
                        </div>
                    </div>
                    <div className={styles.homeContainerMobile}>
                        <nav>
                            <Link to="header" spy={true} smooth={true} offset={-70} duration={500} className={styles.sectionsNav}>HOME</Link>
                            <Link to="about" spy={true} smooth={true} offset={-70} duration={500} className={styles.sectionsNav}>SOBRE MIM</Link>
                            <Link to="techs" spy={true} smooth={true} offset={-70} duration={500} className={styles.sectionsNav}>TECNOLOGIAS</Link>
                        </nav>
                        <nav>
                            <Link to="projects" spy={true} smooth={true} offset={-70} duration={500} className={styles.sectionsNav} >PROJETOS</Link>
                            <Link to="redes" spy={true} smooth={true} offset={-70} duration={500} className={styles.sectionsNav} >REDES</Link>
                            <Link to="footer" spy={true} smooth={true} offset={-70} duration={500} className={styles.sectionsNav} >FALE CONOSCO</Link>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}