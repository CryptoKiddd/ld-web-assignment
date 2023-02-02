import { useState } from "react";
import { Link } from "react-router-dom";
import PersonalBoardIcon from "../../Assets/Icons/PersonalBoardIcon.png";
import HomeIcon from "../../Assets/Icons/home.png";
import Settings from "../../Assets/Icons/settings.png";
import Logo from "../../Assets/Icons/logo.png";
import RRLogo from "../../Assets/Icons/RRlogo.png";
import Group from "../../Assets/Icons/group.png";
import Hamburger from "../../Assets/Icons/menu.png";
import help from '../../Assets/Icons/help.png'
import exit from '../../Assets/Icons/exit.png'
import person from  '../../Assets/Images/person1.png'
import arrowDown from '../../Assets/Icons/arrow-down.png'

import "./Sidebar.css";

const Sidebar = () => {
  const [opened, setOpened] = useState(false);
  const [tOpened, seTOpened] = useState(false);

  const sidebarClassName = opened ? "sidebar opened-sidebar" : "sidebar";
  const iconClassName = opened ? 'icon icon-opened':"icon";
  const bottomSidebar = opened ? 'sidebar-bottom sidebar-bottom-opened':"sidebar-bottom";
  const teams = opened===false ? 'teams-closed': tOpened ? 'teams-open':"teams-closed";

  return (
    <div className={sidebarClassName}>
      <div className={iconClassName}>
        {opened && <img src={RRLogo} alt="" />}

        <img src={Hamburger}  onClick={() => setOpened((prev) => !prev)} alt='bla' />
        
      
      </div>

      <Link className={iconClassName} to="">
        <img src={Logo} alt="" />
        {opened && <span>YellowTech Inc</span>}
      </Link>

      <Link className={iconClassName} to="/personalboard/personalboard/info">
        <img src={PersonalBoardIcon} alt="" />
        {opened && <span>Personal Board</span>}
      </Link>

      <Link className={iconClassName} to="/dashboard">
        <img src={HomeIcon} alt="" />
        {opened && <span>Dashboard</span>}
      </Link>

      <Link className={iconClassName} to="/personalboard/personalboard/info">
        <img src={Settings} alt="" />
        {opened && <span>Settings</span>}
      </Link>

      <div className="divider"></div>

      <Link className={iconClassName} to="/dashboard">
        <img src={Group} alt="" />
        {opened && <span className="teams" >Teams  + {opened &&  <img onClick={()=>seTOpened(prev=>!prev)} src={arrowDown} alt=""  />  }</span>}
      </Link>
      <div className={teams}>
        <h4>Lasting Dynamics</h4>
        <p>  LD Tech</p>
        <p>LD Dev</p>
        <p> LD Website</p>
      </div>
      
      <div className={bottomSidebar} >
        <img className='' src={exit} alt="" />
        <img src={help} alt="" />
        <Link to='personalboard/info'>
          <img src={person} alt="" />
          
        </Link>


      </div>
    </div>
  );
};

export default Sidebar;
