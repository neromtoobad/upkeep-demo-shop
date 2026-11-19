import React from 'react';
import PropTypes from 'prop-types';
import Swatch from '../components/Swatch.jsx';
import { money } from '../money.js';

export default function Home({ products }) {
  return (
    <section>
      <h1>Paper goods for people who still write things down</h1>
      <ul className="grid">
        {products.map((product) => (
          <li key={product.id} className="card">
            <a href={`#/product/${product.id}`}>
              <Swatch color={product.swatch} />
              <h2>{product.name}</h2>
            </a>
            <p className="muted">{product.blurb}</p>
            <p className="price">{money(product.price)}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

Home.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};
