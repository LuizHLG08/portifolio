import { AboutMeSection } from "../../components/AboutMeSection"
import { DifferentialSection } from "../../components/DifferentialSection"
import { Header } from "../../components/Header"

export const HomePage = () => {
    return (
        <>
            <Header />
            <AboutMeSection />
            <DifferentialSection />
        </>
    )
}