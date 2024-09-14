import React from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Box,
  Grid,
  Button,
  TextField,
  Card,
  CardContent,
  Typography,
  Avatar,
  Tab,
  Tabs,
} from "@mui/material";
import {
  Image as ImageIcon,
  Gif as GifIcon,
  Poll as PollIcon,
  EmojiEmotions as EmojiEmotionsIcon,
  Schedule as ScheduleIcon,
  LocationOn as LocationOnIcon,
} from "@mui/icons-material";
import Post from "../components/Post";
import Left from "../components/Sidebar";
import Right from "../components/RightPanel";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#000000",
      paper: "#16181c",
    },
    text: {
      primary: "#ffffff",
      secondary: "#8899a6",
    },
    primary: {
      main: "#1DA1F2",
    },
  },
});

const TabsHeader = () => (
  <Box
    sx={{
      borderBottom: "1px solid #2F3336",
      position: "sticky",
      top: 0,
      zIndex: 10,
      backgroundColor: darkTheme.palette.background.paper,
      padding: "0 16px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Tabs value={0} centered>
      <Tab label="For You" sx={{ width: "50%" }} />
      <Tab label="Following" sx={{ width: "50%" }} />
    </Tabs>
  </Box>
);

const PostInput = () => (
  <Box sx={{ p: 2 }}>
    <Grid container spacing={2}>
      <Grid item>
        <Avatar>M</Avatar>
      </Grid>
      <Grid item xs>
        <TextField
          fullWidth
          placeholder="What is happening?!"
          variant="standard"
          InputProps={{ disableUnderline: true }}
          sx={{ bgcolor: "#202327", borderRadius: "9999px" }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 2,
          }}
        >
          <Box>
            {[
              ImageIcon,
              GifIcon,
              PollIcon,
              EmojiEmotionsIcon,
              ScheduleIcon,
              LocationOnIcon,
            ].map((Icon, index) => (
              <Icon key={index} color="primary" sx={{ mr: 1 }} />
            ))}
          </Box>
          <Button
            variant="contained"
            color="primary"
            sx={{ borderRadius: "9999px" }}
          >
            Post
          </Button>
        </Box>
      </Grid>
    </Grid>
  </Box>
);

const ProfileSetupCard = () => (
  <Card
    sx={{ mb: 2, bgcolor: "background.default", border: "1px solid #2F3336" }}
  >
    <CardContent>
      <Typography variant="h6">Set up your profile</Typography>
      <Typography variant="body2" color="textSecondary">
        Your profile is how people will know who you are on X.
      </Typography>
      <Button
        variant="outlined"
        color="primary"
        sx={{ mt: 2, borderRadius: "9999px" }}
      >
        Get started
      </Button>
    </CardContent>
  </Card>
);

const Home = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ display: "flex", height: "100vh", overflow: "auto" }}>
        <Grid container>
          {/* Left Sidebar */}
          <Grid
            item
            xs={12}
            sm={3}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <Left />
          </Grid>

          {/* Main Content Area */}
          <Grid
            item
            xs={12}
            sm={9}
            md={8}
            lg={6}
            sx={{
              borderLeft: { sm: "1px solid #2F3336", xs: "none" },
              borderRight: { sm: "1px solid #2F3336", xs: "none" },
              display: "flex",
              flexDirection: "column",
            }}
          >
            <TabsHeader />
            <PostInput />
            <Box sx={{ p: 2 }}>
              <ProfileSetupCard />
              <Post
                author={{
                  name: "Lionil Messi",
                  avatar:
                    "https://c4.wallpaperflare.com/wallpaper/297/678/332/lionel-messi-soccer-photoshop-effects-wallpaper-preview.jpg",
                }}
                username="@messi"
                content="Try playing ground"
                image="/wp3069160-xbox-one-s-wallpapers.jpg"
              />
              <Post
                author={{
                  name: "Cristiano Ronaldo",
                  avatar:
                    "https://c4.wallpaperflare.com/wallpaper/1019/822/355/cristiano-ronaldo-black-and-white-wallpaper-preview.jpg",
                }}
                username="@CR7"
                content="Start your duty"
                image="/wp3069160-xbox-one-s-wallpapers.jpg"
              />
            </Box>
          </Grid>

          {/* Right Sidebar */}
          <Grid
            item
            xs={12}
            sm={3}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <Right />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default Home;
