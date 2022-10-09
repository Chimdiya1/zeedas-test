import StatCard from "../StatCard/StatCard";
import Text from "../Text/Text";
import "./Complexity.scss";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
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

const labels = ["A", "B", "C", "D", "E"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [30, 60, 40, 80, 100],
      borderColor: "#23B3E8",
      lineTension: 0.4,
      radius: 6,
      pointRadius:0
    },
  ],
};

function Complexity() {
  return (
    <StatCard name="Complexity Accuracy">
      <div className="complexity">
        <Text color="#03293D" size="20px" style={{position:'absolute',top:"1px",left:"0px"}}>
          96%
        </Text>
        <Line options={options} data={data} />
      </div>
    </StatCard>
  );
}

export default Complexity;
