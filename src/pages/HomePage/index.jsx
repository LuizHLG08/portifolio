import { AboutMeSection } from "../../components/AboutMeSection"
import { DifferentialSection } from "../../components/DifferentialSection"
import { Header } from "../../components/Header"
import { ProjectsSection } from "../../components/ProjectsSection"
import { SkillsSection } from "../../components/SkillsSection"

export const HomePage = () => {
    return (
        <>
            <Header />
            <AboutMeSection />
            <SkillsSection />
            <DifferentialSection />
            <ProjectsSection />
        </>
    )
}