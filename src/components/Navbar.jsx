import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [inHome, setInHome] = useState(true);
  const [inControl, setInControl] = useState(false);

  const selector = (selected) => {
    if (selected == "Home") {
      setInHome(true);
      setInControl(false);
      return;
    }
    if (selected == "Control") {
      setInControl(true);
      setInHome(false);
      return;
    }
    setInControl(false);
    setInHome(false);
  };

  return (
    <div className="navbarContainer">
      <div className="navbarTitle">
        <Icon icon="mdi:tooth" color="#cacaca" width="25" />
      </div>
      <div className="options">
        <ul>
          <NavLink
            style={{ textDecoration: "none" }}
            to="/"
            onClick={() => selector("Home")}
            // className={(isActive) => (isActive ? "selected" : "unselected")}
          >
            <li className={inHome ? "selected" : "unselected"}>Home</li>
          </NavLink>
          <NavLink
            style={{ textDecoration: "none" }}
            to="/control"
            onClick={() => selector("Control")}
            // className={(isActive) => (isActive ? "selected" : "unselected")}
          >
            <li className={inControl ? "selected" : "unselected"}>Control</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
