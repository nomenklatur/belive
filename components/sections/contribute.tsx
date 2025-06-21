import Section from "@/components/section"
import { forwardRef } from "react"

const ContributeSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <Section id="contribute" title="Contribute to Belive" ref={ref}>
      <p className="mb-4">
        Contribution to Belive is a great opportunity to be part of a project that aims to create a more inclusive and accessible digital space.
        Whether you are a developer, designer, content creator, or simply passionate about the mission of Belive, your contributions can make a significant impact.
      </p>
      
    </Section>
  )
});

export default ContributeSection;
