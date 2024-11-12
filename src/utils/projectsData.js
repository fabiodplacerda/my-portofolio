import opImage from "../assets/op-img.png";
import tmImg from "../assets/tm-img.png";
import abImg from "../assets/ab-img.png";
import rbImg from "../assets/rb-img.png";
import tsImg from "../assets/ts-img.png";

import {
  faSquareJs,
  faReact,
  faNode,
  faJava,
} from "@fortawesome/free-brands-svg-icons";

export const projects = [
  {
    projectName: "Open Kitchen",
    image: opImage,
    icon: [faSquareJs, faReact, faNode],
    gitHubUrl: "https://github.com/fabiodplacerda/Open-Kitchen",
    hostUrl: "https://openkitchen-app.netlify.app/",
  },
  {
    projectName: "Task Master",
    image: tmImg,
    icon: [tsImg, faReact],
    gitHubUrl: "https://github.com/fabiodplacerda/TaskMaster",
    hostUrl: "https://mytask-master.netlify.app/",
  },
  {
    projectName: "Address Book",
    image: abImg,
    icon: [faJava],
    gitHubUrl: "https://github.com/fabiodplacerda/Address-book",
    hostUrl: null,
  },
  {
    projectName: "Rainbow VLC",
    image: rbImg,
    icon: [tsImg, faReact, faNode],
    gitHubUrl: null,
    hostUrl: "https://rainbow-vlc-demo.netlify.app/",
  },
];
