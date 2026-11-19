import nanoid from 'nanoid';

const KEY = 'margin_orders';

const readAll = () => JSON.parse(window.sessionStorage.getItem(KEY) || '{}');

export function placeOrder({ customer, lines, total }) {
  const order = {
    id: nanoid(8),
    placedAt: new Date().toISOString(),
    customer,
    lines,
    total,
  };
  window.sessionStorage.setItem(KEY, JSON.stringify({ ...readAll(), [order.id]: order }));
  return order;
}

export const findOrder = (id) => readAll()[id] || null;
