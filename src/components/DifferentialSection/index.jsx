import { Swiper, SwiperSlide } from "swiper/react"
import styles from "./style.module.scss"
import iteracao from "../../assets/iteracao-1.svg"
import tag from "../../assets/codificacao-html.svg"
import computador from "../../assets/computador.svg"
import certificado from "../../assets/certificado.svg"
import { SwiperList } from "../SwiperList"

export const DifferentialSection = () => {
    
    return (
        <section className={styles.section} id="techs">
            <div className={styles.differentialContainer}>
                <h2 className={styles.title}>DIFERENCIAIS</h2>
                <SwiperList className={styles.swiper}
                    slideNextTime={3000}
                >
                    <SwiperSlide className={styles.swiperSlide}>
                        <div className={styles.swiperSlideContainer}>
                            <div className={styles.methods}>
                                <img src={iteracao} alt="iteração" />
                            </div>
                            <div className={styles.sliderContent}>
                                <h2 className="title1">Metodologias Ágeis</h2>
                                <p>Utilizo metodologias ágeis, focando na entrega contínua de valor ao cliente. Minha abordagem colaborativa e adaptável permite a rápida resposta às mudanças, garantindo projetos de software flexíveis, eficazes e alinhados às necessidades do usuário.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <div className={styles.swiperSlideContainer}>
                            <div className={styles.methods}>
                                <img src={tag} alt="tag" />
                            </div>
                            <div className={styles.sliderContent}>
                                <h2 className="title1">Clean Code</h2>
                                <p>Um dos cuidados que eu tenho no desenvolvimento é com a qualidade do código, seguindo as melhores práticas do mercado. Busco constantemente aprimorar a eficiência, legibilidade e sustentabilidade, garantindo um produto final robusto e de alta qualidade."</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <div className={styles.swiperSlideContainer}>
                            <div className={styles.methods}>
                                <img src={computador} alt="computador" />
                            </div>
                            <div className={styles.sliderContent}>
                                <h2 className="title1">Layouts Fidedignos</h2>
                                <p>Meu foco é implementar interfaces de alta fidelidade, assegurando projetos visualmente impactantes e funcionalmente sólidos. Garantindo assim a melhor experiência possível para o usuário</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </SwiperList>
            </div>
            <div className={styles.differentialContainer}>
                <h2 className={styles.title}>CERFIFICADOS</h2>
                <SwiperList className={styles.swiper}
                    slideNextTime={5000}
                >
                    <SwiperSlide className={styles.swiperSlide}>
                        <div className={styles.swiperSlideContainer}>
                            <div className={styles.methods}>
                                <img src={certificado} alt="certificado" />
                            </div>
                            <div className={styles.sliderContent}>
                                <h2 className="title1">Kenzie Academy BR</h2>
                                <p>Formado em desenvolvimento web front-end pela Kenzie Academy BR, curso com mais de 1000h de conteúdos, atividades, entregas e acompanhamento</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <div className={styles.swiperSlideContainer}>
                            <div className={styles.methods}>
                                <img src={certificado} alt="certificado" />
                            </div>
                            <div className={styles.sliderContent}>
                                <h2 className="title1">Free Code Camp</h2>
                                <p>Curso completo de algoritmos e estrutura de dados, aproximadamente 300h de conteúdo, com diversas atividades e projetos</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </SwiperList>
            </div>
        </section>
    )
}