import React from "react";
import {
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  Grid,
  TextField,
  Card,
  CardContent,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const InfoCard = React.memo(({ title, content, children }) => (
  <Card
    sx={{
      mb: 2,
    }}
  >
    <CardContent>
      <Typography variant="h6" gutterBottom sx={{ color: "#ffffff" }}>
        {title}
      </Typography>
      <Typography variant="body2" paragraph sx={{ color: "#ffffff" }}>
        {content}
      </Typography>
      {children}
    </CardContent>
  </Card>
));

const TrendingTopics = React.memo(() => {
  const topics = [
    { name: "#Technology", posts: "1,234 posts" },
    { name: "#Design", posts: "2,345 posts" },
    { name: "#Programming", posts: "5,678 posts" },
    { name: "#AI", posts: "987 posts" },
    { name: "#Innovation", posts: "654 posts" },
  ];

  return (
    <Card
      sx={{
        bgcolor: "#000000",
        border: "1px solid #2F3336",
        borderRadius: "12px",
      }}
    >
      <CardContent>
        <Typography variant="h6" gutterBottom sx={{ color: "#ffffff" }}>
          What's Happening
        </Typography>
        <List>
          {topics.map((topic, index) => (
            <ListItem key={index} sx={{ px: 0 }}>
              <ListItemText
                primary={topic.name}
                secondary={topic.posts}
                primaryTypographyProps={{ sx: { color: "#ffffff" } }}
                secondaryTypographyProps={{ sx: { color: "#6e767d" } }}
              />
            </ListItem>
          ))}
        </List>
        <Button color="primary" sx={{ mt: 1 }}>
          Show more
        </Button>
      </CardContent>
    </Card>
  );
});

const Right = () => {
  return (
    <Grid
      item
      xs={12}
      sm={4}
      md={3}
      lg={2}
      sx={{
        height: "100vh",
        overflowY: "auto",
        position: "fixed",
        top: 0,
        right: 0,
        width: { xs: "100%", sm: "30%", md: "25%", lg: "20%" },
        display: { xs: "none", md: "block" },
        bgcolor: "#0F1419",
        padding: 2,
      }}
    >
      {/* Search Bar */}
      <TextField
        fullWidth
        placeholder="Search"
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "#6e767d" }} />
            </InputAdornment>
          ),
        }}
        sx={{
          mb: 2,

          borderRadius: "9999px",
          color: "#ffffff",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#2F3336",
            },
            "&:hover fieldset": {
              borderColor: "#6e767d",
            },
          },
        }}
      />

      {/* Subscription Card */}
      <InfoCard
        title="Subscribe to Premium"
        content="Subscribe to unlock new features and if eligible, receive a share of ads revenue."
      >
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ borderRadius: "9999px" }}
        >
          Subscribe
        </Button>
      </InfoCard>

      {/* Trending Topics Card */}
      <TrendingTopics />
    </Grid>
  );
};

export default React.memo(Right);
