import Section from "@/components/section"

export default function TermsOfPayment() {
  return (
    <Section id="payment-terms" title="Payment Terms">
      <p className="mb-4">The payment schedule for the project will be as follows:</p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>15% upon project initiation</li>
        <li>30% after completion of the design phase</li>
        <li>55% after project completion and readiness for launch</li>
      </ul>
      <p className="mb-4">
        In case of payment delays, Builtt reserves the right to suspend work execution until payment is made.
      </p>
      <p className="mb-4">
        If there is a break in project realization due to payment delays and it's necessary to restart the project, a
        new development timeframe will be created, taking into account currently available resources.
      </p>
      <p className="mb-4">
        The deadline for starting resource planning and project is 3 days from receipt of advance payment.
      </p>
    </Section>
  )
}
