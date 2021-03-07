import React from "react";
import MuiThemeProvider from "@material-ui/styles/ThemeProvider/ThemeProvider";
import HeaderComponent from "./components/header/HeaderComponent";

export default function App() {
  return (
    <MuiThemeProvider>
      <div className="app">
        <div className="section header-section">
          <div className="section-container header-component">
            <HeaderComponent />
          </div>
        </div>
      </div>
    </MuiThemeProvider>
  );
}
