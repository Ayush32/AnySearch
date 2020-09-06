/*
 *   Copyright (c) 2020
 *   All rights reserved.
 */
import "./Navbar.css";
import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        {/* eslint-disable-next-line */}
        <img
          style={{ height: "30px", width: "30px" }}
          src="https://img.icons8.com/color/96/000000/react-native.png"
        />
        &nbsp;
        {/* eslint-disable-next-line */}
        <a href="" class="navbar-brand">
          React AnySearch
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </nav>
    );
  }
}

export default Navbar;
