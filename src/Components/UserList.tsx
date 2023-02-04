 import { useAxios } from "../CustomHooks/useAxios"
import { IUser } from "../Types/types"
import {useDispatch} from 'react-redux'
import { setUsers } from "../redux/features/userSlice"
import { TableContainer, Table, TableHead, TableRow, TableBody, TableCell, Typography,Box, Avatar } from "@mui/material"
import styled from "@emotion/styled"

const UserList = () => {

    const UserListWrapper = styled(Box)({
        padding:"0px 50px",
        display:'flex',
        justifyContent:'center',
        flexDirection:'column',
        gap:30,
        width:'1200px'
      
    })
    const TableHeaderCell = styled(TableCell)({
        color:"rgba(49, 57, 78, 0.5)",
        fontWeight:600,

    })
    const OwnerCell = styled(TableCell)({
        borderRadius:100,
        textAlign:"center",
        color:"#29C293",
        background:"#BFEDDF",
        width:80,
        marginRight:50

    })
    const ActiveCell = styled(TableCell)({
        color:"#29C293"

    })
    const InActiveCell = styled(TableCell)({
        color:"#FD5461"

    })
    const AvatarCell = styled(TableCell)({
        width:20

    })
    const UserAvatar = styled(Avatar)({
        width:20,
        height:20
    })


    const [loading,data,error] = useAxios<IUser[]>({method:'GET', url:'http://localhost:3500/users'})



    const dispatch = useDispatch()
    dispatch(setUsers(data))


  return (
    <UserListWrapper>
        <Typography variant="h5">
            Users On Plan
        </Typography>
        
    <TableContainer component={Box}>
       <Table>
        <TableHead >
            <TableRow >
                <TableHeaderCell>Name</TableHeaderCell>
                <TableHeaderCell></TableHeaderCell>
                <TableHeaderCell></TableHeaderCell>
                <TableHeaderCell></TableHeaderCell>
                <TableHeaderCell>Email</TableHeaderCell>
                <TableHeaderCell>Status</TableHeaderCell>
                <TableHeaderCell></TableHeaderCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {
                data?.map(row=>{
                    return(
                        <TableRow key={row.id}>
                            <AvatarCell> <UserAvatar src={row.img} /></AvatarCell>
                           
                            <TableCell>{row.name}</TableCell>
                          
                            {row.owner? 
                                <OwnerCell>OWNER</OwnerCell>
                                :<TableCell></TableCell>}
                                <TableCell></TableCell>
                            <TableCell>{row.email}</TableCell>
                            {row.isActive?<ActiveCell>Active</ActiveCell>:<InActiveCell>Inactive</InActiveCell>}
                            <TableCell>...</TableCell>

                        </TableRow>
                    )
                })
            }
        </TableBody>
       </Table>
    </TableContainer>
    </UserListWrapper>
  )
}

export default UserList