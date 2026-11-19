import React from 'react';
import { useCart } from '../cart.js';
import { money } from '../money.js';

export default function Cart() {
  const { lines, remove, total } = useCart();

  if (lines.length === 0) {
    return (
      <section>
        <h1>Your cart</h1>
        <p className="muted">Nothing in here yet.</p>
        <a className="button" href="#/">
          Back to the shop
        </a>
      </section>
    );
  }

  return (
    <section>
      <h1>Your cart</h1>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {lines.map((line) => (
            <tr key={line.id}>
              <td>{line.name}</td>
              <td>{line.quantity}</td>
              <td>{money(line.price * line.quantity)}</td>
              <td>
                <button type="button" className="link" onClick={() => remove(line.id)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="total">
        Total <strong>{money(total)}</strong>
      </p>
      <a className="button" href="#/checkout">
        Checkout
      </a>
    </section>
  );
}
