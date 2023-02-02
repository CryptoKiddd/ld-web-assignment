import dashboardPic from '../../Assets/Images/dashboard-welcome.png'
import { IProject } from '../../Types/types'

type DashboardFavoriteProjectsProps = {
    setCurrentProject:React.Dispatch<React.SetStateAction<IProject | undefined>>,
    projects:IProject[] | undefined
}

const DashboardFavoriteProjects = ({projects, setCurrentProject}:DashboardFavoriteProjectsProps) => {
  return (
    <div className="DashboardFavoriteProjects">
        <div className="dashboard-welcome">
         
          <div className="">
          <h2>Welcome back, James</h2>
          <p>in Marketing You have 14 task to accomplish and 10 
            reviews left in your current iteration.</p>
          </div>
          <img src={dashboardPic} alt="" />
        </div>
        <div className="dashboard-fav-projects">
          <h3>Favorite Projects</h3>
          <div className="fav-projects-wrapper">
            {projects? projects.map((project)=>{
              return(
                <div key={project.id} className="project" onClick={()=>setCurrentProject({...project})} >
                  <span style={{background:project.color}} className="project-symbol" >{project.sym}</span>
                  <span className="project-name" >{project.name}</span>
                </div>
              )
            }):""}
          </div>
        </div>
      </div>
  )
}

export default DashboardFavoriteProjects