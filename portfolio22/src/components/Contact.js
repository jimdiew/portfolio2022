import React from "react";
import Container from "@mui/material/Container";
import { TextField, Button, Typography } from "@mui/material";

export default function Contact() {
  return (
    <Container>
      <Typography variant="h1" color="white" align="center">
        Contact
      </Typography>
      <TextField
        id="filled-basic"
        label="Name"
        variant="filled"
        sx={{ m: 3 }}
      />
      <TextField
        id="filled-basic"
        label="E-mail"
        variant="filled"
        sx={{ m: 3 }}
      />
      <TextField
        id="filled-textarea"
        label="Message"
        multiline
        variant="filled"
        sx={{ m: 3 }}
      />
      <Button variant="contained" color="primary" disableElevation>
        SEND
      </Button>
    </Container>
  );
}
