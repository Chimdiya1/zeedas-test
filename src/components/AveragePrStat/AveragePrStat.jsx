import ChangeBadge from "../ChangeBadge/ChangeBadge";
import StatCard from "../StatCard/StatCard";
import StatValue from "../StatValue/StatValue";
import Text from "../Text/Text";
import "./AveragePrStat.scss";

function AveragePrStat() {
  return (
    <StatCard name="Average PR size">
      <div className="aps">
        <div className="details">
          <div className="detail">
            <StatValue value="968" measurement="lines" />
            <Text>Line change </Text>
          </div>
          <div className="detail">
            <StatValue value="240" measurement="kb" />
            <Text>Size</Text>
          </div>
        </div>
        <div style={{ marginTop: "auto" }}>
          <ChangeBadge type="increase">24%</ChangeBadge>
        </div>
      </div>
    </StatCard>
  );
}

export default AveragePrStat;
