import React from "react";
import InfoCard from "./InfoCard ";
import { Grid, Avatar, styled } from "@mui/material";

const CardsRow = () => {
  const cardsData = [
    {
      img: () => (
        <Avatar
          src="path_to_some_image.jpg"
          sx={{ width: 30, height: 30, mb: 0.5 }}
        />
      ),
      title: "Big impact on saving on electricity",
      text: "Dim the light in the lobby from 2 am up to 6 pm when the sunlight is greatest",
      description:
        "The percentage of optimization result for your account increases, bringing you closer to changing your building's energy class.",
      actionText: "Apply Changes",
      percentage: "+25%",
      onActionClick: () => console.log("Changes Applied"),
    },
    {
      img: () => (
        <Avatar
          src="path_to_another_image.jpg"
          sx={{ width: 30, height: 30, mb: 0.5 }}
        />
      ),
      title: "Big impact on saving on electricity",
      text: "Dim the light in the lobby from 2 am up to 6 pm when the sunlight is greatest",
      description:
        "The percentage of optimization result for your account increases, bringing you closer to changing your building's energy class.",
      actionText: "Apply Changes",
      percentage: "+25%",
      onActionClick: () => console.log("Changes Applied"),
    },
    {
      img: () => (
        <Avatar
          src="path_to_some_image.jpg"
          sx={{ width: 30, height: 30, mb: 0.5 }}
        />
      ),
      title: "Big impact on saving on electricity",
      text: "Dim the light in the lobby from 2 am up to 6 pm when the sunlight is greatest",
      description:
        "The percentage of optimization result for your account increases, bringing you closer to changing your building's energy class.",
      actionText: "Apply Changes",
      percentage: "+25%",
      onActionClick: () => console.log("Changes Applied"),
    },
    {
      img: () => (
        <Avatar
          src="path_to_another_image.jpg"
          sx={{ width: 30, height: 30, mb: 0.5 }}
        />
      ),
      title: "Big impact on saving on electricity",
      text: "Dim the light in the lobby from 2 am up to 6 pm when the sunlight is greatest",
      description:
        "The percentage of optimization result for your account increases, bringing you closer to changing your building's energy class.",
      actionText: "Apply Changes",
      percentage: "+25%",
      onActionClick: () => console.log("Changes Applied"),
    },
    {
      img: () => (
        <Avatar
          src="path_to_some_image.jpg"
          sx={{ width: 30, height: 30, mb: 0.5 }}
        />
      ),
      title: "Big impact on saving on electricity",
      text: "Dim the light in the lobby from 2 am up to 6 pm when the sunlight is greatest",
      description:
        "The percentage of optimization result for your account increases, bringing you closer to changing your building's energy class.",
      actionText: "Apply Changes",
      percentage: "+25%",
      onActionClick: () => console.log("Changes Applied"),
    },
    {
      img: () => (
        <Avatar
          src="path_to_another_image.jpg"
          sx={{ width: 30, height: 30, mb: 0.5 }}
        />
      ),
      title: "Big impact on saving on electricity",
      text: "Dim the light in the lobby from 2 am up to 6 pm when the sunlight is greatest",
      description:
        "The percentage of optimization result for your account increases, bringing you closer to changing your building's energy class.",
      actionText: "Apply Changes",
      percentage: "+25%",
      onActionClick: () => console.log("Changes Applied"),
    },
    {
      img: () => (
        <Avatar
          src="path_to_some_image.jpg"
          sx={{ width: 30, height: 30, mb: 0.5 }}
        />
      ),
      title: "Big impact on saving on electricity",
      text: "Dim the light in the lobby from 2 am up to 6 pm when the sunlight is greatest",
      description:
        "The percentage of optimization result for your account increases, bringing you closer to changing your building's energy class.",
      actionText: "Apply Changes",
      percentage: "+25%",
      onActionClick: () => console.log("Changes Applied"),
    },
    {
      img: () => (
        <Avatar
          src="path_to_another_image.jpg"
          sx={{ width: 30, height: 30, mb: 0.5 }}
        />
      ),
      title: "Big impact on saving on electricity",
      text: "Dim the light in the lobby from 2 am up to 6 pm when the sunlight is greatest",
      description:
        "The percentage of optimization result for your account increases, bringing you closer to changing your building's energy class.",
      actionText: "Apply Changes",
      percentage: "+25%",
      onActionClick: () => console.log("Changes Applied"),
    },
  ];

  return (
    <Container container spacing={2} justifyContent="center">
      {cardsData.map((card, index) => (
        <Grid item xs={12} sm={6} key={index}>
          <InfoCard {...card} />
        </Grid>
      ))}
    </Container>
  );
};
const Container = styled(Grid)({
  overflow: "auto",
  height: "50vh",
  scrollbarWidth: "thin",
  "&::-webkit-scrollbar": { width: "8px", display: "none" },
  "&::-webkit-scrollbar-track": { background: "#f1f1f1" },
  "&::-webkit-scrollbar-thumb": { background: "#888", borderRadius: "8px" },
  "&::-webkit-scrollbar-thumb:hover": { background: "#555" },
});
export default CardsRow;
