import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./search/search";
import "./Nav.css";

function Nav() {
  return (
    <>
      <nav
        id="nav-container"
        className="nav-container navbar p-2 shadow-sm p-3 mb-5 justify-content-center"
      >
        <a
          href="#"
          id="nav-title"
          className="nav-title navbar-brand fw-bold text-center"
        >
          Weather App
        </a>
      </nav>
    </>
  );
}
export default Nav;
