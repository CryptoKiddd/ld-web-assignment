
import {useState} from 'react'

import { Box,  Typography, Button, ButtonGroup } from "@mui/material"
import { styled } from '@mui/material/styles';

import settings2 from '../Assets/Icons/settings2.png'
import Header from "../Components/Header";
import UserList from '../Components/UserList';
import UserInfo from '../Components/UserInfo';

const InfoConainter = styled(Box)({
    display:'flex',
    flexDirection:'column',
    gap:50,
    width:'100%'
})
const InfoSettingsIcon = styled('img')({
    width:20,
    height:20
})

const InfoWrapper = styled(Box)({
    display:'flex',
        width:'100%'
})
const InfoWrapperLeft = styled(Box)({
    display:'flex',
    flexDirection:'column',
   gap:20,
    borderRight:"2px solid #F4F6FC",
    width:200,
    height:"100%",
    alignItems:'left'
    
})
const InfoLeftHeader = styled(Box)({
    display:'flex',
    alignItems:'center',
    gap:10
})
const InfoWrapperRight = styled(Box)({
    display:'flex',
    gap:50,
})


const Info = () => {
    const [info, setInfo] = useState(true)
  return (
    <InfoConainter>
        <Header title="Space Settings" />
        <InfoWrapper>
            <InfoWrapperLeft>
                <InfoLeftHeader>
                <InfoSettingsIcon src={settings2} />
                <Typography variant="subtitle1">Settings</Typography>

                </InfoLeftHeader>
                    <Button onClick={()=>setInfo(true)}  variant="text">Info</Button>
                    <Button onClick={()=>setInfo(false)}   variant="text">Members</Button>
    
            </InfoWrapperLeft>
            <InfoWrapperRight>
              {!info?<UserList />:<UserInfo />}  
                
            </InfoWrapperRight>
            
        </InfoWrapper>

    </InfoConainter>
  )
}

export default Info