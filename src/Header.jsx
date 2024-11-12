const Header = () => {
  return (
    <header style={{ "padding-top": 20 }}>
      <nav className="navbar navbar-expand-sm navbar-dark mx-auto mt-4">
        <div className="container-fluid">
          <button
            className="navbar-toggler justify-content-center mx-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto justify-content-center align-items-center">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#about-me">
                  ABOUT ME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  PROJECTS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  CONTACT ME
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
