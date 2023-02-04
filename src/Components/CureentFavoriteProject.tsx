import {useSelector} from "react-redux"
import { RootState } from "../redux/store/store"
import urgetPrior from '../Assets/Icons/urgent.png'
import mediumPrior from '../Assets/Icons/medium.png'
import lowPrior from '../Assets/Icons/high.png'
import highPrior from '../Assets/Icons/low.png'
import bug from '../Assets/Icons/bug.png'
import macro from '../Assets/Icons/macro.png'
import task from '../Assets/Icons/task.png'
import { TableContainer, Table, Badge, TableRow, TableBody, TableCell, Typography,Box } from "@mui/material"
import styled from "@emotion/styled"

const TaskIdCell =styled(TableCell)({
  fontSize:14,
  fontWeight:700
})
const CurrProjContainer= styled(Box)({
  display:'flex',
  flexDirection:'column',
  gap:20,
  
  
})
const TaskFromCell= styled(TableCell)({
  borderRadius:16,
  padding:"0 !important",
  textAlign:"center",
  color:'white'

  
})


const CureentFavoriteProject = () => {
  const currProj = useSelector((state:RootState)=>state.favotireProjects.currentProject)
  return (
    <CurrProjContainer>
    <Typography variant='h5'>{currProj?.name}</Typography>
    <Typography>Todos <Badge sx={{marginLeft:1}} color='warning' badgeContent={currProj?.todos.length}></Badge></Typography>
    <TableContainer>
      <Table padding="none" >
        <TableBody>
          {currProj?.todos?.map((item,idx)=>{
            return(
              <TableRow  key={item.id}>
                <TableCell sx={{padding:0}} > <img src={
                item.priority==="urgent"?urgetPrior
                :item.priority==='high'?highPrior
                :item.priority==='medium'?mediumPrior
                :lowPrior} alt="Priority"  /> </TableCell>
                <TableCell> <img src={item.taskType==="bug"?bug:item.taskType==="macro"?macro:task} alt=""  />
                  
                  </TableCell>
                <TaskIdCell>{item.taskId}</TaskIdCell>
                <TableCell>{item.task}</TableCell>
                <TaskFromCell sx={{background:item.from==="Roundrush"?'#1FAAE9':item.from==="Marketing"?'#7A6FEF':item.from==="LDWebsite"?"#61D26F":"#4086E0"}}>{item.from}</TaskFromCell>

              </TableRow>
            )
          })}

        </TableBody>
      </Table>
    </TableContainer>
   
    <Typography>Tasks <Badge sx={{marginLeft:1}} color='info' badgeContent={currProj?.todos.length}></Badge></Typography>
    <TableContainer>
      <Table padding="none" >
        <TableBody>
          {currProj?.todos?.map((item,idx)=>{
            return(
              <TableRow  key={item.id}>
                <TableCell sx={{padding:0}} > <img src={
                item.priority==="urgent"?urgetPrior
                :item.priority==='high'?highPrior
                :item.priority==='medium'?mediumPrior
                :lowPrior} alt="Priority"  /> </TableCell>
                <TableCell> <img src={item.taskType==="bug"?bug:item.taskType==="macro"?macro:task} alt=""  />
                  
                  </TableCell>
                <TaskIdCell>{item.taskId}</TaskIdCell>
                <TableCell>{item.task}</TableCell>
                <TaskFromCell sx={{background:item.from==="Roundrush"?'#1FAAE9':item.from==="Marketing"?'#7A6FEF':item.from==="LDWebsite"?"#61D26F":"#4086E0"}}>{item.from}</TaskFromCell>

              </TableRow>
            )
          })}

        </TableBody>
      </Table>
    </TableContainer>
    </CurrProjContainer>
  )
}

export default CureentFavoriteProject