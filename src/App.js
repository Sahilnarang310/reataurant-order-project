import React, { useState, useEffect } from 'react';
import OrderForm from './components/orderForm';
import OrderList from './components/orderList';
import './components/style.css';
import './App.css'
const App = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = localStorage.getItem('orders');
    if (storedOrders) {
      setOrders(JSON.parse(storedOrders));
    }
  }, []);

  const handleAddOrder = (newOrder) => {
    const updatedOrders = [...orders, newOrder];
    setOrders(updatedOrders);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
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



