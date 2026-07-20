import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

function HomePage() {
    // Smoothly scroll to a section on the homepage.
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);

        section?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        });
    };

  return (
    <div className="site-container">
      {/* Main website navigation */}
      <header className="site-header">
        <nav className="navigation" aria-label="Main navigation">
          <a className="site-logo" href="/">
            EW
          </a>

          <div className="navigation-links">
            <button type="button" onClick={() => scrollToSection("about")}>
                About
            </button>

            <button type="button" onClick={() => scrollToSection("projects")}>
                Projects
            </button>

            <button type="button" onClick={() => scrollToSection("contact")}>
                Contact
            </button>
            </div>
        </nav>
      </header>

      <main>
        {/* Main introduction */}
        <section className="hero-section">
          <p className="hero-label">My Portfolio</p>

          <h1>
            Hi, I’m <span>Eric</span>.
          </h1>

          <p className="hero-description">
            I’m interested in the point where data stops being abstract and 
            starts shaping a real decision. My work focuses on asking 
            useful questions, finding meaningful patterns, and turning the 
            results into something people can act on.
          </p>
        </section>

        {/* Personal description */}
        <section id="about" className="about-section">
          <div className="section-heading">
            <p className="section-label">About me</p>
            <h2>A little about my background</h2>
          </div>

          <div className="about-content">
            <p>
              I graduated cum laude from Penn State with a bachelor’s degree in Data Science 
              and a minor in Statistics. During my undergraduate studies and my internship with 
              the USPS Office of Inspector General, I worked with large datasets, relational databases, 
              business intelligence dashboards, and natural language processing workflows. 
              These experiences strengthened my interest in using data to investigate practical questions 
              and communicate findings that can influence real decisions.


            </p>

            <p>
              My interests span workflow automation, relational database design, 
              predictive modeling, statistical inference, and business intelligence. 
              I enjoy working across different parts of the data science process and am continuing to 
              deepen that foundation through graduate study at Penn Engineering. 
              I am currently studying systems programming in C and look forward to taking Penn courses 
              in computer vision and natural language processing as I continue broadening my technical perspective.
            </p>
          </div>
        </section>

        {/* Featured portfolio projects */}
        <section id="projects" className="projects-section">
          <div className="section-heading">
            <p className="section-label">Selected work</p>
            <h2>Featured projects</h2>

            <p>
              A collection of projects involving data analysis, machine
              learning, visualization, and software development.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Contact information */}
        <section id="contact" className="contact-section">
          <div className="section-heading">
            <p className="section-label">Contact</p>
            <h2>Let’s connect</h2>
          </div>

          <p>
            Feel free to contact me on GitHub, or LinkedIn.
          </p>

          <div className="contact-links">

            <a href="https://github.com/Eric7895" target="_blank" rel="noreferrer">
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/eric7895/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2026 Eric Wu</p>
      </footer>
    </div>
  );
}

export default HomePage;