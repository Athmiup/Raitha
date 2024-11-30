import React, { useState } from 'react';
import './Card.css'; // Optional for additional custom styling
import { useUser } from "../../UserContext";

export default function ProductCard({
  image,
  title,
  productName,
  originalPrice,
  discount,
  percentageLikes, // Percentage likes from JSON
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
          price: Math.round(originalPrice * (1 - discount / 100)), 
        },
      ]);
    }
  };

  return (
    <div
      className="card"
      style={{
        width: '18rem',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Discount Label */}
      {discount > 0 && (
        <div
          className="discount-label"
          style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            backgroundColor: '#4CAF50',
            color: '#fff',
            padding: '2px 8px',
            borderRadius: '4px',
          }}
        >
          {discount}% OFF
        </div>
      )}

      {/* Product Image */}
      <img
        src={image}
        className="card-img-top"
        alt={productName}
        style={{ height: '150px', objectFit: 'cover' }}
      />

      {/* Card Body */}
      <div className="card-body" style={{ padding: '16px' }}>
        <h6 className="card-title" style={{ color: '#555' }}>{title}</h6>
        <h5 style={{ fontWeight: 'bold' }}>{productName}</h5>

        {/* Ratings */}
        <div style={{ margin: '8px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '1rem', fontWeight: 'bold', color: '#555' }}>
            {percentageLikes}% Buy rate
          </span>
          <div style={{ display: 'flex' }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                style={{
                  color: star <= Math.round((percentageLikes / 100) * 5) ? '#FFD700' : '#ccc',
                  fontSize: '1.2rem',
                }}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        {/* Price Information */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '8px',
          }}
        >
          <span
            style={{
              fontSize: '1.2em',
              fontWeight: 'bold',
              color: '#000',
            }}
          >
            ₹{Math.round(originalPrice * (1 - discount / 100))}
          </span>
          <span
            style={{
              textDecoration: 'line-through',
              color: '#888',
              marginLeft: '8px',
            }}
          >
            ₹{originalPrice}
          </span>
        </div>

        {/* Add/Undo Button */}
        <button
          className={`btn ${isItemSelected() ? 'btn-danger' : 'btn-success'}`}
          style={{ width: '100%' }}
          onClick={handleToggleItem}
        >
          {isItemSelected() ? 'Undo' : 'Add'}
        </button>
      </div>
    </div>
  );
}
