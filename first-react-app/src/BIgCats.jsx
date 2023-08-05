import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import SingleCat from './SingleCat';
import AddCatForm from './AddCatForm';

const BigCats = () => {
  const allCats = [
    { id: uuidv4(), name: 'Cheetah', latinName: 'Acinonyx jubatus', image: 'https://images.indianexpress.com/2023/08/cheetah.jpg?w=640' },
    { id: uuidv4(), name: 'Cougar', latinName: 'Puma concolor', image: 'https://news.wttw.com/sites/default/files/styles/full/public/field/image/CougarPexelsNickyPeCrop.jpg?itok=js8MIvgM' },
    { id: uuidv4(), name: 'Jaguar', latinName: 'Panthera onca', image: 'https://www.akronzoo.org/sites/default/files/styles/uncropped_xl/public/2022-05/Jaguar-main.png?itok=TIYNRR0C' },
    { id: uuidv4(), name: 'Leopard', latinName: 'Panthera pardus', image: 'https://www.treehugger.com/thmb/glS7N05QF96T56QwiNHa1fY65d0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-160869327-57f871694a4a4d69b2503f311cf31fbc.jpg' },
    { id: uuidv4(), name: 'Lion', latinName: 'Panthera leo', image: 'https://en.hopen.co/cdn/shop/articles/PHOTO_LION_99595812-a3f3-4d7c-a0e5-32b96fdf0e95_2048x2048.png?v=1680271720'},
    { id: uuidv4(), name: 'Snow leopard', latinName: 'Panthera uncia', image: 'https://i.natgeofe.com/k/e196909e-a9f9-4437-95db-7cd9a039254f/snow-leopard-fullbody_square.jpg' },
    { id: uuidv4(), name: 'Tiger', latinName: 'Panthera tigris', image: 'https://images.saymedia-content.com/.image/t_share/MTk3MjAzNzk5NzQyMzU4NjEx/tiger-names.png' },
  ];

  const [cats, setCats] = useState(allCats);
  const [showPantheraOnly, setShowPantheraOnly] = useState(false);

  const handleSortByName = () => {
    setCats([...cats].sort((a, b) => a.name.localeCompare(b.name)));
  };

  const handleReverseOrder = () => {
    setCats([...cats].reverse());
  };

  const handleFilterPanthera = () => {
    if (showPantheraOnly) {
      setCats(allCats);
    } else {
      setCats(allCats.filter(cat => cat.latinName.toLowerCase().includes('panthera')));
    }
    setShowPantheraOnly(prevShowPantheraOnly => !prevShowPantheraOnly);
  };

  const handleAddCat = (newCat) => {
    setCats([...cats, { id: uuidv4(), ...newCat }]);
  };
  

  return (
    <div>
      <h2>Big Cats List</h2>
      <button onClick={handleSortByName}>Sort by Name</button>
      <button onClick={handleReverseOrder}>Reverse Order</button>
      <button onClick={handleFilterPanthera}>{showPantheraOnly ? 'Show All' : 'Panthera Family'}</button>
      <ul>
        {cats.map((cat) => (
          <li key={cat.id}>
            <SingleCat cat={cat} />
          </li>
        ))}
      </ul>
      <AddCatForm addCat={handleAddCat} />
    </div>
  );
};

export default BigCats;









