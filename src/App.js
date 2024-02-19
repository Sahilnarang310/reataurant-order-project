// App.js
import React, { useState } from 'react';
import './components/style.css';
import './App.css'
import OrderForm from './components/orderForm';
import OrderList from './components/orderList';

const App = () => {
  const [orders, setOrders] = useState([]);

  const handleAddOrder = (newOrder) => {
    setOrders([...orders, newOrder]);
    localStorage.setItem('order', JSON.stringify([...orders, newOrder]));
  };

  return (
    <div className="container">
      <h1>Restaurant Order Management</h1>
      <div className="row">
        <div className="col">
          <OrderForm onAddOrder={handleAddOrder} />
        </div>
        <div className="col">
          <OrderList />
        </div>
      </div>
    </div>
  );
};

export default App;


