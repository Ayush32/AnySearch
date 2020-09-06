/*
 *   Copyright (c) 2020
 *   All rights reserved.
 */
import "./style.css";
import React from "react";
import SearchBar from "./SearchBar";
import axios from "axios";

class App extends React.Component {
  onSearchSubmit(term) {
    axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term,
      },
      headers: {
        Authorization: "Client-ID lxeutHZ5RXSUGdR_ESxpufyeBxKNz0t2rUFg5OGJOJg",
      },
    });
  }
  render() {
    return (
      <div id="container" className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}
export default App;
