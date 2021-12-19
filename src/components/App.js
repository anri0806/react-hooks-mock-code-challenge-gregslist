import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import Sort from "./Sort";
import Form from "./Form";

function App() {
  const [lists, setLists] = useState([]);
  const [sort, setSort] = useState("All");

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((res) => res.json())
      .then((data) => setLists(data));
  }, []);

  function handleDeleteList(deletedItem) {
    const updatedLists = lists.filter((list) => list.id !== deletedItem.id);

    setLists(updatedLists);
  }

  function handleSearch(input) {
    const filteredLists = lists.filter((list) =>
      list.description.toLowerCase().includes(input.toLowerCase())
    );

    setLists(filteredLists);
  }

  function handleSubmitAdd(postedData) {
    setLists([postedData, ...lists]);
  }

  const sortedList = [...lists].sort((a, b) => {
    if (sort === "All") {
      return lists;
    } else if (sort === "Location") {
      return a.location.localeCompare(b.location);
    }
    return lists;
  });

  return (
    <div className="app">
      <Header onChangeSearch={handleSearch} />
      <br></br>
      <Form onSubmitAdd={handleSubmitAdd} />
      <br></br>
      <Sort sort={sort} onChangeSort={setSort} />
      <ListingsContainer lists={sortedList} onClickDelete={handleDeleteList} />
    </div>
  );
}

export default App;
