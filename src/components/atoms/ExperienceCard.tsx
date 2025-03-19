import React from "react";
import { ExperienceItem } from "../../types/experience";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { renderExperienceDescription } from "../../helpers/general";
import { useTheme } from '@mui/material/styles';

interface ExperienceCardProps {
  experience: ExperienceItem;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const { companyName, title, startDate, endDate, bullets } = experience;
  const years = `${startDate.toLocaleString("default", { month: "long" })} ${startDate.getFullYear()} - ${
    endDate ? `${endDate.toLocaleString("default", { month: "long" })} ${endDate.getFullYear()}` : "Current"
  }`;

  const theme = useTheme();

  return (
    <Card
      sx={{
        backgroundColor: theme.palette.quaternary.main, // Use quaternary for card background
        color: theme.palette.quaternary.contrastText, // Use contrast text
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
        transition: "transform 0.2s, box-shadow 0.2s",
        "&:hover": {
          transform: "scale(1.02)",
          boxShadow: "0px 6px 24px rgba(0, 0, 0, 0.3)",
        },
      }}
    >
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" sx={{ color: theme.palette.regularText.main, fontWeight: "300" }}>
            {companyName}
          </Typography>

          <Typography variant="h6" sx={{ color: theme.palette.regularText.main, fontWeight: "200" }} >
            {title}
          </Typography>
          <Typography gutterBottom sx={{ color: theme.palette.regularText.main, fontSize: 14 }}>
            {years}
          </Typography>
          <Typography
            gutterBottom
            variant="body1"
            sx={{
              fontSize: 14,
              whiteSpace: "pre-wrap",
              lineHeight: 2,
            }}
          >
            {renderExperienceDescription(experience)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}