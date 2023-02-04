import { Box, Icon, Typography } from "@mui/material"
import { styled } from '@mui/material/styles';
import bell from "../Assets/Icons/Bell.png"
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store/store";
import { useAxios } from "../CustomHooks/useAxios";
import { setFavoriteProjects} from "../redux/features/favoriteProjectsSlice";
import { IProject } from "../Types/types";


const HeaderBox = styled(Box)({
    borderBottom:"0.5px solid rgba(0, 0, 0, 0.1);",
    padding:"25px 50px",
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between'
})
const HeaderIconsWrapper = styled(Box)({
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    gap:20
})
const HeaderIcon = styled('img')({
    width:20,
    height:20,
})
const AddIcon = styled('span')({
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    width:20,
    height:20,
    background:"#4C84FF",
    color:"white",
    padding:"8.5px",
    fontSize:24,
    borderRadius:6,
    fontWeight:700,
  
})


type HeaderPropType ={
    title:string
}
const Header = ({ title }:HeaderPropType ) => {
    const [loading, data, error] = useAxios<IProject[]>({
        method: "GET",
        url: " http://localhost:3500/projects",
      });
      const dispatch = useDispatch();
      console.log(data)
     
  return (
    <HeaderBox>
        <Typography variant="h5"> {title}</Typography>
        <HeaderIconsWrapper>
            <HeaderIcon src={bell} alt=""  />
            <AddIcon onClick={()=> dispatch(setFavoriteProjects(data))}>+</AddIcon>
        </HeaderIconsWrapper>
        

    </HeaderBox>
  )
}

export default Header