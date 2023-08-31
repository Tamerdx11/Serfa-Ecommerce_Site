import React from "react";
import App from "./component/App";
import { BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "../src/designs/navbar-style.css";
import "../src/designs/home-style.css";
import "../src/designs/about-style.css";
import "../src/designs/footer-style.css";
import "../src/designs/contactus-style.css";
import "../src/designs/cart-style.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);