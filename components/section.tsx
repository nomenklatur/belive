import { type ReactNode, forwardRef } from "react"

interface SectionProps {
  id: string
  title: string
  children: ReactNode
}

const Section = forwardRef<HTMLElement, SectionProps>(({ id, title, children }, ref) => {
  return (
    <section id={id} className="py-4 min-h-screen" ref={ref}>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {children}
    </section>
  )
})

Section.displayName = "Section"

export default Section
