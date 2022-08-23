import { SvgIcon } from "@mui/material";
import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Grid } from "@mui/material";

export default function Footer() {
  return (
    <div>
      <Grid container justifyContent="right">
        <ArrowDownwardIcon sx={{ fontSize: 70, m: 1 }} />
      </Grid>
    </div>
  );
}
