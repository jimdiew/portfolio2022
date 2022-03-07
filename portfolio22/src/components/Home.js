import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

export default function Home() {
  return (
    <Container>
      <Box sx={{ color: "primary.main" }}>
        <Typography variant="h1" color="initial" align="center">
          Hi!
        </Typography>
        <Typography variant="body1" color="initial" align="center">
          {" "}
          I'm a front end developer
        </Typography>
      </Box>
    </Container>
  );
}
