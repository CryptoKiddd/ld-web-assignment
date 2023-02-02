import highPrior from "../../Assets/Icons/high.png";
import lowPrior from "../../Assets/Icons/low.png";
import mediumPrior from "../../Assets/Icons/medium.png";
import urgentPrior from "../../Assets/Icons/urgent.png";
import folderIcon from "../../Assets/Icons/icon-f.png";
import { Typography, Grid, Avatar, Box } from "@mui/material";
import { IObjective } from "../../Types/types";


type ObjectiveNotificationCenterProps = {
  currentObjective: IObjective | undefined;
  setCurrentObjective: React.Dispatch<React.SetStateAction<IObjective | undefined>>;
};

const ObjectiveNotificationCenter = ({
  currentObjective,
  setCurrentObjective
}: ObjectiveNotificationCenterProps) => {
  return (
    <Grid container gap={2} direction="column" position='absolute' top='0'right='45px' md={2.9} py={1} px={3} zIndex='222'bgcolor='white' >
        <Grid height='49' borderBottom="2px solid #F4F6FC" mb='30px' item >
            <Typography onClick={()=>setCurrentObjective(undefined)} textAlign='right' variant="h6">X</Typography>

        </Grid>
      <Typography variant="h4">Notifications Center</Typography>
      <Typography marginLeft="8px" variant="caption">
        Description
      </Typography>
      <Typography marginLeft="8px" variant="caption" maxWidth="350px">
        {currentObjective?.desc}
      </Typography>
      <Typography variant="caption">Priority</Typography>
      <Typography
        mb="20px"
        marginLeft="8px"
        display="flex"
        alignItems="center"
        gap={1}
        variant="subtitle2"
      >
        <Avatar
          sx={{ width: 24, height: 24 }}
          src={
            currentObjective?.priority === "urgent"
              ? urgentPrior
              : currentObjective?.priority === "low"
              ? lowPrior
              : currentObjective?.priority === "high"
              ? highPrior
              : mediumPrior
          }
        />
        {currentObjective?.priority} Priority
      </Typography>
      <Typography
        display="flex"
        alignItems="center"
        gap={1}
        variant="subtitle2"
      >
        Subproject
      </Typography>
      <Typography
        mb="20px"
        marginLeft="8px"
        display="flex"
        alignItems="center"
        gap={1}
        variant="subtitle2"
      >
        <Avatar sx={{ width: 24, height: 24 }} src={folderIcon} />
        {currentObjective?.subProject}
      </Typography>
      <Typography>Asiggnees</Typography>
      <Box mb="20px" marginLeft="8px" display="flex" gap={2}>
        {currentObjective?.assignees.map((item) => {
          return (
            <Box
              bgcolor="rgba(0, 121, 255, 0.296258)"
              gap={1}
              borderRadius="6px"
              display="flex"
              alignItems="center"
              py={1}
              px={1}
              width="175px"
            >
              <Avatar sx={{ width: 20, height: 20 }} src={item.img} />
              <Typography variant="subtitle2">{item.name}</Typography>
            </Box>
          );
        })}
      </Box>
      <Typography variant="caption">Linked Projects</Typography>
      <Typography mb="20px" marginLeft="8px" variant="caption">
        {currentObjective?.linkedProjects}
      </Typography>
      <Typography variant="caption">Due Date</Typography>
      <Typography mb="20px" marginLeft="8px" variant="caption">
        {currentObjective?.dueDate}
      </Typography>
    </Grid>
  );
};

export default ObjectiveNotificationCenter;
