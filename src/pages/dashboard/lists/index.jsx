import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Box, useScrollTrigger, Button, Grid } from "@mui/material";
import BuildingStatus from "./Components/BuildingStatus";
import FilterBar from "./Components/FilterBar";
import ListCard from "./Components/ListCard";
import dummyData from "./Components/dummyData";

const List = () => {
  const [isSticky, setIsSticky] = useState(false);
  const scrollContainerRef = useRef(null);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollTop = scrollContainerRef.current.scrollTop;
      setIsSticky(scrollTop > 100);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll, {
        passive: true,
      });

      return () => {
        scrollContainer.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <>
      <Box
        sx={{
          background: "rgb(239,241,245)",
          p: { lg: 2, xl: 4 },
          overflow: "hidden",
          width: "100%",
          opacity: 0,
          transform: "translateY(20px)",
          animation: "fadeInUp 2s ease forwards",
          "@keyframes fadeInUp": {
            "0%": {
              opacity: 0,
              transform: "translateY(20px)",
            },
            "100%": {
              opacity: 1,
              transform: "translateY(0)",
            },
          },
        }}
      >
        {!isSticky && (
          <Box>
            <BuildingStatus />
          </Box>
        )}
        <Box
          sx={{
            width: "100%",
            position: isSticky ? "sticky" : "relative",
            top: 0,
            zIndex: 1100,
            backgroundColor: "inherit",
            mt: isSticky ? { xs: "26px", lg: "6px" } : 0,
            mb: isSticky ? { xs: 0, lg: "10px" } : 0,
          }}
        >
          <FilterBar />
        </Box>
        <Box
          ref={scrollContainerRef}
          sx={{
            p: 0,
            marginTop: 1,
            overflowY: "auto",
            height: {
              xs: isSticky ? "80vh" : "50vh",
              sm: "55vh",
              md: "60vh",
              lg: isSticky ? "88vh" : "78vh",
            },
            width: "100%",
            "&::-webkit-scrollbar": { width: 8, borderRadius: "50%" },
            "&::-webkit-scrollbar-track": {
              background: "transparent",
              borderRadius: "50%",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "rgba(217, 217, 217, 1)",
              borderRadius: "50%",
              backgroundClip: "content-box",
            },
            "&::-webkit-scrollbar-thumb:hover": { background: "#007BFF" },
            "scrollbar-color": "rgba(217, 217, 217, 1) transparent",
            "scrollbar-width": "thin",
          }}
        >
          <Grid container spacing={2}>
            {dummyData.map((card, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <ListCard
                  imageUrl={card.imageUrl}
                  subtitle={card.subtitle}
                  status={card.status}
                  title={card.title}
                  tags={card.tags}
                  actionText={card.actionText}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default List;
