import React, { useState } from 'react';

const AddCatForm = ({ addCat }) => {
  const [catData, setCatData] = useState({
    name: '',
    latinName: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCatData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCat(catData);
    setCatData({
      name: '',
      latinName: '',
      image: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={catData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="latinName">Latin Name:</label>
        <input
          type="text"
          id="latinName"
          name="latinName"
          value={catData.latinName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="image">Image URL:</label>
        <input
          type="text"
          id="image"
          name="image"
          value={catData.image}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Add Cat</button>
    </form>
  );
};

export default AddCatForm;
