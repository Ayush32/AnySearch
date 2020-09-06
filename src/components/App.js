/*
 *   Copyright (c) 2020
 *   All rights reserved.
 */
import "./style.css";
import React from "react";
import SearchBar from "./SearchBar";
import axios from "axios";

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term,
      },
      headers: {
        Authorization: "Client-ID lxeutHZ5RXSUGdR_ESxpufyeBxKNz0t2rUFg5OGJOJg",
      },
    });
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div id="container" className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}
export default App;
