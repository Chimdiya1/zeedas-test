import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import ChangeBadge from "../ChangeBadge/ChangeBadge";
import StatCard from "../StatCard/StatCard";
import StatKey from "../StatKey/StatKey";
import Text from "../Text/Text";
import "./CycleTimeStat.scss";
ChartJS.register(ArcElement, Tooltip);

const data = {
  labels: [],
  datasets: [
    {
      data: [8, 1, 3, 1, 4],
      backgroundColor: ["#23B3E8", "#03293D", "#F15832", "#826AF9", "#4DBD98"],
      borderColor: ["#23B3E8", "#03293D", "#F15832", "#826AF9", "#4DBD98"],
      borderWidth: 1,
    },
  ],
};
const options = {
  cutout: "70%",
  //   aspectRatio: 1
};

function CycleTimeStat() {
  return (
    <StatCard name="Cycle time">
        <div style={{ position: "absolute", left: "16px", bottom: "16px" }}>
          <ChangeBadge type="increase">24%</ChangeBadge>
        </div>
      <div className="cts">
        <div className="chart-container" style={{ width: "35%" }}>
          <Doughnut data={data} options={options} />
          <div className="inner">
            <Text weight="700" color="#03293D" size="16px">
              17 hours
            </Text>
            <Text size="10px" weight="400">
              Average across 50 tickets in 4 weeks
            </Text>
          </div>
        </div>
        <div className="stat-container">
          <StatKey color="#4DBD98" value="4hrs" title="Coding" />
          <StatKey color="#23B3E8" value="8hrs" title="Code Review" />
          <StatKey color="#03293D" value="1hr" title="QA Review" />
          <StatKey color="#F15832" value="3hrs" title="Idle Time" />
          <StatKey color="#826AF9" value="1hr" title="Deployment" />
        </div>
      </div>
    </StatCard>
  );
}

export default CycleTimeStat;
