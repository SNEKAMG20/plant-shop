import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';
import './Header.css';

function Header() {
  const totalItems = useSelector(state => state.cart.totalItems);

  return (
    <header className="header">
      <h2 className="logo">🪴 GreenNest</h2>
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/cart" className="cart-link">
          <FaShoppingCart />
          <span className="cart-count">{totalItems}</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
