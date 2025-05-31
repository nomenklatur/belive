import Section from "@/components/section"

export default function ProjectPhases() {
  return (
    <Section id="project-phases" title="Project Phases">
      <p className="mb-4">The proposal includes the following phases of website conceptualization and development:</p>
      <ol className="list-decimal list-inside space-y-2 mb-6">
        <li>Discovery Meeting (Discovery and Strategy)</li>
        <li>Wireframe Phase</li>
        <li>Art Direction</li>
        <li>Design Phase</li>
        <li>Development Phase</li>
        <li>Production Server Deployment</li>
      </ol>

      <h3 className="text-xl font-semibold mb-2">Discovery Meeting</h3>
      <p className="mb-4">
        Our Discovery and Strategy service is designed to set you on the path to success through thorough understanding
        of your business and creating a customized plan. We begin with detailed research of your current operations,
        market position, and challenges. This includes engaging your team, analyzing data, and identifying key
        opportunities.
      </p>
      <p className="mb-4">
        After the research phase, we move to the Strategy phase, where we develop a customized plan that defines
        specific actions needed to achieve your goals. This strategic plan will serve as a guide for navigating the
        competitive landscape, optimizing resources, and driving growth.
      </p>
      <p className="mb-4">
        By investing in this phase, you ensure that every subsequent step is informed, strategic, and aligned with your
        vision for the future.
      </p>

      <h3 className="text-xl font-semibold mb-2">Wireframe Phase</h3>
      <p className="mb-4">
        The wireframe phase is dedicated to defining the structure and content of your site. Since we already have
        existing modules and content, we'll focus on improving the site sections that require the most attention, such
        as navigation menu, layout, and user flow. For this proposal, our team worked on this phase to support our claim
        that we're not satisfied with the design you provided with the proposal request, and we're delivering this
        material as an addition to this proposal.
      </p>

      <h3 className="text-xl font-semibold mb-2">Art Direction</h3>
      <p className="mb-4">
        Since the client hasn't yet confirmed the artistic direction for the website, our team will review your brand
        guidelines and direct the visual direction for the entire site. This will ensure consistency with your brand
        identity while improving the overall user experience.
      </p>

      <h3 className="text-xl font-semibold mb-2">Design Phase</h3>
      <p className="mb-4">
        During the design phase, we'll apply the established art direction to design new pages for your site. Although
        we already know what modules and content we have, our design team will focus on redesigning and restructuring
        these elements to ensure the best possible user experience and brand message delivery. For this proposal, our
        team worked on this phase to support our claim that we're not satisfied with the design you provided with the
        proposal request, and we're delivering this material as an addition to this proposal. If you like the defined
        direction and design approach we've created for you, this will be used as a starting point for developing all
        other necessary pages.
      </p>

      <h3 className="text-xl font-semibold mb-2">Development Phase</h3>
      <p className="mb-4">
        After the design is approved, our development team will begin the process of creating the visual and functional
        components of the site. This includes translating the approved design into code, ensuring that animations, hover
        effects on call-to-action buttons, and other interactions are fully functional and consistent with the design.
        Parallel to this, we'll develop the CMS according to your specifications, enabling easy content management for
        your team.
      </p>

      <h3 className="text-xl font-semibold mb-2">Production Server Deployment</h3>
      <p className="mb-4">
        The final phase of our development cycle is deploying the project to the production server. After receiving
        approval for the staging environment (both frontend and CMS), we proceed with Go-Live activities. The duration
        of this phase depends on the hosting environment, whether it's our server or the client's server.
      </p>
    </Section>
  )
}
