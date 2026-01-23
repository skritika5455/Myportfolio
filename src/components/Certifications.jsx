import "./Certifications.css";

const certifications = [
  {
    title: "Microsoft Azure Certified",
    desc: "Microsoft Azure AZ-900 Certified with foundational knowledge of cloud concepts, Azure services, and security",
    icon: "💻",
  },
  {
    title: "Java Core Certification",
    desc: "Certified in Core Java, with strong fundamentals in OOP, exception handling, and collections.",
    icon: "🔥",
  },
  {
    title: "CodeChef Coder",
    desc: "Consistently solved 600+ problems on CodeChef with a peak rating of 1259.",
    icon: "🌐",
  },
  {
    title: "AWS Cloud Practitioner Certified",
    desc: "Basics of AWS services and security",
    icon: "☁️",
  },
  {
    title: "Academic Topper",
    desc: "Recognized as a three-time consecutive college topper for academic excellence.",
    icon: "🐙",
  },
  {
    title: "TechnoStorm Winner",
    desc: "Awarded Winner at TechnoStorm (Inter-College), showcasing strong teamwork and technical skills.",
    icon: "🎉",
  },
];

export default function Certifications() {
  return (
    <section className="cert-section">
      <h2 className="cert-heading">
        <span className="dot"></span>
        Certifications & Achievements
      </h2>

      <div className="cert-grid">
        {certifications.map((item, index) => (
          <div className="cert-card" key={index}>
            <div className="cert-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
