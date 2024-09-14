import React from "react";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { Avatar, Grid, Typography, Box } from "@mui/material";

const TweetCard = () => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Box
        sx={{
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          padding: "16px",
          display: "flex",
          alignItems: "center",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.15)",
          },
        }}
      >
        <Avatar
          src="../../public/wp3069160-xbox-one-s-wallpapers.jpg"
          alt="Developer Avatar"
          sx={{
            width: 100,
            height: 100,
            mr: 2,
            border: "3px solid #f0f0f0",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
          }}
        />
        <Box>
          <Typography variant="h6" sx={{ color: "#333333", fontWeight: "600" }}>
            Mohamed Hassan
          </Typography>
          <Typography sx={{ color: "#555555" }}>
            Full-Stack Web Developer
          </Typography>
          <Box sx={{ mt: 1 }}>
            <LinkedIn sx={{ mr: 1, color: "#0077b5", fontSize: 28 }} />{" "}
            {/* Changed icon color */}
            <GitHub sx={{ color: "#333333", fontSize: 28 }} />{" "}
            {/* Changed icon color */}
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default TweetCard;
