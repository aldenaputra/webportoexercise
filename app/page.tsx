import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import ProjectSection from "@/components/ProjectSection"
import Experiences from "@/components/Experiences"
import Achievements from "@/components/Achievements"
import Work from "@/components/Work"

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <HeroSection />
      <AboutSection />
      <Work />
      <ProjectSection />
      <Experiences />
      <Achievements />
    </main>
  )
}
