import "../../assets/css/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home.tsx";
import Overlay from "../Overlay";
import Education from "../Education.tsx";
import Contact from "../Contact";
import Layout from "../Layout";
import { ThemeProvider } from "@mui/material";
import theme from "../../assets/theme.js";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact element={<Home />} path="/"></Route>
            <Route exact element={<Education />} path="/education"></Route>
            <Route exact element={<Contact />} path="contact/"></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
