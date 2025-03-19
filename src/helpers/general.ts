import { ExperienceItem, BulletItem } from "../types/experience";

export const formatDateRange = (startDate: Date, endDate?: Date | null): string => {
  const formatDate = (date: Date) =>
    new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric" }).format(
      date
    );
    console.log('start date: ', startDate);
    console.log('end date: ', endDate);

  return `${formatDate(startDate)} - ${endDate ? formatDate(endDate) : "Current"}`;
};
export const renderBullets = (bullets: BulletItem[], indentLevel = 0): string => {
  return bullets
    .map((bullet) =>
      Object.entries(bullet)
        .map(([key, bulletPoints]) => {
          const indentSpaces = " ".repeat(indentLevel * 5);
          const formattedPoints = bulletPoints
            .map((point) => `${indentSpaces}• ${point}`)
            .join("\n"); 
          return formattedPoints;
        })
        .join("\n")
    )
    .join("\n");
};


export const renderExperienceDescription = (experience: ExperienceItem) => {
  return experience.bullets
    .map((bullet) => {
      const indent1Text = bullet.indent1
        ?.map((text) => `• ${text}`) // Add bullet point
        .join("\n") || "";

      const indent2Text = bullet.indent2
        ?.map((text) => `     ◦ ${text}`) // Add indentation and sub-bullet point
        .join("\n") || "";

      return `${indent1Text}${indent2Text ? `\n${indent2Text}` : ""}`;
    })
    .join("\n\n");
};