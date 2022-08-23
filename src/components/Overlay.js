import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Grid, Typography } from "@mui/material";

export default function components() {
  //  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Grid container sx={{ justifyContent: "center", color: "menu.main" }}>
        <Grid item>
          <Typography align="right" variant="h3">
            Home
          </Typography>
          <Typography align="right" variant="h3">
            Education
          </Typography>
          <Typography align="right" variant="h3">
            Contact
          </Typography>
          <GitHubIcon></GitHubIcon>
        </Grid>
      </Grid>
    </div>
  );
}
