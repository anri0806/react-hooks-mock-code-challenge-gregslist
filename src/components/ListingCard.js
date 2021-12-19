import React, {useState} from "react";

function ListingCard({ list, onClickDelete }) {
  const [favorite, setFavorite] = useState(false)
  
  function handleToggle() {
    setFavorite((favorite) => !favorite)
  }

  function handleDelete() {
    fetch(`http://localhost:6001/listings/${list.id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(() => onClickDelete(list))

  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={list.image} alt={list.description} />
      </div>
      <div className="details">
        {favorite ? (
          <button onClick={handleToggle} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleToggle} className="emoji-button favorite">☆</button>
        )}
        <strong>{list.description}</strong>
        <span> · {list.location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;

//Delete Listing
//onClick, create function to fetch/DELETE request with id
//.then, receive callback function from App.js & pass list
//in App.js, create function to filter list.id !== deletedList.id
//pass this func to Listing Card

//Favorite & Unfavorite
//create state to store button boolean
//onClick, create function to toggle button

