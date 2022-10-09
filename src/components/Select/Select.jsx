import "./Select.scss";
import downArrow from "../../assets/down-arrow.png";
import Text from "../Text/Text";
function Select() {
  return (
    <div className="Select">
        <Text color="#03293D">
            Product dev
        </Text>
        <img  src={downArrow} alt="icon" />
    </div>
  );
}

export default Select;
