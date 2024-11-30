import React from 'react';
import { useUser } from "../../UserContext";

export default function DailyCard({
  image,
  description,
  productName,
  price,
  contactNumber,
}) {
  const { Items, setItems } = useUser() || {};

  // Helper function to check if the item is already selected
  const isItemSelected = () =>
    Items.some(
      (item) => item.contactNumber === contactNumber && item.itemName === productName
    );

  // Handle Add/Undo toggle
  const handleToggleItem = () => {
    if (isItemSelected()) {
      // If the item is already selected, remove it from the list
      setItems((prevItems) =>
        prevItems.filter(
          (item) =>
            !(item.contactNumber === contactNumber && item.itemName === productName)
        )
      );
    } else {
      // Otherwise, add the item to the list
      setItems((prevItems) => [
        ...prevItems,
        {
          contactNumber,
          itemName: productName,
          price,
        },
      ]);
    }
  };

  return (
    <>
      <div
        className="card"
        style={{
          width: '18rem',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        {/* Product Image */}
        <img
          src={image}
          className="card-img-top"
          alt="Product"
          style={{ height: '150px', objectFit: 'cover' }}
        />

        {/* Card Body */}
        <div className="card-body" style={{ padding: '16px' }}>
          <p className="card-text" style={{ marginBottom: '10px' }}>
            {description}
          </p>

          {/* Add/Undo Button */}
          <button
            className={`btn btn-sm ${isItemSelected() ? 'btn-danger' : 'btn-success'}`}
            style={{ fontSize: '0.9rem', padding: '5px 10px', width: '100%' }}
            onClick={handleToggleItem}
          >
            {isItemSelected() ? 'Undo' : 'Add'}
          </button>
        </div>
      </div>
    </>
  );
}
