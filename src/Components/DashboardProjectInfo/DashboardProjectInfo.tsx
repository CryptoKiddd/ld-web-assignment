 import { Link } from 'react-router-dom'

import urgentIcon from '../../Assets/Icons/urgent.png'
import highIcon from '../../Assets/Icons/high.png'
import mediumIcon from '../../Assets/Icons/medium.png'
import lowIcon from '../../Assets/Icons/low.png'
import bugIcon from '../../Assets/Icons/bug.png'
import taskIcon from '../../Assets/Icons/task.png'
import macroIcon from '../../Assets/Icons/macro.png'
import vectorRight from '../../Assets/Icons/Vector.png'
import { Itodo, IProject } from "../../Types/types"

import './DashboardProjectInfo.css'


type DashboardProjectInfoProps ={
currentProject:IProject | undefined
}


const DashboardProjectInfo = ({currentProject}:DashboardProjectInfoProps ) => {
 
 
 
  return (
    
     <div className="DashboardProjectInfo">
    <header >
      <h2 className='wt'> {currentProject?.name}</h2>
      {currentProject && <Link className='projectLink' to={`/projectOjectives`} >Go to Project   <img src={vectorRight} alt="" /> </Link> } 

    </header>
      <h2>
      
         {currentProject?.todos.length && `Todos ${currentProject?.todos.length}` }
      </h2>
      
    <div className="todos">

      {currentProject?.todos.slice(0,7).map((todo:Itodo)=>{
        return(
          <div className='todo' >
            {todo.priority === 'urgent' && <img src={urgentIcon} alt="" /> }
            {todo.priority === 'medium' && <img src={mediumIcon} alt="" /> }
            {todo.priority === 'high' &&<img src={highIcon} alt="" /> }
            {todo.priority === 'low' && <img src={lowIcon} alt="" /> }
            {todo.taskType === 'bug' && <img src={bugIcon} alt="" /> }
            {todo.taskType === 'macro' && <img src={macroIcon} alt="" /> }
            {todo.taskType === 'task' && <img src={taskIcon} alt="" /> }
           
             <b>{todo.taskId}</b>
             <p>{todo.task}</p>
             <span className={`from ${todo.from}`}> {todo.from} </span>
            </div>

        )
      })}
      

    </div>
      <h2>
      {currentProject?.pending.length && `Pending Reviews ${currentProject?.pending.length}` }
      </h2>
    <div className="todos">
      {currentProject?.pending.slice(0,7).map((todo:Itodo)=>{
        
        return(
          <div className='todo' >
            {todo.priority === 'urgent' && <img src={urgentIcon} alt="" /> }
            {todo.priority === 'medium' && <img src={mediumIcon} alt="" /> }
            {todo.priority === 'high' &&<img src={highIcon} alt="" /> }
            {todo.priority === 'low' && <img src={lowIcon} alt="" /> }
            {todo.taskType === 'bug' && <img src={bugIcon} alt="" /> }
            {todo.taskType === 'macro' && <img src={macroIcon} alt="" /> }
            {todo.taskType === 'task' && <img src={taskIcon} alt="" /> }
           
             <b>{todo.taskId}</b>
             <p>{todo.task}</p>
             <span className={`from ${todo.from}`} > {todo.from} </span>
            </div>

        )
      })}
    </div>
  </div>

   
  )
}

export default DashboardProjectInfo