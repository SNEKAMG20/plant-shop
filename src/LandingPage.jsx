import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div style={{
      backgroundImage: `url('https://source.unsplash.com/1600x900/?plants')`,
      backgroundSize: 'cover',
      height: '100vh',
      color: '#fff',
      textAlign: 'center',
      paddingTop: '20%'
    }}>
      <h1>GreenNest</h1>
      <p>Your favorite place to buy beautiful houseplants</p>
      <button onClick={() => navigate('/products')}>Get Started</button>
    </div>
  );
}

export default LandingPage;
