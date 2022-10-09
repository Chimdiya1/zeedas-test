import "./ProjectTitle.scss";
import leftArrow from "../../assets/left-arrow.png";
import fcmb from "../../assets/fcmb.png";
import elipses from "../../assets/elipses.png";
import Text from "../Text/Text";

function ProjectTitle() {
  return (
    <div className="projectTitle">
      <img style={{ marginRight: "18px" }} src={leftArrow} alt="icon" />
      <img style={{ marginRight: "5px" }} src={fcmb} alt="fcmb-logo" />
      <Text color="#03293D" weight="700" size="12px">
        FCMB: Mobile
      </Text>
      <img
        style={{ marginLeft: "6px", alignSelf: "flex-end" }}
        src={elipses}
        alt="elipse"
      />
    </div>
  );
}

export default ProjectTitle;
