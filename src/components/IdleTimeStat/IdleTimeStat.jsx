import info from "../../assets/info.png";
import Text from "../Text/Text";
import "./IdleTimeStat.scss";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        font: {
          size: 12,
          family: "Nunito sans",
        },
      },
    },
    y: {
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: { display: false },
    },
  },
};

const labels = ["Coding", "Code Review", "QA Review"];

export const data = {
  labels,
  datasets: [
    {
      label: "Idle",
      data: [80, 40, 40],
      backgroundColor: "rgba(3, 41, 61, 0.1)",
      barThickness: "flex",
      borderRadius: 6,
      barPercentage: 0.7,
      categoryPercentage: 0.4,
    },
    {
      label: "Productive",
      data: [30, 60, 70],
      backgroundColor: "#4DBD98",
      barThickness: "flex",
      borderRadius: 6,
      barPercentage: 0.7,
      categoryPercentage: 0.4,
    },
  ],
};
function IdleTimeStat() {
  return (
    <div className="its">
      <div className="statTitle">
        <Text color="#03293d80">Idle Time Breakdown</Text>
        <img src={info} alt="icon" />
        <div className="legend">
          <div className="key">
            <div
              className="bullet"
              style={{ backgroundColor: "rgba(3, 41, 61, 0.1)" }}
            ></div>
            <Text color="#03293D" style={{ marginRight: "12px" }}>
              Idle
            </Text>
          </div>
          <div className="key">
            <div
              className="bullet"
              style={{ backgroundColor: "#4DBD98" }}
            ></div>
            <Text color="#03293D" style={{ marginRight: "12px" }}>
              Productive
            </Text>
          </div>
        </div>
      </div>
      <div className="its-body">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
}

export default IdleTimeStat;
