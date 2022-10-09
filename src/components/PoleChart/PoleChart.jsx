import "./PoleChart.scss";

function PoleChart({ values }) {
  return (
    <div className="poleChart">
      {values.map((value) => (
        <div
          key={value.color}
          style={{
            width: value.width,
            height: "100%",
            backgroundColor: value.color,
          }}
        ></div>
      ))}
    </div>
  );
}

export default PoleChart;
