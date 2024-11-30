import React from "react";
import { useUser } from "../UserContext";
import "./List.css";

const List = () => {
  const { user,Items,setItems, itemQuantities, setItemQuantities } = useUser();

  // Handle increment
  const incrementQuantity = (contactNumber, itemName) => {
    setItemQuantities((prev) => ({
      ...prev,
      [contactNumber]: {
        ...prev[contactNumber],
        [itemName]: (prev[contactNumber][itemName] || 0) + 1,
      },
    }));
  };

  // Handle decrement
  const decrementQuantity = (contactNumber, itemName) => {
    setItemQuantities((prev) => ({
      ...prev,
      [contactNumber]: {
        ...prev[contactNumber],
        [itemName]: Math.max((prev[contactNumber][itemName] || 1) - 1, 1),
      },
    }));
  };

  // Group items by contactNumber
  const groupedItems = Items.reduce((acc, item) => {
    if (!acc[item.contactNumber]) {
      acc[item.contactNumber] = { items: [], totalPrice: 0 };
    }
    const quantity = itemQuantities[item.contactNumber]?.[item.itemName] || 1;
    acc[item.contactNumber].items.push({ ...item, quantity });
    acc[item.contactNumber].totalPrice += parseFloat(item.price || 0) * quantity;
    return acc;
  }, {});

  // Calculate Grand Total
  const grandTotal = Object.values(groupedItems).reduce(
    (total, group) => total + group.totalPrice,
    0
  );


  const handleSubmit = async () => {
    const userName = user?.username || "Anonymous"; // Default to "Anonymous" if no name is found
  
    const response = await fetch("http://localhost:5000/api/item/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ groupedItems, grandTotal, userName }), // Include userName
    });
  
    if (response.ok) {
      alert("Order submitted successfully!");
      setItemQuantities({});
      // Clear Items here if needed:
      setItems([]);
    } else {
      alert("Failed to submit order.");
    }
  };


  return (
    <>
      <div className="list-container container">
        {Items.length === 0 ? (
          <p className="text-center">No items selected.</p>
        ) : (
          <>
            <ul className="list-group">
              {Object.entries(groupedItems).map(([contactNumber, details], index) => (
                <li className="list-group-item mb-3" key={index}>
                  <strong className="text-primary">Contact:</strong> {contactNumber}
                  <ul className="list-group mt-2">
                    {details.items.map((item, idx) => (
                      <li
                        className="list-group-item d-flex justify-content-between align-items-center"
                        key={idx}
                      >
                        <div>
                          <strong>Item:</strong> {item.itemName},{" "}
                          <strong>Price:</strong> {item.price},{" "}
                          <strong>Quantity:</strong> {item.quantity}
                        </div>
                        <div className="btn-group" style={{ paddingLeft: "30px" }}>
                          <button
                            className="btn btn-outline-success btn-sm mt-3"
                            onClick={() => decrementQuantity(contactNumber, item.itemName)}
                          >
                            -
                          </button>
                          <button
                            className="btn btn-outline-success btn-sm mt-3"
                            onClick={() => incrementQuantity(contactNumber, item.itemName)}
                          >
                            +
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-2" style={{ color: "green" }}>
                    <strong>Total Price:</strong> ₹{details.totalPrice.toFixed(2)}
                  </p>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
      <div className="mt-4 text-center grand-total-section" style={{ padding: "10px" }}>
        <h4 className="text-success">Grand Total: ₹{grandTotal.toFixed(2)}</h4>
        <button className="btn btn-success mt-3" onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
};

export default List;
