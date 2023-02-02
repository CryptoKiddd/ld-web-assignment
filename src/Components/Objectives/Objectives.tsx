import { Grid, Avatar, AvatarGroup } from "@mui/material";
import { IObjective } from "../../Types/types";
type ObjectiveProps = {
  objectives: IObjective[] | undefined;
  setCurrentObjective: React.Dispatch<React.SetStateAction<IObjective | undefined>>;
};

const Objectives = ({ objectives, setCurrentObjective }: ObjectiveProps) => {
  return (
    <>
      {objectives?.map((obj) => {
        return (
          <Grid container onClick={() => setCurrentObjective(obj)}
          display='flex'
          borderRight='1px solid grey' 
            gap={5.5}
            alignItems='center'
            textAlign='center'
            xs={12}
            md={12}
            paddingX={2}
            height={60}
            bgcolor={obj.status==='Done'?'#CEF2D8':''}>
            <Grid textAlign='left'  md={5} item >
              {obj.name}{" "}
            </Grid>
            <Grid
             md={1.6}
             display='flex'
             alignItems='center'
             justifyContent='center'
             height='70%'
             borderRadius='6px'
             color={obj.status==="Done"?'black':'whitesmoke'}
              bgcolor={
                obj.status === "Done"
                  ? ""
                  : obj.priority === "high"
                  ? "#FD5461"
                  : obj.priority === "low"
                  ? "#29C293"
                  : obj.priority==='urgent'?
                  "#DB54FD": "#FFAB2A"
              }
             
            >
              {obj.priority.toUpperCase()}
            </Grid>
            <Grid
            item
            display='flex'
            alignItems='center'
            justifyContent='center'  
            height='70%'
              md={1.1}
              borderRadius='6px'
              bgcolor={obj.status==='Done'?'':'#D6D7DC'}
              color={obj.status==='Done'?'black':'white'}
            >
              {obj.status}
            </Grid>
            <Grid container md={0.1}>
              <AvatarGroup>
                {obj.assignees.map((item) => (
                  <Avatar
                    sx={{ width: 24, height: 24 }}
                    alt="Cindy Baker"
                    src={item.img}
                  />
                ))}
              </AvatarGroup>
            </Grid>

            <Grid item md={1}>
              {obj.dueDate}
            </Grid>
            <Grid item md={0.2}>
             10/{obj.checkmarks}
            </Grid>
          </Grid>
        );
      })}
    </>
  );
};

export default Objectives;
