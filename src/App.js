import React from "react";
import MuiThemeProvider from "@material-ui/styles/ThemeProvider/ThemeProvider";
import HeaderComponent from "./components/header/HeaderComponent";

export default function App() {
  return (
    <MuiThemeProvider>
      <div className="root">
        <div className="section header-section">
          <div className="section-container header-component">
            <HeaderComponent></HeaderComponent>
          </div>
        </div>
      </div>
    </MuiThemeProvider>
  );
}
