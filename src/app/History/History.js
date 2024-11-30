import React, { useEffect, useState } from "react";
import { useUser } from "../UserContext";
import "./History.css"; // Import a CSS file for custom styles

const History = () => {
  const { user } = useUser() || {};
  const [orderHistory, setOrderHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch order history
  useEffect(() => {
    const fetchOrderHistory = async () => {
      if (!user?.username) return;
      try {
        const response = await fetch(`http://localhost:5000/api/item/orders?userName=${user.username}`);
        const data = await response.json();
        setOrderHistory(data);
      } catch (error) {
        console.error("Error fetching order history:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrderHistory();
  }, [user?.username]);

  if (!user?.username) {
    return <p className="text-center">Please log in to view your order history.</p>;
  }

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  return (
    <div className="history-container container">
      {orderHistory.length === 0 ? (
        <p className="text-center text-green">No order history found.</p>
      ) : (
        <ul className="list-group">
          {orderHistory.map((order, index) => (
            <li className="list-group-item mb-3 history-card" key={index}>
              <strong className="text-green">Order Date:</strong>{" "}
              {new Date(order.createdAt).toLocaleString()}
              <br />
              <strong className="text-green">Contact Number:</strong> {order.contactNumber}
              <ul className="list-group mt-2">
                {order.items.map((item, idx) => (
                  <li
                    className="list-group-item d-flex justify-content-between align-items-center history-item"
                    key={idx}
                  >
                    <div>
                      <strong className="text-green">Item:</strong> {item.itemName},{" "}
                      <strong className="text-green">Price:</strong> ₹{item.price},{" "}
                      <strong className="text-green">Quantity:</strong> {item.quantity}
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-2 text-green total-price">
                <strong>Total Price:</strong> ₹{order.totalPrice.toFixed(2)}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default History;
