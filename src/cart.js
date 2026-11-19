import { createContext, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const CartContext = createContext(null);
const COOKIE = 'margin_cart';

export function useCartState() {
  // The cart lives in a cookie so it survives a reload.
  const [lines, setLines] = useState(() => {
    // js-cookie 3 removed getJSON and no longer serialises objects: do both by hand.
    const saved = Cookies.get(COOKIE);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    Cookies.set(COOKIE, JSON.stringify(lines), { expires: 7 });
  }, [lines]);

  const add = (product) =>
    setLines((current) => {
      const existing = current.find((line) => line.id === product.id);
      if (existing) {
        return current.map((line) => (line.id === product.id ? { ...line, quantity: line.quantity + 1 } : line));
      }
      return [...current, { id: product.id, name: product.name, price: product.price, quantity: 1 }];
    });

  const remove = (id) => setLines((current) => current.filter((line) => line.id !== id));
  const clear = () => setLines([]);

  const count = lines.reduce((sum, line) => sum + line.quantity, 0);
  const total = lines.reduce((sum, line) => sum + line.quantity * line.price, 0);

  return { lines, add, remove, clear, count, total };
}

export const CartProvider = CartContext.Provider;
export const useCart = () => useContext(CartContext);
