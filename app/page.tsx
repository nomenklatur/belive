"use client"

import { useRef } from "react"
import TableOfContents from "@/components/table-of-contents"
import HeroSection from "@/components/hero-section"
import About from "@/components/sections/about"
import AboutProject from "@/components/sections/about-project"
import ProjectPhases from "@/components/sections/project-phases"
import ProjectBenefits from "@/components/sections/project-goals"
import ContributeSection from "@/components/sections/contribute"
import Footer from "@/components/footer"

export default function Home() {
  const firstSectionRef = useRef<HTMLElement>(null)

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection nextSectionRef={firstSectionRef} />
      <div className="text-primary-foreground flex-grow">
        <div className="container mx-auto px-4 py-8 flex gap-8">
          <TableOfContents />
          <main className="flex-1">
            <About ref={firstSectionRef} />
            <AboutProject />
            <ProjectPhases />
            <ProjectBenefits />
            <ContributeSection />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  )
}
