import Section from "@/components/section"

export default function OptionalServices() {
  return (
    <Section id="additional-services" title="Additional Services">
      <h3 className="text-xl font-semibold mb-4">Change Requests</h3>
      <p className="mb-4">
        During implementation and after project launch, it often happens that clients realize they'll need to make
        changes within the original project scope (changes that weren't originally planned and agreed upon). To enable
        such requests, we've developed several models for their implementation:
      </p>

      <ul className="list-disc pl-6 space-y-4 mb-4">
        <li>
          <strong>Defined Monthly Retainer:</strong> This package includes a predefined number of hours monthly (billed
          on a monthly basis) and is intended for implementing changes that the client requests. The monthly fee (or
          number of hours) is fixed. Also, if the monthly retainer isn't sufficient for request realization, the client
          can pay an additional hourly fee for remaining hours.
        </li>
        <li>
          <strong>Pay-as-you-go Billing:</strong> In this model, the client approaches with requests without a fixed
          retainer obligation. At the end of each month, we calculate the number of hours spent on solving the client's
          tasks and report to the client. The client is then billed based on hours consumed in that month.
        </li>
        <li>
          <strong>Estimation-based Billing:</strong> In this system, the client submits their change request with a
          description, and Builtt's team estimates the time needed for implementation. The estimate is sent to the
          client for approval. Work on the task begins after client approval. All approved requests are billed monthly.
        </li>
      </ul>

      <p className="font-bold mb-4">** All change requests are billed at an hourly rate of €45.</p>

      <h4 className="text-lg font-semibold mt-6 mb-2">Change Request vs. Bug Report</h4>
      <p className="mb-4">
        <strong>Change Requests:</strong> These requests relate to changes the client requests regarding agreed
        functionality or design, as well as adding new functionalities and/or designs that weren't originally agreed
        upon when setting up the project. For example, if the client approves a page design and then (e.g., two months
        later) requests changes to the already approved design, this is considered a change request.
      </p>
      <p className="mb-4">
        <strong>Bugs:</strong> Bugs are portal/functional errors that don't comply with project specifications and occur
        during the warranty period. If a bug appears after the warranty period expires, its resolution will be
        considered a change request and will be billed separately.
      </p>

      <h4 className="text-lg font-semibold mt-6 mb-2">Warranty Period</h4>
      <p className="mb-4">
        The warranty period includes fixing bugs on the portal/application during the first month after launch. The
        warranty period doesn't include implementing change requests that the client posts during that period, but only
        resolving bugs by the agency.
      </p>
      <p className="mb-4">
        In case a maintenance contract is signed with Builtt, the warranty period is extended to the date specified in
        the contract, and the scope of services will be defined in relation to the type of maintenance defined in that
        contract.
      </p>
    </Section>
  )
}
