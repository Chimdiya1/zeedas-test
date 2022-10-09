import "./StatCard.scss";
import info from "../../assets/info.png";
import Text from "../Text/Text";
function StatCard({ children, name }) {
  return (
    <div className="statCard">
      <div className="statTitle">
        <Text color="#03293d80">{name}</Text>
        <img src={info} alt="icon" />
      </div>
      {children}
    </div>
  );
}

export default StatCard;
