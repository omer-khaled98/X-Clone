import React from "react";
import {
  Box,
  Grid,
  Avatar,
  Typography,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import ShareIcon from "@mui/icons-material/Share";

const ActionButton = React.memo(({ IconComponent, ariaLabel }) => (
  <IconButton sx={{ color: "#6e767d" }} size="small" aria-label={ariaLabel}>
    <IconComponent />
  </IconButton>
));

function Post({ author, username, content, image }) {
  return (
    <Card
      sx={{
        mb: 2,
        bgcolor: "background.default",
        border: "1px solid #2F3336",
        borderRadius: "12px",
      }}
    >
      <CardContent>
        <Grid container spacing={2}>
          {/* Avatar Section */}
          <Grid item>
            <Avatar
              src={author.avatar}
              alt={`${author.name}'s avatar`}
              sx={{ width: 48, height: 48 }}
            >
              {author.name[0]}
            </Avatar>
          </Grid>

          {/* Post Content Section */}
          <Grid item xs>
            <Typography
              variant="h6"
              sx={{ fontSize: "1rem", fontWeight: "bold" }}
            >
              {author.name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              @{username}
            </Typography>

            <Typography variant="body1" sx={{ mt: 1 }}>
              {content}
            </Typography>

            {/* Conditional Rendering for Image */}
            {image && (
              <Box
                component="img"
                src={image}
                alt="Post content"
                sx={{
                  width: "100%",
                  mt: 2,
                  borderRadius: "12px",
                  objectFit: "cover",
                }}
              />
            )}

            {/* Post Actions */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 2,
                borderTop: "1px solid #2F3336",
                pt: 1,
                color: "#6e767d",
              }}
            >
              <ActionButton
                IconComponent={ChatBubbleOutlineIcon}
                ariaLabel="Comment"
              />
              <ActionButton IconComponent={RepeatIcon} ariaLabel="Retweet" />
              <ActionButton IconComponent={FavoriteIcon} ariaLabel="Like" />
              <ActionButton IconComponent={ShareIcon} ariaLabel="Share" />
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default React.memo(Post);
