import { Link, useParams } from "react-router";

import projects from "../data/projects";
import NotFoundPage from "./NotFoundPage";

function ProjectPage() {
  // Read the dynamic ":slug" segment from the current URL.
  const { slug } = useParams();

  // Find the project whose slug matches the URL.
  const project = projects.find((item) => item.slug === slug);

  // Display the 404 page if no matching project exists.
  if (!project) {
    return <NotFoundPage />;
  }

  return (
    <div className="site-container">
      <header className="site-header">
        <nav className="navigation" aria-label="Project navigation">
          <Link className="site-logo" to="/">
            EW
          </Link>

          <Link to="/">Back to homepage</Link>
        </nav>
      </header>

      <main className="project-detail-page">
        {/* Return to the main portfolio page */}
        <Link className="project-back-link" to="/">
          ← All projects
        </Link>

        {/* Main project introduction */}
        <section className="project-detail-hero">
          <div className="project-detail-heading">
            <p className="section-label">Project details</p>

            <h1>{project.title}</h1>

            <ul className="technology-list" aria-label="Technologies used">
              {project.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>

            <p className="project-detail-summary">{project.description}</p>

            {/* Only display this area when at least one URL exists. */}
            {(project.githubUrl || project.liveUrl) && (
              <div className="project-detail-links">
                {project.githubUrl && (
                  <a
                    className="secondary-button"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View GitHub repository
                  </a>
                )}

                {project.liveUrl && (
                  <a
                    className="primary-button"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View live project
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Project image or temporary placeholder */}
          <div className="project-detail-image">
            {project.image ? (
              <img src={project.image} alt={`${project.title} preview`} />
            ) : (
              <span>Project image</span>
            )}
          </div>
        </section>

        {/* Only display the overview when content is provided. */}
        {project.overview && (
          <section className="project-overview-section">
            <p className="section-label">Overview</p>
            <h2>About this project</h2>
            <p>{project.overview.split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>))}</p>
          </section>
        )}

        {/* Display additional project screenshots when available. */}
        {project.screenshots?.length > 0 && (
          <section className="project-screenshots-section">
            <p className="section-label">Application preview</p>
            <h2>Explore the application</h2>

            <div className="project-screenshot-list">
              {project.screenshots.map((screenshot) => (
                <figure className="project-screenshot" key={screenshot.id}>
                  <img src={screenshot.image} alt={screenshot.alt} />

                  <figcaption>
                    <h3>{screenshot.title}</h3>
                    <p>{screenshot.caption}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {/* Render any custom detail sections stored in projects.js. */}
        {project.details?.length > 0 && (
          <section className="project-details-section">
            {project.details.map((detail) => (
              <article className="project-detail-block" key={detail.title}>
                <h2>{detail.title}</h2>
                <p>{detail.content}</p>
              </article>
            ))}
          </section>
        )}
      </main>

      <footer className="site-footer">
        <p>© 2026 Your Name. Built with React and Vite.</p>
      </footer>
    </div>
  );
}

export default ProjectPage;