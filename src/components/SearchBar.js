/*
 *   Copyright (c) 2020
 *   All rights reserved.
 */
import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  //   context and event handler
  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  // axios third part package
  // function built into modern browsers

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
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
