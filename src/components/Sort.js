import React from "react";

function Sort({ sort, onChangeSort }) {
  return (
    <div className="sort">
      <label>Sort by: </label>
      <select value={sort} onChange={(e) => onChangeSort(e.target.value)}>
        <option value="All">All</option>
        <option value="Location">Location</option>
      </select>
    </div>
  );
}

export default Sort;

//Sort
//onClick, make sort button controlled
//in App.js, create function to sort lists to be alphabetic
