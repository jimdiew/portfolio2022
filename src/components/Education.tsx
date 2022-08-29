import React from "react";
import Container from "@mui/material/Container";
import { Grid, makeStyles, Typography } from "@mui/material";
import BlobEducation from "../assets/statics/blob-education.svg";
import Header from "../components/Header";

interface EducationProps {

}

const useStyles = makeStyles((theme) => ({
  educationContainer: {
    backgroundColor: '#fff'
  },
}));
const Education = (props: EducationProps) => {
  const {} = props
  const classes = useStyles(props);
  return (
    <>
    <Header isEducation={true}/>
    <div
    style={{
      backgroundImage: `url(${BlobEducation})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      backgroundPosition: "50% 50%",
    }}
  >
    <Container  mt={2} className={classes.educationContainer}>
      <Grid sx={{ paddingTop: "10%", paddingBottom: "10%" }}>
        <Typography variant="h2" className="play-font">
          Education
        </Typography>
        <Typography mt={4} ml={8} mr={3} className="paragraph" fontWeight={100}>
          <strong>2019 - 2021</strong> | Top Technician in Programming (TECLAB)
        </Typography>
        <Typography mt={2} ml={8} mr={3} className="paragraph" fontWeight={100}>
          <strong>2018</strong> | Professional Front End Developer (UTN)
        </Typography>
        <Typography mt={2} ml={8}  mr={3} className="paragraph" fontWeight={100}>
          <strong>2011 - 2013</strong> | Bachelor in Graphic Design (UADE){" "}
          <em>Not completed</em>
        </Typography>
      </Grid>
    </Container>
    </div>
    </>
  );
}
export default Education