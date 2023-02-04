import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store/store";
import { addCurrentProject } from "../redux/features/favoriteProjectsSlice";

import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import welcomeImage from '../Assets/Images/dashboard-welcome.png'


const FPDContainer = styled(Box)({
    display:'flex',
    flexDirection:'column',
    gap:50,
    padding:50,
    // paddingRight:40
})
const FPDWelcome = styled(Box)({
    backgroundColor:"#E8F0FE",
    width:"90%",
    display:'flex',
    justifyContent:'space-between',
    padding:30,
    height:130,
 

})
const FPDWelcomeImg = styled('img')({
    width:"100%", 
      height:180,
      marginTop:-70
 

})
const FPDWelcomeLeft = styled(Box)({
    backgroundColor:"#E8F0FE",
    width:"60%",
    display:"flex",
    flexDirection:"column",
    gap:10

})
const FPDWelcomeRight = styled(Box)({
    backgroundColor:"#E8F0FE",
    width:"30%",

})
const FavProjects = styled(Box)({
    display:'flex',
    gap:20,
    flexWrap:'wrap',
    width:'100%'

})
const FavProject = styled(Box)({
    display:'flex',
    flexDirection:'column',
    gap:10,

    width:80
  

})
const FavProjectTop = styled(Box)({
    width:80, 
    height:80,
     justifyContent:'center',
     display:"flex",
     color:"white",
     alignItems:"center",
     borderRadius:16,
  

})



const FavoriteProjectDashboard = () => {

      const dispatch = useDispatch();
      const favoriteProjects = useSelector(
        (state: RootState) => state.favotireProjects.projects
      );
      console.log('renders')
   
  return (
    <FPDContainer>
        <FPDWelcome>
            <FPDWelcomeLeft>
                <Typography variant='h6'>Welcome back, James</Typography>
                <Typography variant='body1'>in Marketing You have 14 task to accomplish and 10 reviews left in your current iteration.</Typography>
            </FPDWelcomeLeft>
            <FPDWelcomeRight>
                <FPDWelcomeImg src={welcomeImage} alt="" />
            </FPDWelcomeRight>

        </FPDWelcome>
        <Typography variant='subtitle1'  > Favorite Projects</Typography>
        <FavProjects>
            {favoriteProjects?.map(item=>{
              return ( 
              <FavProject key={item.id} sx={{borderRadius:16}} onClick={()=>dispatch(addCurrentProject(item))} >
                    <FavProjectTop sx={{background:item.color}} >{item.sym}</FavProjectTop>
                    <Typography variant='body2'>{item.name}</Typography>

                </FavProject>)
            })}
            
        </FavProjects>


    </FPDContainer>
  )
}

export default FavoriteProjectDashboard