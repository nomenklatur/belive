import Section from "@/components/section"
import PricingList from "@/components/pricing-list"
import ProjectTimelineTable from "@/components/project-timeline-table"

export default function PregledProcena() {
  return (
    <Section id="cost-overview" title="Cost Overview">
      <p className="mb-4">
        In every project, accurate estimation is crucial to ensure alignment between client expectations and the
        resources needed to deliver successful results. At Builtt, we follow a structured estimation process for both
        timeframes and costs involved in each project phase, ensuring transparency and clear understanding of
        deliverables.
      </p>
      <h3 className="text-xl font-semibold mt-6 mb-4">The estimation process is divided into the following phases:</h3>
      <h4 className="text-lg font-semibold mt-4 mb-2">Project Scope Assessment</h4>
      <p className="mb-4">
        We begin by analyzing the project scope, including all requirements, functionalities, and design specifications.
        This helps us understand the full scope of work and identify potential complexities or additional requirements
        that may arise.
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Launch target: October 2025</li>
        <li>Project duration: 8-9 months</li>
        <li>During project duration: Bi-weekly meetings; Monthly reports;</li>
      </ul>
      <h4 className="text-lg font-semibold mt-8 mb-4">Time Estimates</h4>
      <p className="mb-4">
        Based on the project scope, our team estimates the time needed to complete each project phase, from discovery
        and strategy to design, development, and launch. We base these time estimates on our previous experience,
        industry standards, and the complexity of work involved.
      </p>
      <div className="mb-8">
        <ProjectTimelineTable />
      </div>

      <h4 className="text-lg font-semibold mt-8 mb-4">Cost Estimates</h4>
      <p className="mb-4">
        Once time estimates are clear, we calculate total project costs based on our hourly rates and time needed for
        each phase. We also consider any additional costs, such as third-party tools, licenses, or integrations that
        will be needed to complete the project.
      </p>
      <div className="mb-8">
        <PricingList />
      </div>
      <h4 className="text-lg font-semibold mt-4 mb-2">Flexibility and Adjustments</h4>
      <p className="mb-4">
        While our estimates are as accurate as possible, we understand that unforeseen challenges may arise. If any
        changes or additional work are needed, we'll provide updated estimates and timeframes to ensure the project
        stays on track.
      </p>
      <h4 className="text-lg font-semibold mt-4 mb-2">Continuous Communication</h4>
      <p className="mb-4">
        Throughout the project, we maintain open communication with our clients to ensure the project progresses as
        planned. Any deviations from initial estimates will be discussed, and revised timeframes or costs will be
        communicated in a timely manner.
      </p>
      <p className="mt-6">
        By breaking down the project into clear phases and providing detailed estimates, our goal is to give clients a
        transparent and predictable path to success. This process allows us to manage expectations, efficiently allocate
        resources, and ensure timely delivery.
      </p>
    </Section>
  )
}
