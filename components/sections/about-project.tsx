import Section from "@/components/section"

export default function AboutProject() {
  return (
    <Section id="about-project" title="About the Project">
      <p className="mb-4">
        Belive requires the development of a custom website and mobile application. The project will be built on the Laravel framework, utilizing the latest version of PHP and MySQL for the backend, and React for the frontend. 
        The mobile application will be developed using Flutter, ensuring a consistent user experience across both web and mobile platforms.
      </p>
      <p className="mb-4">
        The project will feature a clear and user-friendly UI, optimized for mobile access, in line with Belive's brand
        identity. Key functionalities include:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Room catalog with Room detail pages and Room listing pages</li>
        <li>Room search and comparison functionality</li>
        <li>Room booking notifications</li>
        <li>Up to 25 custom UI elements</li>
      </ul>
      <p className="mb-4">
        The solution will be SEO-optimized, efficient in resource management, and will support rich
        content. The site will include user tracking and analytics, and is designed with future scalability in mind,
        including the ability to add new rooms by country.
      </p>
      <p>The website will not include user accounts or pricing in its initial launch.</p>
    </Section>
  )
}
