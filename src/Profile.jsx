import photo from "./assets/Untitled-2.png";
import cv from "./assets/FABIO_CV_DF.pdf";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Profile = () => {
  return (
    <>
      <div
        className="d-flex justify-content-between mt-5 align-items-center container"
        id="profile-container"
      >
        <div className="d-flex flex-column" id="profile-left">
          <p id="title">JUNIOR SOFTWARE DEVELOPER</p>
          <p id="name">
            Fabio
            <br /> Lacerda
          </p>
          <div className="d-flex mt-4" id="profile-buttons-container">
            <a
              href={cv}
              target="_blank"
              rel="noopener noreferrer"
              id="cv-btn"
              className="button-link"
            >
              MY RESUME
            </a>
            <a href="" id="contact-btn" className="button-link">
              CONTACT
            </a>
          </div>
        </div>
        <div
          className="d-flex flex-column justify-content-center align-items-center"
          id="profile-right"
        >
          <img src={photo} alt="" id="profile-photo" />
          <div>
            <a
              href="https://www.linkedin.com/in/fabiolacerda96/"
              target="_blank"
            >
              <LinkedInIcon
                sx={{ fontSize: 50, mx: 2, mt: 2, color: "white" }}
              />
            </a>
            <a href="https://github.com/fabiodplacerda" target="_blank">
              <GitHubIcon sx={{ fontSize: 45, mx: 2, mt: 2, color: "white" }} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
