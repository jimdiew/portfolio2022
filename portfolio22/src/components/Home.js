import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

export default function Home() {
  return (
    <Container>
      <Box>
        <Typography variant="h1" color="initial" align="center">
          Hi!
        </Typography>
        <Typography variant="body1" color="initial" align="center">
          {" "}
          I'm a front end developer
        </Typography>
        <h1 className="play-font">Hi!</h1>
        <p>I'm a front end developer</p>
      </Box>
    </Container>
  );
}
