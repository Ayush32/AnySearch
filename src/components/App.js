/*
 *   Copyright (c) 2020
 *   All rights reserved.
 */
import "./style.css";
import React from "react";
import SearchBar from "./SearchBar";

import unsplash from "../api/unsplash";

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: {
        query: term,
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
