/*
 *   Copyright (c) 2020
 *   All rights reserved.
 */
import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              placeholder="Search......"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
            <i class="circular search link icon"></i>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
