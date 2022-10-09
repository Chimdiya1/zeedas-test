import "./OverviewOption.scss";
import Text from "../Text/Text";

function OverviewOption({children, active}) {
  return (
    <div className={`overviewOption ${active ? "active" : ""}`}>
      <Text weight={active ? "700" : null} color={active ? "#23B3E8" : null}>
        {children}
      </Text>
    </div>
  );
}

export default OverviewOption;
