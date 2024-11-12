import aboutImg from "./assets/0_SPjH6EGSjLcMPv8Q.png";

const AboutText = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-around container"
      id="about-img-text-container"
    >
      <img src={aboutImg} alt="" id="about-img" />
      <p className="fs-4" id="about-text">
        Hi there! I&apos;m a passionate and driven programmer ready to launch my
        career in Software Development. I thrive on solving problems and
        delivering impactful results. My fascination with technology and its
        limitless potential has inspired me to pursue a path as a Software
        Engineer. Along the way, I&apos;ve developed expertise in Java,
        JavaScript, React, Mongoose, PSQL, and Test-Driven Development, building
        a strong foundation in full-stack web development. I’m excited to tackle
        new challenges and create innovative solutions in the ever-evolving tech
        world!
      </p>
    </div>
  );
};
export default AboutText;
