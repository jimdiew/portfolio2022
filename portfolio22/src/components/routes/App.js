import "../../assets/css/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home";
import Education from "../Education";
import Contact from "../Contact";
import Layout from "../Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact element={<Home />} path="/"></Route>
          <Route exact element={<Education />} path="/education"></Route>
          <Route exact element={<Contact />} path="contact/"></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
