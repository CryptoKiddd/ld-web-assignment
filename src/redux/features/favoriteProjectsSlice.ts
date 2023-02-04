import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProject } from "../../Types/types";

type favoriteProjectsState ={
    projects:IProject[] | undefined
    currentProject:IProject | undefined
}

const initialState:favoriteProjectsState = {
    projects:[],
    currentProject:undefined

}


export const favoriteProjectsSlice = createSlice({
    name:'favorite projects',
    initialState,
    reducers:{
        addFavotireProject:( state, action:PayloadAction<IProject> )=>{
            state.projects?.push(action.payload)

        },
        setFavoriteProjects:( state, action:PayloadAction<IProject[] | undefined> )=>{
           action.payload && state?.projects?.push(...action?.payload)
           
        },
        addCurrentProject:(state,action:PayloadAction<IProject>)=>{
            state.currentProject = action.payload
            

        }
    }

})

export default favoriteProjectsSlice.reducer
export const {addFavotireProject,setFavoriteProjects}  = favoriteProjectsSlice.actions
