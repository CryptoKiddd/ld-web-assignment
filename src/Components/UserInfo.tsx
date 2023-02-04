import { Box, FormControl,FormLabel, OutlinedInput, Typography,MenuItem , Select, Button, Avatar } from "@mui/material";

import { RootState } from "../redux/store/store";
import { setUser } from "../redux/features/userSlice"; 
import { useSelector, useDispatch } from "react-redux";
import styled from "@emotion/styled"
import { MouseEventHandler } from "react";

const UserInfoWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap:40,
  padding:"0px 50px",
  borderLeft: "2px solid #F4F6FC"

});
const FormWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",

  gap:20

});
const UserInfoLabel = styled(FormLabel)({
  fontSize:12,
  color:"#ADB0B8",
  marginBottom:8,
  marginLeft:5
})
const UserInfoInput = styled(OutlinedInput)({
 width:800,
 height:32,
 color:'black'
 
});
const UserInfoSelect = styled(Select)({
 width:80,
 height:32,
 color:'grey'
 
});
const ButtonWrapper = styled(Box)({
  display:"flex",
  alignItems:"center",
  justifyContent:"space-between",

})
const SaveButton = styled(Button)({
  background:"#4C84FF"

})
const CancelButton = styled(Button)({
  background:"#FD5461!important",

})

const UserInfo = () => {
  const user = useSelector((state: RootState) => state.users.user);


 
 

  return (
    <UserInfoWrapper>
      <Typography variant='h5'>Info</Typography>
     <FormWrapper>
     <UserInfoLabel>Avatar</UserInfoLabel>
      <Avatar sx={{marginTop:'-20px'}} src={user?.img} />

      <FormControl>
        <UserInfoLabel>Full Name</UserInfoLabel>
        <UserInfoInput   placeholder={user?.name} />
      </FormControl>
      <FormControl>
        <UserInfoLabel>Username</UserInfoLabel>
        <UserInfoInput placeholder={user?.username} />
      </FormControl>
      <FormControl>
        <UserInfoLabel>Email</UserInfoLabel>
        <UserInfoInput placeholder={user?.email} />
      </FormControl>
      <Typography color="#ADB0B8" variant="subtitle2">PREFERENCES</Typography>
      <FormControl>
        <UserInfoLabel>Language</UserInfoLabel>
        
       <UserInfoSelect  >
        
        <MenuItem >Italian</MenuItem>
        <MenuItem>Georgian</MenuItem>
        <MenuItem>French</MenuItem>
       </UserInfoSelect>
      </FormControl>
   
     </FormWrapper>
     <ButtonWrapper>
      <CancelButton  variant="contained" >Cancel</CancelButton>
      <SaveButton variant="contained" >Save</SaveButton>

     </ButtonWrapper>

    </UserInfoWrapper>
  );
};

export default UserInfo;
