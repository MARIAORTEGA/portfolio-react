import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
          className={location.pathname === "/" ? "nav-link active" : "nav-link"}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/welcome"
          className={
            location.pathname === "/welcome" ? "nav-link active" : "nav-link"
          }
        >
          Resume
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/resume"
          className={
            location.pathname === "/resume" ? "nav-link active" : "nav-link"
          }
        >
          Projects
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          className={
            location.pathname === "/contact" ? "nav-link active" : "nav-link"
          }
        >
          {" "}
          Github
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact/learn"
          className={
            location.pathname === "/contact/learn"
              ? "nav-link active"
              : "nav-link"
          }
        >
          Linked In
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
