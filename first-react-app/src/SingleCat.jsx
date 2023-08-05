import React from "react";

const SingleCat = ({ cat, onDelete }) => {
    const handleDelete = () => {
        onDelete(cat.id);
    };

    return (
        <div>
          <h3>{cat.name}</h3>
          <p>Latin Name: {cat.latinName}</p>
          <img src={cat.image} alt={cat.name} className="cat-image" />
          <button onClick={handleDelete}>Delete</button>
        </div>
      );
    };
  
  export default SingleCat;

  



 