"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const TableOfContents = () => {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "-10% 0px -90% 0px" },
    )

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
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
