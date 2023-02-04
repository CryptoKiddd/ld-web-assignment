import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../Types/types";


type userInitialState = {
    user:IUser | undefined
    users:IUser[] | undefined
}
const initialState:userInitialState = {
    user:   {
        "id": 1,
        "name": "Armaz Avaliani",
        "username":"CryptoKidd",
        "isActive": true,
        "email": "avaliani1232@gmail.com",
        "owner": true,
        "img": "https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"
      },
    users:[]

}

export const userSlice = createSlice({
    name:'users',
    initialState,
    reducers:{
        logUser: (state, action:PayloadAction<IUser>)=>{
            state.user = action.payload
        },
        logOutUser:(state)=>{
            state.user = undefined

        },
        setUsers:(state, action:PayloadAction<IUser[] | undefined>)=>{
           action.payload && state.users?.push(...action.payload)

        },
        setUser:(state, action:PayloadAction<IUser>)=>{
           state.user = action.payload

        },

    }


})

export default userSlice.reducer
export const { logUser,logOutUser,setUsers,setUser } = userSlice.actions