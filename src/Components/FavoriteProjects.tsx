

import { Grid } from "@mui/material";
import Header from "./Header";
import CureentFavoriteProject from "./CureentFavoriteProject";
import FavoriteProjectDashboard from "./FavoriteProjectDashboard";


const FavoriteProjects = () => {
  

  console.log('render main')


  return (
    <Grid container>
      <Grid item md={12} >
      <Header title='Dashboard' />
      </Grid>
      <Grid item md={7} >
      <FavoriteProjectDashboard />
      </Grid>
      <Grid item md={5} >
       <CureentFavoriteProject />
      </Grid>
      
      

    </Grid>

  )
};

export default FavoriteProjects;
