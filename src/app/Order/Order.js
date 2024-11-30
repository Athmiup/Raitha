import React, { useState } from "react";
import { useUser } from '../UserContext';

import './Order.css';

const Order = () => {
  const [location, setLocation] = useState("");
  const [grocery, setGrocery] = useState("");
  const [farmers, setFarmers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const {Items,setItems} = useUser() || {}; 

  const fetchFarmers = async () => {
    setLoading(true);
    setError("");
    setFarmers([]);

    try {
      const query = new URLSearchParams({
        ...(location && { location }),
        ...(grocery && { grocery }),
      });

      const response = await fetch(
        `http://localhost:5000/api/farmers/search?${query.toString()}`
      );

      if (!response.ok) {
        if (response.status === 404) {
          setError("No farmers found with the given criteria.");
        } else {
          setError("Failed to fetch farmers.");
        }
        return;
      }

      const data = await response.json();
      setFarmers(data);
    } catch (err) {
      console.error("Error fetching farmers:", err);
      setError("An error occurred while fetching farmers.");
    } finally {
      setLoading(false);
    }
  };

  const handleToggleItem = (item, farmer) => {
    const itemId = `${farmer.contactNumber}-${item.item}`;
    const isSelected = Items.some((selected) => selected.id === itemId);

    if (isSelected) {
     //Remove the prevoius one
      setItems((prev) => prev.filter((selected) => selected.id !== itemId));
    } else {
    

      setItems((prev) => [
        ...prev,
        {
          id: itemId,
          contactNumber: farmer.contactNumber,
          itemName: item.item,
          price: item.price || "N/A",
        },
      ]);

    }
  };

  return (
    <div className="container2">
      <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
        <h2>Search Farmers</h2>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Location:{" "}
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter location"
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Grocery Item:{" "}
            <input
              type="text"
              value={grocery}
              onChange={(e) => setGrocery(e.target.value)}
              placeholder="Enter grocery item"
            />
          </label>
        </div>
        <button onClick={fetchFarmers} disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>

        {error && <p style={{ color: "red" }}>{error}</p>}

        {farmers.length > 0 && (
          <table
            style={{ marginTop: "20px", width: "100%", borderCollapse: "collapse" }}
          >
            <thead>
              <tr>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>Contact Number</th>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>Item</th>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>Price</th>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {farmers.map((farmer, index) =>
                farmer.produce.map((item, idx) => {
                  const itemId = `${farmer.contactNumber}-${item.item}`;
                  const isSelected = Items.some(
                    (selected) => selected.id === itemId
                  );

                  return (
                    <tr key={`${index}-${idx}`}>
                      <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                        {farmer.contactNumber}
                      </td>
                      <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                        {item.item}
                      </td>
                      <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                        {item.price || "N/A"}
                      </td>
                      <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                        <button
                          onClick={() => handleToggleItem(item, farmer)}
                          style={{
                            backgroundColor: isSelected ? "#ff6b6b" : "#4caf50",
                            color: "#fff",
                            border: "none",
                            padding: "5px 10px",
                            cursor: "pointer",
                          }}
                        >
                          {isSelected ? "Undo" : "Add"}
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        )}
      </div>

      {/* Pass Items to the Page component */}
      
    </div>
  );
};

export default Order;
