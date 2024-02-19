import React, { useState } from 'react';

const OrderForm = ({ onAddOrder }) => {
  const [tableNo, setTableNo] = useState('');
  const [dish, setDish] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddOrder({ tableNo, dish, price });
    setTableNo('');
    setDish('');
    setPrice('');
  };

  return (
    <div>
      <h2>Order Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Table No" value={tableNo} onChange={(e) => setTableNo(e.target.value)} required />
        <input type="text" placeholder="Dish" value={dish} onChange={(e) => setDish(e.target.value)} required />
        <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
        <button type="submit">Add Order</button>
      </form>
    </div>
  );
};

export default OrderForm;
