import React from "react";
import ListingCard from "./ListingCard";


function ListingsContainer({ lists, onClickDelete }) {
  const listCard = lists.map((list) => (
    <ListingCard key={list.id} list={list} onClickDelete={onClickDelete} />
  ));

  return (
    <main>
      <ul className="cards">{listCard}</ul>
    </main>
  );
}

export default ListingsContainer;
