import Text from "../Text/Text";
import "./Section.scss";
import down from "../../assets/down.png";
function Section({children, name}) {
  return (
    <div className="section">
      <div className="sectionTop">
        <Text weight="700" size="16px" color="#03293D" font="futura">
            {name}
        </Text>
        <div className="select">
            <Text color="#03293D">
                All time
            </Text>
            <img src={down} alt="icon" />
        </div>
      </div>
      {children}
    </div>
  );
}

export default Section;
