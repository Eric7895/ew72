import { Link } from "react-router";

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      {/* Left side: project information */}
      <div className="project-card-content">
        {/* Top-left: project name and technology tags */}
        <div className="project-card-header">
          <h3>{project.title}</h3>

          <ul className="technology-list" aria-label="Technologies used">
            {project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </div>

        {/* Bottom-left: project description and link */}
        <div className="project-card-description">
          <p>{project.description}</p>

          <Link to={`/projects/${project.slug}`}>
            View project details
          </Link>
        </div>
      </div>

      {/* Right side: project image or placeholder */}
      <div className="project-card-image">
        {project.image ? (
          <img src={project.image} alt={`${project.title} preview`} />
        ) : (
          <span>Project image</span>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;