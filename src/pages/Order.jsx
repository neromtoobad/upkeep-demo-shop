import React from 'react';
import PropTypes from 'prop-types';
import { format, addDays } from 'date-fns';
import { findOrder } from '../orders.js';
import { money } from '../money.js';

export default function Order({ id }) {
  const order = findOrder(id);
  if (!order) return <p>We cannot find that order.</p>;

  const placed = new Date(order.placedAt);

  return (
    <section>
      <h1>Thanks, {order.customer.name}</h1>
      <p>
        Order <strong>{order.id}</strong> placed on {format(placed, 'dd/MM/yyyy')}.
      </p>
      <p className="muted">
        Posting to {order.customer.address}, {order.customer.city}. It should arrive by {format(addDays(placed, 5), 'EEEE d MMMM')}.
      </p>
      <table>
        <tbody>
          {order.lines.map((line) => (
            <tr key={line.id}>
              <td>{line.name}</td>
              <td>× {line.quantity}</td>
              <td>{money(line.price * line.quantity)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="total">
        Paid <strong>{money(order.total)}</strong>
      </p>
      <p className="muted">A receipt is on its way to {order.customer.email}.</p>
    </section>
  );
}

Order.propTypes = {
  id: PropTypes.string.isRequired,
};
