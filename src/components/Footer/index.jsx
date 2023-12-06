import { FaWhatsapp } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import styles from "./style.module.scss"

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.menuContainer}>
                    <h2>MENU</h2>
                    <nav>
                        <a href="">Home</a>
                        <a href="">Sobre mim</a>
                        <a href="">Tecnologias</a>
                        <a href="">Projetos</a>
                        <a href="">Redes</a>
                        <a href="">Contato</a>
                    </nav>
                </div>
                <div className={styles.menuContainer}>
                    <h2>REDES SOCIAIS</h2>
                    <nav>
                        <a href="">YouTube</a>
                        <a href="">LinkedIn</a>
                        <a href="">GitHub</a>
                    </nav>
                </div>
                <div className={styles.contactContainer}>
                    <div className={styles.whatsapp}>
                        <div className={styles.title}>
                            <FaWhatsapp className={styles.contactIcon} />
                            <h2>TELEFONE DE ATENDIMENTO</h2>
                        </div>
                        <div className={styles.contact}>
                            <p>33 999854190</p>
                        </div>
                    </div>
                    <div className={styles.whatsapp}>
                        <div className={styles.title}>
                            <HiOutlineMail className={styles.contactIcon} />
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