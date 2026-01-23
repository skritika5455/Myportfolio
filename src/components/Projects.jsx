import "./Projects.css";
import projects from "./projectsData";

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">Featured Projects</h2>
      <p className="projects-subtitle">
        A selection of my academic and personal projects
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
