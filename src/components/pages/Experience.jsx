import { Grid } from "@mui/material";
import TimeLine from "../organisms/TimeLine";

export default function Experience() {
  return (
    <Grid
      container
      xs={12}
      spacing={2}
      sx={{
        margin: 0,
        background: "linear-gradient(135deg, #c3cfe2 0%, #f5f7fa 100%)",
        minHeight: "100vh",
      }}
      direction="column"
    >
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <TimeLine />
      </Grid>
    </Grid>
  );
}