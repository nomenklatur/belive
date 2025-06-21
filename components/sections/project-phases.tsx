import Section from "@/components/section"

export default function ProjectPhases() {
  return (
    <Section id="project-phases" title="Project Phases">
      <p className="mb-4">The project includes the following phases of website conceptualization and development:</p>
      <ol className="list-decimal list-inside space-y-2 mb-6">
        <li>Discovery and Strategy</li>
        <li>Wireframe Phase</li>
        <li>Art Direction</li>
        <li>Design Phase</li>
        <li>Development Phase</li>
        <li>Production Server Deployment</li>
      </ol>

      <p className="mb-4">
        Each phase is designed to ensure a comprehensive approach to the project, from initial discovery and strategy
        development to final deployment on the production server.
      </p>
      <p className="mb-4">
        The project will be developed with a focus on scalability and maintainability, allowing for future enhancements and
        additions as Belive's needs evolve. The team will also ensure that the solution is optimized for performance and
        user experience, providing a seamless and engaging platform for Belive's users.
      </p>
    </Section>
  )
}
