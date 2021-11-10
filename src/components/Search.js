import React from "react";

function Search({ handleFilter }) {


  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={handleFilter} className="prompt"/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
