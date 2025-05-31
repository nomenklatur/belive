"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const TableOfContents = () => {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry with the largest intersection ratio
        let maxRatio = 0
        let activeId = ""

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio
            activeId = entry.target.id
          }
        })

        if (activeId) {
          setActiveSection(activeId)
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        rootMargin: "-20% 0px -60% 0px",
      },
    )

    // Use a more specific selector and add a small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const sections = document.querySelectorAll("section[id]")
      sections.forEach((section) => {
        observer.observe(section)
      })
    }, 100)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      // Calculate offset to account for any fixed headers
      const yOffset = -20
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset

      window.scrollTo({ top: y, behavior: "smooth" })

      // Manually set active section after a short delay
      setTimeout(() => {
        setActiveSection(id)
      }, 100)
    }
  }

  const sections = [
    { id: "about-builtt", title: "About Builtt" },
    { id: "about-project", title: "About the Project" },
    { id: "project-phases", title: "Project Phases" },
    { id: "project-benefits", title: "Project Benefits" },
    { id: "cost-overview", title: "Cost Overview" },
    { id: "payment-terms", title: "Payment Terms" },
    { id: "additional-services", title: "Additional Services" },
    { id: "terms-and-conditions", title: "Terms and Conditions" },
  ]

  return (
    <nav className="sticky top-4 self-start p-4">
      <ul className="space-y-2">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => scrollToSection(section.id)}
              className={cn(
                "text-sm transition-colors pl-2 border-l-2",
                activeSection === section.id
                  ? "text-[#022029] border-[#022029]"
                  : "text-[#02202999] hover:text-[#022029cc] border-transparent",
              )}
            >
              {section.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default TableOfContents
