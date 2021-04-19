import React from "react";
import MuiThemeProvider from "@material-ui/styles/ThemeProvider/ThemeProvider";
import { createMuiTheme } from "@material-ui/core/styles";
import Header from "./components/header/Header";
import Introduction from "./components/introduction/Introduction";
import WorkExperience from "./components/experience/WorkExperience";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
import "./App.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#a1fff2",
      main: "#6dd8bf",
      dark: "#36a68f",
      contrastText: "black",
    },
    secondary: {
      light: "#d570ff",
      main: "#a03ed8",
      dark: "#6c00a6",
      contrastText: "#717574",
    },
  },
});

export default function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="app">
        <div className="section header-section" id="TOP">
          <div className="section-container header-component">
            <Header />
          </div>
        </div>
        <div className="section tinted" id="INTRO">
          <div className="section-container">
            <Introduction />
          </div>
        </div>
        <div className="section tinted2" id="CV">
          <div className="section-container">
            <WorkExperience />
          </div>
        </div>
        <div className="section header-section" id="PROJECTS">
          <Projects />
        </div>
        <div className="section tinted2" id="FOOTER">
          <div className="section-container">
            <Footer />
          </div>
        </div>
      </div>
    </MuiThemeProvider>
  );
}
