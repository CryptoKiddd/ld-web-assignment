
import {useState} from 'react'

import Header from "../../atoms/Header/Header";




import "./DashBoardPage.css";
import DashboardProjectInfo from "../../Components/DashboardProjectInfo/DashboardProjectInfo";
import {IProject } from "../../Types/types";
import DashboardFavoriteProjects from "../../Components/DashboardFavoriteProjects/DashboardFavoriteProjects";
import { useAxios } from '../../hooks/useAxios';




const DashboardPage = () => {
  const [loading, data, error] = useAxios<IProject[]>({method:"GET", url:' http://localhost:3500/projects'})
  const [currentProject,setCurrentProject]= useState<IProject | undefined>()
  return( 
  
  <div className="dashboard-page">
    
    <Header title="Dashboard" />
    <div className="dashboard-wrapper">
     {error && <h1>{error}</h1>}
     {loading?<h1>Loading</h1>:error?'':<DashboardFavoriteProjects projects={data} setCurrentProject={setCurrentProject} />} 
     {currentProject?<DashboardProjectInfo  currentProject={currentProject}/>:error?'':<h1> No Projects Selected </h1>}
    </div>
  </div>);
};

export default DashboardPage;
