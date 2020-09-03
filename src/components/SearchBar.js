/*
 *   Copyright (c) 2020
 *   All rights reserved.
 */
import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
    <div class="ui icon input">
  <input type="text" placeholder="Search...">
  <i class="circular search link icon"></i>
</div>

    ); 
  }
}

export default SearchBar;
