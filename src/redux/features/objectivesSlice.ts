import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IObjective } from "../../Types/types";
type  objectivesInitialState ={
    objectives: IObjective[] |undefined
    currentObjective: IObjective | undefined
}

const initialState:objectivesInitialState = {
    objectives:undefined,
    currentObjective:undefined
}




const objectivesSlice = createSlice({
    name:"objectives",
    initialState,
    reducers:{
        setObjectives:(state, action:PayloadAction<IObjective[] |undefined>)=>{
            state.objectives = action.payload

        },
        addCurrentObjective:(state, action:PayloadAction<IObjective |undefined>)=>{
            state.currentObjective = action.payload


        }

    }
})
export default objectivesSlice.reducer
export const {setObjectives,addCurrentObjective} = objectivesSlice.actions