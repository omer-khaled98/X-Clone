import React from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Box,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailIcon from "@mui/icons-material/Mail";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PersonIcon from "@mui/icons-material/Person";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const XLogo = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" width="50" height="50">
    <g>
      <path
        fill="#ffffff"
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
      ></path>
    </g>
  </svg>
);

const Left = () => {
  const menuItems = [
    { icon: <HomeIcon />, text: "Home" },
    { icon: <SearchIcon />, text: "Explore" },
    { icon: <NotificationsIcon />, text: "Notifications" },
    { icon: <MailIcon />, text: "Messages" },
    { icon: <BookmarkIcon />, text: "Bookmarks" },
    { icon: <PersonIcon />, text: "Profile" },
    { icon: <MoreHorizIcon />, text: "More" },
  ];

  return (
    <>
      <Grid
        item
        xs={3}
        lg={2}
        sx={{
          height: "100vh",
          overflowY: "auto",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          maxWidth: 80,
          display: { xs: "none", sm: "block" },
          bgcolor: "#000000",
        }}
      >
        <Box sx={{ mb: 6, mt: 4, textAlign: "center" }}>
          <XLogo />
        </Box>
        <List>
          {menuItems.map((item, index) => (
            <ListItem button key={index} sx={{ color: "white", mb: 1 }}>
              <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{
                  color: "white",
                  display: { xs: "none", sm: "block" },
                }}
              />
            </ListItem>
          ))}
        </List>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            mt: 2,
            borderRadius: "9999px",
            width: "90%",
            mx: "auto",
            bgcolor: "#1da1f2",
            ":hover": {
              bgcolor: "#0d95e8",
            },
          }}
        >
          <Box sx={{ display: { xs: "block", sm: "none" } }}>+</Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>Tweet</Box>
        </Button>
      </Grid>

      <BottomNavigation
        showLabels
        sx={{
          width: "100%",
          position: "fixed",
          bottom: 0,
          left: 0,
          bgcolor: "#000000",
          display: { xs: "flex", sm: "none" },
        }}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Explore" icon={<SearchIcon />} />
        <BottomNavigationAction
          label="Notifications"
          icon={<NotificationsIcon />}
        />
        <BottomNavigationAction label="Messages" icon={<MailIcon />} />
        <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
      </BottomNavigation>
    </>
  );
};

export default Left;
