import  { configureStore } from "@reduxjs/toolkit"
import favoriteProjectsSlice from "../features/favoriteProjectsSlice"
import userSlice from "../features/userSlice"
import objectivesSlice from "../features/userSlice"



export const store = configureStore({
    reducer:{
        favotireProjects:favoriteProjectsSlice,
        users:userSlice,
        objectives:objectivesSlice,

    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
    
      serializableCheck: false,
    }),
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch  = typeof store.dispatch