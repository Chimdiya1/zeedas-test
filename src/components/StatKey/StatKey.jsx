import "./StatKey.scss";
import Text from "../Text/Text";


function StatKey({ color, value, title }) {
  return (
    <div className="statKey">
      <div className="bullet" style={{ backgroundColor: color }}></div>
      <Text color="#03293D" style={{ marginRight: "12px" }}>{value}</Text>
      <Text color="#03293D80">{title}</Text>
    </div>
  );
}

export default StatKey;
