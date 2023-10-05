import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block " } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>

        <AvatarGroup max={7}>
          <Avatar
            alt="Remy Sharp"
            src="https://media.istockphoto.com/id/1411818808/photo/portrait-shot-of-smiling-young-businessman-at-office-looking-at-camera-concept-successful.jpg?s=612x612&w=0&k=20&c=PCRJgpDVUNZvuqUCU7kc65BfBD9X9y15oGB2k0ua5Gc="
          />
          <Avatar
            alt="Travis Howard"
            src="https://media.istockphoto.com/id/1405522719/photo/man-sitting-indoor-looks-at-camera-participate-in-live-videoconference.jpg?s=612x612&w=0&k=20&c=zTUVs3C45_EOOzUJ4QC0IVKSE9Dmlc1A_aUWvE2th10="
          />
          <Avatar
            alt="Cindy Baker"
            src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.webp?b=1&s=170667a&w=0&k=20&c=FycdXoKn5StpYCKJ7PdkyJo9G5wfNgmSLBWk3dI35Zw="
          />
          <Avatar
            alt="Agnes Walker"
            src="https://media.istockphoto.com/id/1406197730/photo/portrait-of-a-young-handsome-indian-man.webp?b=1&s=170667a&w=0&k=20&c=KtmKHyOE6MJV0w2DiGX8P4399KHNbZ3p8lCjTEabGcY="
          />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar
            alt="Trevor Henderson"
            src="https://media.istockphoto.com/id/1497142422/photo/close-up-photo-portrait-of-young-successful-entrepreneur-businessman-investor-wearing-glasses.jpg?s=2048x2048&w=is&k=20&c=NuYCD0wRpCdZcZBT6m-O8r9PcmwBKl2VnTMISYE_-Bw="
          />

          <Avatar
            alt="Remy Sharp"
            src="https://media.istockphoto.com/id/1411818808/photo/portrait-shot-of-smiling-young-businessman-at-office-looking-at-camera-concept-successful.jpg?s=612x612&w=0&k=20&c=PCRJgpDVUNZvuqUCU7kc65BfBD9X9y15oGB2k0ua5Gc="
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://media.istockphoto.com/id/1437820118/photo/black-programmer-working-on-pc-in-the-office.webp?b=1&s=170667a&w=0&k=20&c=DkMNKPBkwqu5AcsU18dXBYSdMXB9Bpo8TgmR5M-LPKg="
          />
        </AvatarGroup>

        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>

        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              alt=""
            />
          </ImageListItem>

          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
              alt=""
            />
          </ImageListItem>

          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
              alt=""
            />
          </ImageListItem>

          {/* <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c"
              alt=""
            />
          </ImageListItem>

          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1533827432537-70133748f5c8"
              alt=""
            />
          </ImageListItem>

          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62"
              alt=""
            />
          </ImageListItem>

          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6"
              alt=""
            />
          </ImageListItem>

          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1518756131217-31eb79b20e8f"
              alt=""
            />
          </ImageListItem>

          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1597645587822-e99fa5d45d25"
              alt=""
            />
          </ImageListItem> */}
        </ImageList>

        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Conversations
        </Typography>

        <List
          sx={{ width: "100%", maxWidth: "full", bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
