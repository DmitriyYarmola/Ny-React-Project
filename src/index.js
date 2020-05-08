import React from "react";
import ReactDOM from "react-dom";
import './css/main.sass'
import "./index.css";
import './css/global.sass'
import './css/fonts.css'
import MainApp from "./App";
import Theme from "./components/Material Ui/theme";
import { ThemeProvider } from "@material-ui/core";

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <MainApp />
  </ThemeProvider>,

  document.getElementById("root")
);
