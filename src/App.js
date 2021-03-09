import React from "react";
import MuiThemeProvider from "@material-ui/styles/ThemeProvider/ThemeProvider";
import { createMuiTheme } from "@material-ui/core/styles";
import HeaderComponent from "./components/header/HeaderComponent";
import Introduction from "./components/introduction/Introduction";
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
        <div className="section header-section">
          <div className="section-container header-component">
            <HeaderComponent />
          </div>
        </div>
        <div className="section tinted">
          <div className="section-container">
            <Introduction />
          </div>
        </div>
      </div>
    </MuiThemeProvider>
  );
}
