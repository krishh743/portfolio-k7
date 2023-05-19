import {Box, ThemeProvider} from "@mui/material";
import CustomTheme from "./mui-theme/CustomTheme";
import {Route, Routes, Link, useLocation} from "react-router-dom";
import "./App.css";
// import NavBar from "pages/navbar/NavBar";
import Footer from "pages/footer/Footer";
import Home from "pages/home/Home";
import About from "pages/about-page/About";
import ProjectPage from "pages/projects/ProjectPage";
import SkillsPage from "pages/skills-page/SkillsPage";
import ContactPage from "pages/contact-page/ContactPage";
import PageNotFound from "components/page-not-found/PageNotFound";
import {useEffect, useRef} from "react";
import Navbar from "pages/ṇavbar/NavBar";

function App() {
  const location = useLocation();

  useEffect(() => {
    const id = location.pathname.substring(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({behavior: "smooth"});
      window.scroll(0, element.offsetTop - 100);
    }
  }, [location]);

  return (
    <ThemeProvider theme={CustomTheme}>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projectpage">
        <ProjectPage />
      </div>
      <div id="skillpage">
        <SkillsPage />
      </div>
      <div id="contact">
        <ContactPage />
      </div>
      <Routes>
        <Route path="/home" />
        <Route path="/about"  />
        <Route path="/projectpage"  />
        <Route path="/skillpage" />
        <Route path="/contact"  />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
