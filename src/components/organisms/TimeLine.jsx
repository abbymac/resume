import { Grid, Typography, useTheme } from "@mui/material";
import { experienceList } from "../../constants/Experience";
import ExperienceCard from "../atoms/ExperienceCard";

export default function TimeLine() {
  const theme = useTheme();

  return (
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="center"
      justifyContent="start"
      xs={12}
      md={6}
      sx={{paddingTop: '20px'}}
    >
      <Typography variant="h1" item sx={{ fontWeight: '100', alignSelf: 'start', color: theme.palette.primary.main }}>
        Experience
      </Typography>
      {experienceList.map((experience, index) => (
        <Grid item key={index} width={"100%"} sx={{paddingLeft: '0 !important', paddingRight: '0 !important'}} >
          <ExperienceCard experience={experience} />
        </Grid>
      ))}
    </Grid>
  );
};
