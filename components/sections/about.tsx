import Section from "@/components/section"
import { yearsOfExperience } from "@/lib/utils";
import { forwardRef } from "react"

const AboutSection = forwardRef<HTMLElement>((props, ref) => {
  const experienceInYears: number = yearsOfExperience();
  return (
    <Section id="about-dimaseka.dev" title="About dimaseka.dev" ref={ref}>
      <p className="mb-4">
        At Dimaseka.dev, we specialize in creating innovative, scalable, and long-term solutions for software development that
        drive business success. With over {experienceInYears} years of experience in the industry, our dedicated team of experts has
        successfully completed over 30 projects across various industries, providing customized website solutions that
        meet unique business needs.
      </p>
      <p className="mb-4">We offer our clients a complete web production positioning service, which includes:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>
          <strong>Design:</strong> Creating unique and engaging designs that reflect your brand and enhance user
          experience.
        </li>
        <li>
          <strong>Development:</strong> Building robust, scalable, and secure websites that are tailored to your
          specific requirements.
        </li>
        <li>
          <strong>Strategy and Growth:</strong> Helping define a clear digital strategy that supports your long-term
          business goals, optimizing your online presence for maximum growth.
        </li>
        <li>
          <strong>Support and Maintenance:</strong> Providing continuous support and maintenance to ensure your website
          is always up-to-date, secure, and optimized.
        </li>
        <li>
          <strong>Team Scaling:</strong> Providing flexible and scalable team resources to support your projects as they
          grow, whether through short-term collaborations or long-term partnerships.
        </li>
      </ul>
      <p className="mb-4">
        We understand that every company has its unique identity, which is also reflected in specific website
        development needs. Our team approaches each project in a personalized way to fully understand your goals, target
        audiences, and market dynamics.
      </p>
      <p>
        This way, we develop a comprehensive strategy that not only aligns with your website goals but also enhances
        user experience, ensuring that your website is an effective tool for achieving business objectives.
      </p>
    </Section>
  )
});

export default AboutSection;
