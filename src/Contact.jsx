import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Contact = () => {
  return (
    <section id="contact">
      <h2 className="text-center ">CONTACT</h2>
      <div
        className="d-flex justify-content-center align-items-center"
        id="contact-main-container"
      >
        <div
          id="contact-inner-container"
          className="d-flex justify-content-center align-items-center"
        >
          <div className="d-flex align-items-center mx-2">
            <EmailIcon
              sx={{
                fontSize: {
                  xs: 30,
                  sm: 45,
                },
              }}
            />
            <a
              className="mb-0 fs-4 contact-link"
              href="mailto:fabiolacerdadev@gmail.com"
            >
              fabiolacerdadev@gmail.com
            </a>
          </div>
          <div className="d-flex align-items-center mx-2">
            <LinkedInIcon
              sx={{
                fontSize: {
                  xs: 30,
                  sm: 45,
                },
              }}
            />
            <a
              className="mb-0 fs-4 contact-link"
              target="_blank"
              href="https://www.linkedin.com/in/fabiolacerda96/"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
