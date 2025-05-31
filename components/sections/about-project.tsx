import Section from "@/components/section"

export default function AboutProject() {
  return (
    <Section id="about-project" title="About the Project">
      <p className="mb-4">
        Tesla requires the development of a custom, multilingual B2C website, as well as integration of B2B and
        teslagiveaways.com websites. The new platform will support 18 languages and is designed to enhance brand
        recognition, improve user experience, and showcase the growing product catalog.
      </p>
      <p className="mb-4">
        The website will feature a clear and user-friendly UI, optimized for mobile access, in line with Tesla's brand
        identity. Key functionalities include:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Product catalog with product detail pages (PDP) and product listing pages (PLP)</li>
        <li>Product search and comparison functionality</li>
        <li>Up to 25 custom UI elements</li>
      </ul>
      <p className="mb-4">
        Although Tesla provided an initial design, Builtt's design team identified areas where the current design
        doesn't fully meet the client's needs. Therefore, this proposal includes a complete redesign of all three sites
        (B2C, B2B, and teslagiveaways.com), including mobile and desktop versions.
      </p>
      <p className="mb-4">
        The project will also include data migration, transfer of all blogs from the current site to the new CMS, as
        well as content entry in all 18 languages. Tesla is responsible for providing all content and translations for
        the site.
      </p>
      <p className="mb-4">
        The solution will be SEO-optimized, GDPR-compliant, efficient in resource management, and will support rich
        content. The site will include user tracking and analytics, and is designed with future scalability in mind,
        including the ability to add new stores by country.
      </p>
      <p>The website will not include user accounts or pricing in its initial launch.</p>
    </Section>
  )
}
