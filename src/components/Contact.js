import React from "react";
import Container from "@mui/material/Container";
import { TextField, Button, Typography, Grid } from "@mui/material";

export default function Contact() {
  return (
    <Container className="contact-container">
      <Typography className="play-font" variant="h2" color="white" align="left" sx={{ paddingTop: "10%", paddingBottom: "10%" }}>
        Contact
      </Typography>
      <Grid direction="column" align="left" ml={5} mr={5}>
        <Grid >
          <Typography>Name</Typography>
          <TextField fullWidth
            id="filled-basic"
            variant="filled"

          />
        </Grid>
        <Grid mt={2}>
          <Typography>Mail</Typography>
          <TextField
            id="filled-basic"
            variant="filled"
            fullWidth
          />
        </Grid>
        <Grid  mt={2}>
          <Typography>Message</Typography>
          <TextField
            id="filled-textarea"
            multiline
            variant="filled"
            fullWidth
          />
        </Grid>
       <Grid mt={2}> 
       <Button className="button" fullWidth variant="contained" color="primary" disableElevation>
          SEND
        </Button>
       </Grid>
      </Grid>
    </Container>
  );
}
