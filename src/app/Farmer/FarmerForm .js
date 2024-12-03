import { useState, useEffect } from "react";
// import axios from "axios";
import styles from "./FarmerForm.module.css";
import { useUser } from '../UserContext';

const FarmerForm = ({setad}) => {
  const {user} = useUser() || {};
  const [farmer, setFarmer] = useState({
    contactNumber: "",
    name: "",
    location: "",
    produce: [{ item: "", price: "" }],
  });

  const [farmers, setFarmers] = useState([]);
  const [message, setMessage] = useState("");

  // Set Axios base URL
  // axios.defaults.baseURL = "/api";

 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFarmer({ ...farmer, [name]: value });
  };

  const handleProduceChange = (index, e) => {
    const { name, value } = e.target;
    const updatedProduce = [...farmer.produce];
    updatedProduce[index][name] = value;
    setFarmer({ ...farmer, produce: updatedProduce });
  };

  const addProduceField = () => {
    setFarmer({
      ...farmer,
      produce: [...farmer.produce, { item: "", price: "" }],
    });
  };

  const removeProduceField = (index) => {
    const updatedProduce = farmer.produce.filter((_, i) => i !== index);
    setFarmer({ ...farmer, produce: updatedProduce });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();



    try {
      const response = await fetch("https://backendraithapi.onrender.com/api/farmers/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contactNumber: farmer.contactNumber,
          name: user.username,
          location: farmer.location,
          produce: farmer.produce,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add farmer details");
      }
      else {
        alert("we done it")
        setad(true);
      }

      const result = await response.json();
      setFarmers((prevFarmers) => [...prevFarmers, result]);
    } catch (error) {
      console.error("Error adding farmer:", error);
    }

  };

 

  return (
    <div style={{ justifyItems: "center" }}>
      <div
        className={`${styles.farmerForm}`}
        style={{
          minHeight: "100vh",
          maxWidth: "100vh",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        <h1 className="text-center">Manage Farmer Details</h1>
        {message && <div className={`alert alert-info ${styles.alert}`}>{message}</div>}

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className="mb-3">
            <label className="form-label">Contact Number</label>
            <input
              type="text"
              className="form-control"
              name="contactNumber"
              value={farmer.contactNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={user.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Location</label>
            <input
              type="text"
              className="form-control"
              name="location"
              value={farmer.location}
              onChange={handleChange}
              required
            />
          </div>

          {farmer.produce.map((produce, index) => (
            <div key={index} className={styles.produceField}>
              <label className="form-label">Produce Item</label>
              <input
                type="text"
                className="form-control"
                name="item"
                value={produce.item}
                onChange={(e) => handleProduceChange(index, e)}
                required
              />
              <label className="form-label">Price</label>
              <input
                type="number"
                className="form-control"
                name="price"
                value={produce.price}
                onChange={(e) => handleProduceChange(index, e)}
                required
              />
              <button
                type="button"
                className={`btn btn-danger my-2 ${styles.removeBtn}`}
                onClick={() => removeProduceField(index)}
              >
                Remove
              </button>
              <button
                type="button"
                className={`btn btn-secondary my-2 ${styles.removeBtn}`}
                onClick={addProduceField}
              >
                Add Produce
              </button>
            </div>
          ))}
          <div className="d-flex justify-content-center my-3">
            <button type="submit" className="btn btn-primary">
              Add Farmer
            </button>
          </div>
        </form>

       
      </div>
    </div>
  );
};

export default FarmerForm;
