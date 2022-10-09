import "./PlanningSection.scss";
import Section from "../Section/Section";
import NewFeatures from "../NewFeatures/NewFeatures";
import Complexity from "../Complexity/Complexity";
import Task from "../Task/Task";
import Refactor from "../Refactor/Refactor";

function PlanningSection() {
  return (
    <Section name="Planning">
      <div className="planning-container">
        <div className="card">
          <NewFeatures />
        </div>
        <div className="card">
          <Complexity />
        </div>
        <div className="card">
          <Task />
        </div>
        <div className="card">
          <Refactor/>
        </div>
      </div>
    </Section>
  );
}

export default PlanningSection;
