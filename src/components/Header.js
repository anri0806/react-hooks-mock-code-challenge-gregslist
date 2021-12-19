import React from "react";
import Search from "./Search";

function Header({ input, handleInput, onChangeSearch }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search
        input={input}
        handleInput={handleInput}
        onChangeSearch={onChangeSearch}
      />
    </header>
  );
}

export default Header;
