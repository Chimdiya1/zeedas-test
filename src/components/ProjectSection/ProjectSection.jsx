import "./ProjectSection.scss";
import Section from "../Section/Section";
import AveragePrStat from "../AveragePrStat/AveragePrStat";
import AverageTicketStat from "../AverageTicketStat/AverageTicketStat";
import WorkBreakdownStat from "../WorkBreakdownStat/WorkBreakdownStat";
import CycleTimeStat from "../CycleTimeStat/CycleTimeStat";
import IdleTimeStat from "../IdleTimeStat/IdleTimeStat";
function ProjectSection() {
  return (
    <Section name="Project stats">
      <div className="projects-stat-container">
        <div className="column1">
          <div className="row1">
            <div className="col1">
              <AveragePrStat />
            </div>
            <div className="col2">
              <AverageTicketStat />
            </div>
          </div>
          <div className="row2">
            <CycleTimeStat />
          </div>
        </div>
        <div className="column2">
          <div className="row1">
            <WorkBreakdownStat />
          </div>
          <div className="row2">
            <IdleTimeStat/>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default ProjectSection;
