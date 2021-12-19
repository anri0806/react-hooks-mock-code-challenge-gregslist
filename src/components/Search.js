import React, { useState } from "react";

function Search({ onChangeSearch }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onChangeSearch(input);
  }

  function handleChange(e) {
    setInput(e.target.value);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={input}
        onChange={handleChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;

//Search List
//make input controlled with onChange & value
//onSubmit, create function to receive callback func and pass value state
//in App.js, create function to filter list.name === input
//setLists
