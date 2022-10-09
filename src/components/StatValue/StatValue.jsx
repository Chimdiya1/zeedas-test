import Text from "../Text/Text";
import "./StatValue.scss";

function StatValue({ value, measurement }) {
  return (
    <div className="statValue">
      <Text
        style={{ marginRight: "4px" }}
        font="futura"
        color="#03293D"
        weight="700"
        size="20px"
      >
        {value}
      </Text>
      <Text weight="400" size="12px">
        {measurement}
      </Text>
    </div>
  );
}

export default StatValue;
