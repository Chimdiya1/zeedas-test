import "./App.scss";
import Header from "./components/Header/Header";
import PlanningSection from "./components/PlanningSection/PlanningSection";
import ProjectBar from "./components/ProjectBar/ProjectBar";
import ProjectSection from "./components/ProjectSection/ProjectSection";
import Sidebar from "./components/Sidebar/Sidebar";
function App() {
  return (
    <div className="App">
      <Sidebar />
      <ProjectBar />
      <div className="dash-content">
        <Header />
        <div className="dash-body">
          <ProjectSection />
          <PlanningSection />
        </div>
      </div>
    </div>
  );
}

export default App;
