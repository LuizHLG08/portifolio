import { FaWhatsapp } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { Link } from "react-scroll"
import styles from "./style.module.scss"

export const Footer = () => {
    return (
        <footer className={styles.footer} id="footer">
            <div className={styles.footerContainer}>
                <div className={styles.menuContainer}>
                    <h2>MENU</h2>
                    <nav>
                        <Link to="header" spy={true} smooth={true} offset={-70} duration={500}>Home</Link>
                        <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>Sobre mim</Link>
                        <Link to="techs" spy={true} smooth={true} offset={-70} duration={500}>Tecnologias</Link>
                        <Link to="projects" spy={true} smooth={true} offset={-70} duration={500}>Projetos</Link>
                        <Link to="redes" spy={true} smooth={true} offset={-70} duration={500}>Redes</Link>
                        <Link to="footer" spy={true} smooth={true} offset={-70} duration={500}>Contato</Link>
                    </nav>
                </div>
                <div className={styles.menuContainer}>
                    <h2>REDES SOCIAIS</h2>
                    <nav>
                        <a href="https://www.youtube.com/channel/UC0pOPYzBzw2GM9TVd4AlYrA" target="_blank">YouTube</a>
                        <a href="https://www.linkedin.com/in/luiz-henrique-lima-gonçalves-8a8b38273/" target="_blank">LinkedIn</a>
                        <a href="https://github.com/LuizHLG08" target="_blank">GitHub</a>
                    </nav>
                </div>
                <div className={styles.contactContainer}>
                    <div className={styles.whatsapp}>
                        <div className={styles.title}>
                            <a href="https://wa.me/5533999854190" target="_blank"><FaWhatsapp className="contactIcon" /></a>
                            <h2>TELEFONE DE ATENDIMENTO</h2>
                        </div>
                        <div className={styles.contact}>
                            <p>33 999854190</p>
                        </div>
                    </div>
                    <div className={styles.whatsapp}>
                        <div className={styles.title}>
                            <a href="mailto:contato.magodev@gmail.com" target="_blank"><HiOutlineMail className="contactIcon" /></a>
                            <h2>EMAIL PARA CONTATO</h2>
                        </div>
                        <div className={styles.contact}>
                            <p>CONTATO</p>
                            <p>contato.magodev@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}