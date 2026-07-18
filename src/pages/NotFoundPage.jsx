function NotFoundPage() {
  return (
    <div className="site-container">
      <header className="site-header">
        <nav className="navigation" aria-label="Error page navigation">
          <a className="site-logo" href="#/">
            EW
          </a>
        </nav>
      </header>

      <main className="not-found-page">
        <p className="section-label">404 error</p>

        <h1>Page not found</h1>

        <p> </p>

        <p>
          The page or project you requested does not exist.
        </p>

        <a className="primary-button" href="#/">
          Return home
        </a>
      </main>
    </div>
  );
}

export default NotFoundPage;