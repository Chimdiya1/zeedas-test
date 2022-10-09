import "./ProjectBar.scss";
import ProjectTitle from "../ProjectTitle/ProjectTitle";
import Text from "../Text/Text";
import Select from "../Select/Select";
import closed from "../../assets/closed.png";
import OverviewOption from "../OverviewOption/OverviewOption";

function ProjectBar() {
  return (
    <div className="projectBar">
      <ProjectTitle />
      <Text size="12px">Workflows</Text>
      <Select />
      <div className="overview-title">
        <Text color="#23B3E8" weight="700">
          Overview
        </Text>
        <img src={closed} alt="icon" />
      </div>
      <OverviewOption active={true}>Project Status</OverviewOption>
      <OverviewOption>Planning</OverviewOption>
      <OverviewOption>Teamwork</OverviewOption>
      <OverviewOption>Team Health</OverviewOption>
      <OverviewOption>Investment</OverviewOption>
      <Text style={{ marginTop: "12px" }}>Action centre</Text>
      <Text style={{ marginTop: "12px" }}>Apps</Text>
      <Text style={{ marginTop: "12px" }}>Tasks</Text>
      <Text style={{ marginTop: "12px" }}>Code Review</Text>
      <Text style={{ marginTop: "12px" }}>QA review</Text>
      <Text style={{ marginTop: "12px" }}>Notes</Text>
    </div>
  );
}

export default ProjectBar;
