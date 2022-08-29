import React from "react";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import "../assets/css/index.css";
import BlobHome from "../assets/statics/blob-home.svg";
import Header from "../components/Header.tsx";

interface HomeProps {
  isHome?: any,
}

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    backgroundColor: '#00F5D4'
  },
}));

const Home = (props: HomeProps) => {
  const {isHome} = props
  const classes = useStyles(props);

  return (
    <div className={classes.homeContainer}>
    <Header />
    <div
      style={{
        backgroundImage: `url(${BlobHome})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "50% 50%",
      }}
      className={classes.homeContainer}
    >
      <Grid>
        <Grid sx={{ paddingTop: "20%", paddingBottom: "25%" }}>
          <Typography className="play-font" variant="h1" color="primary.secondary" align="center">
            Hi!
          </Typography>
          <Typography variant="h3" color="main" align="center">
            {" "}
            I'm a front end developer
          </Typography>
        </Grid>
      </Grid>
    </div>
    </div>
  );
}
export default Home