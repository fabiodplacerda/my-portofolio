import AboutCards from "./AboutCards";
import AboutText from "./AboutText";

const About = () => {
  return (
    <section id="about-me">
      <h2 className="text-center">ABOUT ME</h2>
      <div
        className="d-flex flex-column justify-content-around"
        id="about-container"
      >
        <AboutCards />
        <AboutText />
      </div>
    </section>
  );
};
export default About;
