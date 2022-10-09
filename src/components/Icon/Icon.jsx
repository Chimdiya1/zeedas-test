import "./Icon.scss";
function Icon({ icon, active }) {
  return (
    <div className={`icon ${active ? "active" : ""}`}>
      <img src={icon} alt="icon" />
    </div>
  );
}

export default Icon;
