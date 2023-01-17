//webpack index page to set of the bundling
//including anything in here that needs to be included in the final bundle
require("file-loader?name=[name].[ext]!./index.html");
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import "./App.scss";
import "bootstrap";

const appElement = document.getElementById("app");

ReactDOM.render(<App />, appElement);
