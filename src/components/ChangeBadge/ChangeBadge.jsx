import "./ChangeBadge.scss";
import increase from "../../assets/increase.png";
import decrease from "../../assets/decrease.png";
import Text from "../Text/Text";

function ChangeBadge({ type, children }) {
  return (
    <div
      className={`changeBadge ${type === "increase" ? "increase" : "decrease"}`}
    >
      <img  src={type === "increase" ? increase : decrease} alt="icon"/>
      <Text weight="700" color={type === "increase" ? "#4DBD98" : "#F15832"}>
      {children}

      </Text>
    </div>
  );
}

export default ChangeBadge;
