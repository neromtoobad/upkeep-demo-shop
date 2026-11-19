import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import classNames from 'classnames';
import Swatch from '../components/Swatch.jsx';
import { useCart } from '../cart.js';
import { money } from '../money.js';

export default function Product({ product }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  if (!product) return <p>We do not sell that.</p>;

  return (
    <section className="product">
      <Swatch color={product.swatch} large />
      <div>
        <h1>{product.name}</h1>
        <p className="price">{money(product.price)}</p>
        <div className="description">
          <ReactMarkdown source={product.description} />
        </div>
        <button
          type="button"
          className={classNames('button', { 'button-done': added })}
          onClick={() => {
            add(product);
            setAdded(true);
          }}
        >
          {added ? 'Added. Add another' : 'Add to cart'}
        </button>
      </div>
    </section>
  );
}

Product.propTypes = {
  product: PropTypes.object,
};
