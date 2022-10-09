import Icon from "../Icon/Icon";
import Logo from "../Logo/Logo";
import SearchIcon from "../SearchIcon/SearchIcon";
import "./Sidebar.scss";
import home from "../../assets/home.png";
import inbox from "../../assets/inbox.png";
import project from "../../assets/project.png";
import people from "../../assets/people.png";
import wallet from "../../assets/wallet.png";
import arrow from "../../assets/arrow-button.png";
import Avatar from "../Avatar/Avatar";

function Sidebar() {
  return (
    <div className="sidebar">
      <Logo />
      <SearchIcon />
      <div className="nav-icons">
        <Icon icon={home}/>
        <Icon icon={inbox}/>
        <Icon icon={project} active="true"/>
        <Icon icon={people}/>
        <Icon icon={wallet}/>
      </div>
      <div className="team">
        <Avatar initials="PN" bgColor="#23B3E8"/>
        <Avatar initials="JI" bgColor="#4DBD98"/>
        <Avatar initials="LG" bgColor="#3D43A2"/>
        <Avatar initials="AW" bgColor="#F15832"/>
      </div>
      <img className="arrow" src={arrow} width="40px" alt="arrow"/>
    </div>
  );
}

export default Sidebar;
