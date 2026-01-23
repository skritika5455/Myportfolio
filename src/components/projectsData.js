import Geosync from "../assets/Geosync.jpg.jpeg";
import ResumeAnalyzer from "../assets/Resumeanalyzer.jpeg";
import ExpenseTracker from "../assets/ExpenseTracker.jpeg";
import InvoiceGenerator from "../assets/Invoicegenerator.jpeg";
import portfolioImg from "../assets/portfolio.jpg.jpeg";
const projects = [
  {
    title: "GeoSync- Smart Geo Location Attendance System",
    image: Geosync,
    description:
      "Designed and implemented the frontend UI of a geo-fencing attendance app with real-time location visualization and seamless API integration.",
    tech: ["HTML", "CSS", "JavaScript", "React.js", "Google Maps API", "REST API"],
  },
  {
    title: "Portfolio",
    image: portfolioImg,
    description:
      "Designed and developed a responsive personal portfolio website to showcase projects, skills, and achievements with smooth navigation and modern UI design.",
    tech: ["HTML", "CSS", "JavaScript", "React.js"],
  },
  {
    title: "Resume Analyzer",
    image: ResumeAnalyzer,
    description:
      "Designed and developed the frontend interface for uploading resumes, displaying skill analysis, and showing job match results in a user-friendly dashboard.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
   
  {
    title: "Expence Tracker",
    image: ExpenseTracker,
    description:
      "Designed and developed the frontend UI for tracking daily expenses with category-wise visualization and interactive dashboards.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Invoice Generator",
    image: InvoiceGenerator,
    description:
      "Developed an Invoice Generator to create, manage, and download professional invoices with automated calculations.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
 
];

export default projects;
