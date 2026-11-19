import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRoute } from './router.js';
import { CartProvider, useCartState } from './cart.js';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import Product from './pages/Product.jsx';
import Cart from './pages/Cart.jsx';
import Checkout from './pages/Checkout.jsx';
import Order from './pages/Order.jsx';

export default function App() {
  const path = useRoute();
  const cart = useCartState();
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios.get('/products.json').then((response) => setProducts(response.data));
  }, []);

  let page;
  if (!products) page = <p className="muted">Loading the shop…</p>;
  else if (path === '/') page = <Home products={products} />;
  else if (path.startsWith('/product/')) page = <Product product={products.find((p) => p.id === path.split('/')[2])} />;
  else if (path === '/cart') page = <Cart />;
  else if (path === '/checkout') page = <Checkout />;
  else if (path.startsWith('/order/')) page = <Order id={path.split('/')[2]} />;
  else page = <p>That page does not exist.</p>;

  return (
    <CartProvider value={cart}>
      <Header />
      <main>{page}</main>
      <footer>Margin — paper goods, posted from Leeds.</footer>
    </CartProvider>
  );
}
