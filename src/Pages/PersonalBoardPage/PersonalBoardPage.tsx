import './PersonalBoardPage.css'

import {Outlet, Link} from 'react-router-dom'

import Header from '../../atoms/Header/Header'

import Settings from "../../Assets/Icons/settings2.png";
const PersonalBoardPage = () => {
  return (
    <div className='personalboard-page' >
      <Header title='Space Settings' />
     

      <div className="personal-board-page-wrapper">
      <div className="personal-info-left">
        <header className="personal-info-left-header">
          <img src={Settings} alt="" />
          <span>Space Settings</span>
        </header>
        <Link to={"personalboard/info"}>Info</Link>
        <Link to={"personalboard/members"}>Members</Link>
      </div>
      <Outlet />

      </div>
     
      
    </div>
  )
}

export default PersonalBoardPage