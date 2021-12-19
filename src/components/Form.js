import React, { useState } from "react";

function Form({ onSubmitAdd }) {
  const [formData, setFormData] = useState({
    description: "",
    image: "",
    location: "",
  });

  function handleForm(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:6001/listings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((postedData) => onSubmitAdd(postedData));
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          value={formData.description}
          onChange={handleForm}
          type="text"
          name="description"
          placeholder="description"
        />
        <input
          value={formData.image}
          onChange={handleForm}
          type="text"
          name="image"
          placeholder="image link"
        />
        <input
          value={formData.location}
          onChange={handleForm}
          type="text"
          name="location"
          placeholder="location"
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
}

export default Form;
