import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Objectives from "../../Components/Objectives/Objectives";
import ObjectivesPageHeader from "../../Components/ObjectivesPageHeader/ObjectivesPageHeader";
import { IObjective } from "../../Types/types";
import "./ObjectivesPage.css";

import ObjectiveNotificationCenter from "../../Components/ObjectiveNotificationCenter/ObjectiveNotificationCenter";
import { useAxios } from "../../hooks/useAxios";

const ObjectivesPage = () => {

  const [loading, data, error] = useAxios<IObjective[]>({method:"GET", url:' http://localhost:3500/objectives'})
  const [currentObjective, setCurrentObjective] = useState<IObjective | undefined>( );

  return (
    <>{loading? <h1>Loading</h1>:<Grid container gap={6}>
    <ObjectivesPageHeader />

    <Grid
      item
      justifyContent='space-between'
      display='flex'
      container
      height='370px'
    
     
      xs={6} 
      alignItems="center"
      md={currentObjective ? 8 : 12}
    >
      <Objectives
        objectives={data}
        setCurrentObjective={setCurrentObjective}
      />
    </Grid>
    {currentObjective && 
    <Grid item >
      <ObjectiveNotificationCenter currentObjective={currentObjective}  setCurrentObjective={setCurrentObjective} />


    </Grid>}
  </Grid>}
    
    </>
    
    )
    
};

export default ObjectivesPage;
