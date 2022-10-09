import ChangeBadge from "../ChangeBadge/ChangeBadge";
import StatCard from "../StatCard/StatCard";
import StatValue from "../StatValue/StatValue";
import Text from "../Text/Text";
import "./AverageTicketStat.scss";

function AverageTicketStat() {
  return (
    <StatCard name="Average ticket duration">
      <div className="atd">
        <div className="details">
          <div className="detail">
            <StatValue value="36" measurement="hours" />
            <Text>Hours worked </Text>
          </div>
        </div>
        <div style={{ position: "absolute", left: "16px", bottom: "16px" }}>
          <ChangeBadge type="decrease">79%</ChangeBadge>
        </div>
      </div>
    </StatCard>
  );
}

export default AverageTicketStat;
