import React from 'react';
import { useCart } from '../cart.js';

export default function Header() {
  const { count } = useCart();
  return (
    <header>
      <a className="brand" href="#/">
        Margin
      </a>
      <nav>
        <a href="#/">Shop</a>
        <a href="#/cart" className="cart-link">
          Cart ({count})
        </a>
      </nav>
    </header>
  );
}
