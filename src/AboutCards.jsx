import SchoolIcon from "@mui/icons-material/School";
import dfWhite from "./assets/digital-futures-white-logo.png";
import ncWhite from "./assets/nc-white-logo.png";

const AboutCards = () => {
  return (
    <div className="d-flex justify-content-around container-sm mt-5">
      <div className="card-box">
        <SchoolIcon sx={{ fontSize: 50 }} />
        <p className="card-box-title">EDUCATION</p>
        <p className="card-box-text">Management & Administration</p>
      </div>
      <div className="card-box">
        <img
          src={ncWhite}
          className="card-box-logo"
          alt="northcoders white logo"
        />
        <p className="card-box-title">NORTHCODERS</p>
        <p className="card-box-text">Trainee Software Engineer</p>
      </div>
      <div className="card-box">
        <img
          src={dfWhite}
          className="card-box-logo"
          alt="digital futures white logo"
        />
        <p className="card-box-title">DIGITAL FUTURES</p>
        <p className="card-box-text">Trainee Software Engineer</p>
      </div>
    </div>
  );
};
export default AboutCards;
