import { AboutMeSection } from "../../components/AboutMeSection"
import { DifferentialSection } from "../../components/DifferentialSection"
import { Header } from "../../components/Header"
import { SkillsSection } from "../../components/SkillsSection"

export const HomePage = () => {
    return (
        <>
            <Header />
            <AboutMeSection />
            <SkillsSection />
            <DifferentialSection />
        </>
    )
}