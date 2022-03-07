import { createTheme } from "@mui/material";
import { purple } from "@mui/material/colors";

const secondaryColorContact = purple[500];
const theme = createTheme({
  palette: {
    primary: {
      main: secondaryColorContact,
    },
  },
});

export default theme;
