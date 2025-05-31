import Section from "@/components/section"

export default function TermsAndConditions() {
  return (
    <Section id="terms-and-conditions" title="Terms and Conditions">
      <ul className="list-disc pl-6 space-y-2">
        <li>The proposal is valid for 15 days from the date of receipt.</li>
        <li>
          The proposal includes up to 3 rounds of feedback or change requests. For example, after Builtt delivers a web
          page design, the client provides feedback, and design changes are made accordingly. After the first round of
          changes, the client has the right to one more round. If a third (or more) round of changes is needed, each
          subsequent round will be charged additionally.
        </li>
        <li>
          The deadline for providing feedback and responding to inquiries/emails is 2 business days. If response time
          exceeds this deadline, the project delivery deadline will be considered postponed.
        </li>
        <li>Adapting the site for Internet Explorer 11 is an additional service and will be charged separately.</li>
        <li>
          Accepting items listed in the proposal implies project approval. Production of the approved project begins
          after signing the cooperation agreement and advance payment.
        </li>
        <li>
          The proposal includes signing the project by Builtt as well as its use for promotional purposes. If a "white
          label" version of the project is needed, this service will be considered an additional cost and will be
          charged separately.
        </li>
        <li>
          The proposal doesn't include production or adaptation of photo/video content. These services are optional and
          can be requested separately if needed.
        </li>
        <li>
          The proposal includes entering textual and/or photo/video content for all 18 languages. The client is
          obligated to provide all content as well as translations into all languages.
        </li>
        <li>
          The proposal includes only implementation of items listed in the proposal and in accordance with conditions
          highlighted in the proposal. If the client requires purchasing specific licenses, fonts, domains,
          photo/video/audio content, or other consumable materials, these services won't be included in the proposal
          price but will be treated as additional costs.
        </li>
        <li>
          If the client requires implementation that isn't covered by the specification, it will be considered a change
          request, and a new (separate) estimate will be created for it.
        </li>
      </ul>
    </Section>
  )
}
