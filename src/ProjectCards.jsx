import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectCards = ({ projectName, img, icons, gitHubUrl, hostUrl }) => {
  return (
    <div className="project-card mx-auto">
      <p className="project-title fs-4">{projectName.toUpperCase()}</p>
      <img
        src={img}
        alt={`${projectName} project image`}
        className="project-image"
      />
      <div className="tech-icons d-flex justify-content-around align-items-center">
        {icons.map((icon, index) => (
          <div key={index} className="project-icon">
            {typeof icon !== "string" ? (
              <FontAwesomeIcon icon={icon} style={{ fontSize: 40 }} />
            ) : (
              <img src={icon} />
            )}
          </div>
        ))}
      </div>
      <div className="d-flex mt-4">
        {gitHubUrl && (
          <a
            href={gitHubUrl}
            className="button-link project-button"
            target="_blank"
          >
            GitHub
          </a>
        )}
        {hostUrl && (
          <a
            href={hostUrl}
            className="button-link project-button"
            target="_blank"
          >
            Live Version
          </a>
        )}
      </div>
    </div>
  );
};
export default ProjectCards;
