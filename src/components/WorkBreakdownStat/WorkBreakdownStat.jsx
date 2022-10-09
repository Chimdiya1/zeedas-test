import PoleChart from "../PoleChart/PoleChart";
import StatCard from "../StatCard/StatCard";
import StatKey from "../StatKey/StatKey";
import StatValue from "../StatValue/StatValue";
// import Text from "../Text/Text";
import "./WorkBreakdownStat.scss";

function WorkBreakdownStat() {
  let poleValues = [
    {
      width: "25%",
      color: "#4DBD98",
    },
    {
      width: "15%",
      color: "#23B3E8",
    },
    {
      width: "40%",
      color: "#03293D",
    },
    {
      width: "20%",
      color: "#F15832",
    },
  ];
  return (
    <StatCard name="Work breakdown">
      <div className="work-stat">
        <div className="details">
          <StatValue value="968" measurement="lines" />
          <StatValue value="54" measurement="tickets" />
          <StatValue value="4" measurement="total weeks worked" />
        </div>
        <PoleChart values={poleValues} />
        <div className="keys">
            <StatKey color="#4DBD98" value="25%" title="New work"/>
            <StatKey color="#23B3E8" value="15%" title="Rework"/>
            <StatKey color="#03293D" value="40%" title="Refactor"/>
            <StatKey color="#F15832" value="20%" title="Bugs"/>
        </div>
      </div>
    </StatCard>
  );
}

export default WorkBreakdownStat;
