import React from 'react';
import { useForm } from 'react-hook-form';
import { useCart } from '../cart.js';
import { placeOrder } from '../orders.js';
import { go } from '../router.js';
import { money } from '../money.js';

export default function Checkout() {
  const { lines, total, clear } = useCart();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (customer) => {
    const order = placeOrder({ customer, lines, total });
    clear();
    go(`/order/${order.id}`);
  };

  if (lines.length === 0) {
    return (
      <section>
        <h1>Checkout</h1>
        <p className="muted">Your cart is empty.</p>
      </section>
    );
  }

  return (
    <section>
      <h1>Checkout</h1>
      <p className="muted">
        {lines.length} item{lines.length === 1 ? '' : 's'}, {money(total)} in total.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label>
          Full name
          <input name="name" ref={register({ required: true })} autoComplete="name" />
          {errors.name && <span className="error">Tell us who this is for.</span>}
        </label>
        <label>
          Email
          <input name="email" type="email" ref={register({ required: true, pattern: /^\S+@\S+\.\S+$/ })} autoComplete="email" />
          {errors.email && <span className="error">We need an email for the receipt.</span>}
        </label>
        <label>
          Address
          <input name="address" ref={register({ required: true })} autoComplete="street-address" />
          {errors.address && <span className="error">Where should we post it?</span>}
        </label>
        <label>
          City
          <input name="city" ref={register({ required: true })} autoComplete="address-level2" />
          {errors.city && <span className="error">Which city?</span>}
        </label>
        <button type="submit" className="button">
          Place order
        </button>
      </form>
    </section>
  );
}
