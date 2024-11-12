const date = new Date().getFullYear();

const Footer = () => {
  return (
    <footer>
      <nav className="d-flex justify-content-center mb-3">
        <li>
          <a href="#about-me" className="fs-3 mx-3">
            About me
          </a>
        </li>
        <li>
          <a href="#projects" className="fs-3 mx-3">
            Projects
          </a>
        </li>
      </nav>
      <p className="text-center">
        Copyright&#169; {date} Fabio Lacerda. All Right Reserved
      </p>
    </footer>
  );
};

export default Footer;
