import ProjectCards from "./ProjectCards";
import { projects } from "./utils/projectsData";

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="text-center">PROJECTS</h2>
      <div className="container mt-5">
        <div className="row">
          {projects.map((project) => {
            return (
              <div
                key={project.projectName}
                className="col-12 col-md-6 col-lg-4 mt-5"
              >
                <ProjectCards
                  projectName={project.projectName}
                  img={project.image}
                  icons={project.icon}
                  gitHubUrl={project.gitHubUrl}
                  hostUrl={project.hostUrl}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Projects;
