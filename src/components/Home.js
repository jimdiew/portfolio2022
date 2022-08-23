import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import "../assets/css/index.css";
import BlobHome from "../assets/statics/blob-home.svg";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${BlobHome})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "50% 50%",
      }}
    >
      <Container>
        <Grid sx={{ paddingTop: "20%", paddingBottom: "25%" }}>
          <Typography variant="h1" color="primary.secondary" align="center">
            Hi!
          </Typography>
          <Typography variant="h2" color="main" align="center">
            {" "}
            I'm a front end developer
          </Typography>
        </Grid>
      </Container>
    </div>
  );
}
