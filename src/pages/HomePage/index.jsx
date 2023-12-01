import { useState } from "react"
import { AboutMeSection } from "../../components/AboutMeSection"
import { DifferentialSection } from "../../components/DifferentialSection"
import { Header } from "../../components/Header"
import { ProjectsModal } from "../../components/ProjectsModal"
import { ProjectsSection } from "../../components/ProjectsSection"
import { SkillsSection } from "../../components/SkillsSection"
import { YoutubeSection } from "../../components/YoutubeSection"

export const HomePage = () => {

    const [selectedProject, setSelectedProject] = useState(null)

    return (
        <>
            <Header />
            <AboutMeSection />
            <SkillsSection />
            <DifferentialSection />
            <ProjectsSection setSelectedProject={setSelectedProject} />
            <YoutubeSection />
            {selectedProject ? <ProjectsModal project={selectedProject} setSelectedProject={setSelectedProject} /> : null}
        </>
    )
}