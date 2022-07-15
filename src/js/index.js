//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include your index.scss file into the bundle
import "/src/styles/index.css";

//import your own components
import Layout from "/src/js/layout.js";

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
