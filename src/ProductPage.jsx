import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import Header from '../components/Header';
import './ProductPage.css';

const plantData = [
  { id: 1, name: 'Aloe Vera', price: 200, category: 'Succulents', image: 'https://source.unsplash.com/200x200/?aloe-vera' },
  { id: 2, name: 'Snake Plant', price: 250, category: 'Indoor', image: 'https://source.unsplash.com/200x200/?snake-plant' },
  { id: 3, name: 'Peace Lily', price: 300, category: 'Flowering', image: 'https://source.unsplash.com/200x200/?peace-lily' },
  { id: 4, name: 'Bamboo Palm', price: 280, category: 'Indoor', image: 'https://source.unsplash.com/200x200/?bamboo-palm' },
  { id: 5, name: 'Echeveria', price: 220, category: 'Succulents', image: 'https://source.unsplash.com/200x200/?echeveria' },
  { id: 6, name: 'Lavender', price: 350, category: 'Flowering', image: 'https://source.unsplash.com/200x200/?lavender-plant' },
];

function ProductPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [disabledButtons, setDisabledButtons] = useState([]);

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
    setDisabledButtons([...disabledButtons, plant.id]);
  };

  const categories = ['All', ...new Set(plantData.map(p => p.category))];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPlants = selectedCategory === 'All'
    ? plantData
    : plantData.filter(p => p.category === selectedCategory);

  return (
    <>
      <Header />
      <div className="product-page">
        <h1>Our Houseplants</h1>

        <div className="categories">
          {categories.map(cat => (
            <button key={cat} onClick={() => setSelectedCategory(cat)}>
              {cat}
            </button>
          ))}
        </div>

        <div className="plants">
          {filteredPlants.map(plant => (
            <div key={plant.id} className="plant-card">
              <img src={plant.image} alt={plant.name} />
              <h3>{plant.name}</h3>
              <p>₹{plant.price}</p>
              <button
                onClick={() => handleAddToCart(plant)}
                disabled={disabledButtons.includes(plant.id)}
              >
                {disabledButtons.includes(plant.id) ? 'Added' : 'Add to Cart'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductPage;
