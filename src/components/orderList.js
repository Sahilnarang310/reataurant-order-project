
import React, { useState, useEffect } from 'react';

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editedOrder, setEditedOrder] = useState({
    tableNo: '',
    dish: '',
    price: '',
  });

  useEffect(() => {
    const storedOrders = localStorage.getItem('orders');
    if (storedOrders) {
      setOrders(JSON.parse(storedOrders));
    }
  }, []);

  const handleEditOrder = (index) => {
    setEditIndex(index);
    const orderToEdit = orders[index];
    setEditedOrder({ ...orderToEdit });
  };

  const handleSaveEdit = () => {
    const updatedOrders = [...orders];
    updatedOrders[editIndex] = editedOrder;
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
    setOrders(updatedOrders);
    setEditIndex(null);
  };

  const handleDeleteOrder = (index) => {
    const updatedOrders = [...orders];
    updatedOrders.splice(index, 1);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
    setOrders(updatedOrders);
    setEditIndex(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedOrder({ ...editedOrder, [name]: value });
  };

  const handleCancelEdit = () => {
    setEditIndex(null);
    setEditedOrder({
      tableNo: '',
      dish: '',
      price: '',
    });
  };

  return (
    <div>
      <h2>Order List</h2>
      {orders.map((order, index) => (
        <div key={index}>
          {editIndex === index ? (
            <div>
              <input
                type="text"
                name="tableNo"
                value={editedOrder.tableNo}
                onChange={handleChange}
              />
              <input
                type="text"
                name="dish"
                value={editedOrder.dish}
                onChange={handleChange}
              />
              <input
                type="text"
                name="price"
                value={editedOrder.price}
                onChange={handleChange}
              />
              <button onClick={handleSaveEdit}>Save Edit</button>
              <button onClick={handleCancelEdit}>Cancel</button>
            </div>
          ) : (
            <div>
              <p>Table No: {order.tableNo}</p>
              <p>Dish: {order.dish}</p>
              <p>Price: {order.price}</p>
              <button onClick={() => handleEditOrder(index)}>Edit Order</button>
              <button onClick={() => handleDeleteOrder(index)}>Delete Order</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default OrderList;

