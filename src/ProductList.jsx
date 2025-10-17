import React, { useState } from 'react';

const ProductList = () => {
  const plantsArray = [
    {
      category: 'Indoor Plants',
      plants: [
        {
          name: 'Fiddle Leaf Fig',
          image: 'https://example.com/fiddle-leaf-fig.jpg',
          description: 'Large, lush leaves.',
          cost: 30,
        },
        {
          name: 'Snake Plant',
          image: 'https://example.com/snake-plant.jpg',
          description: 'Easy to care for.',
          cost: 25,
        },
      ],
    },
    {
      category: 'Outdoor Plants',
      plants: [
        {
          name: 'Rose',
          image: 'https://example.com/rose.jpg',
          description: 'Beautiful red flowers.',
          cost: 15,
        },
      ],
    },
  ];

  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (plant) => {
    setAddedToCart((prev) => ({
      ...prev,
      [plant.name]: true,
    }));
  };

  return (
    <div className="product-grid">
      {plantsArray.map((category, categoryIndex) => (
        <div key={categoryIndex}>
          <h2>{category.category}</h2>
          <div className="product-list">
            {category.plants.map((plant, plantIndex) => (
              <div className="product-card" key={plantIndex}>
                <h3>{plant.name}</h3>
                <img
                  src={plant.image}
                  alt={plant.name}
                  style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                />
                <p>{plant.description}</p>
                <div>${plant.cost}</div>
                <button
                  className="product-button"
                  onClick={() => handleAddToCart(plant)}
                  disabled={addedToCart[plant.name]}
                >
                  {addedToCart[plant.name] ? 'Added' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};