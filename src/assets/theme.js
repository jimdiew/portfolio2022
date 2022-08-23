import { createTheme } from "@mui/material";
import { purple } from "@mui/material/colors";

const primaryColorContact = "#FFFFFF";
const secondaryColorContact = "#56AD50";
const secondaryColorMenu = "#A1672B";
const theme = createTheme({
  palette: {
    primary: {
      main: primaryColorContact,
      secondary: secondaryColorContact,
    },
    menu: {
      main: secondaryColorMenu,
    },
  },
});

export default theme;
