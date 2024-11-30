import { useState, useEffect } from "react";
import styles from "./FarmerGet.module.css";
import { useUser } from "../UserContext";

const FarmerGet = ({ setad }) => {
  const { user } = useUser() || {};
  const [farmerDetails, setFarmerDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [updatedDetails, setUpdatedDetails] = useState({
    location: "",
    contactNumber: "",
    produce: [],
  });

  useEffect(() => {
    const fetchFarmerDetails = async () => {
      if (!user.username) {
        setError("User name not provided.");
        setFarmerDetails(null);
        setad(false);
        return;
      }

      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          `http://localhost:5000/api/farmers/detail?name=${user.username}`
        );

        if (!response.ok) {
          if (response.status === 404) {
            setError("Farmer not found.");
          } else {
            setError("Failed to fetch farmer details.");
          }
          setFarmerDetails(null);
          setad(false);
          return;
        }

        const data = await response.json();

        if (data && data.name) {
          setFarmerDetails(data);
          setUpdatedDetails({
            location: data.location,
            contactNumber: data.contactNumber,
            produce: data.produce,
          });
        } else {
          setError("No farmer details found.");
          setFarmerDetails(null);
          setad(false);
        }
      } catch (err) {
        console.error("Error fetching farmer details:", err);
        setError("An error occurred while fetching farmer details.");
        setFarmerDetails(null);
        setad(false);
      } finally {
        setLoading(false);
      }
    };

    fetchFarmerDetails();
  }, [user]);

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/farmers/delete?name=${user.username}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        setError("Failed to delete farmer profile.");
        return;
      }

      setFarmerDetails(null);
      alert("Profile deleted successfully.");
      setad(false);
    } catch (err) {
      console.error("Error deleting farmer profile:", err);
      setError("An error occurred while deleting the profile.");
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/farmers/update?name=${user.username}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedDetails),
        }
      );

      if (!response.ok) {
        setError("Failed to update farmer details.");
        return;
      }

      const data = await response.json();
      setFarmerDetails(data);
      setEditMode(false);
      alert("Details updated successfully.");
    } catch (err) {
      console.error("Error updating farmer details:", err);
      setError("An error occurred while updating the profile.");
    }
  };

  const handleProduceChange = (index, key, value) => {
    const newProduce = [...updatedDetails.produce];
    newProduce[index][key] = value;
    setUpdatedDetails({ ...updatedDetails, produce: newProduce });
  };

  const handleAddProduce = () => {
    setUpdatedDetails({
      ...updatedDetails,
      produce: [...updatedDetails.produce, { item: "", price: "" }],
    });
  };

  const handleRemoveProduce = (index) => {
    const newProduce = updatedDetails.produce.filter((_, i) => i !== index);
    setUpdatedDetails({ ...updatedDetails, produce: newProduce });
  };

  return (
    <div className={styles.farmerForm}>
      <h2>Farmer Details</h2>

      {loading && <p>Loading farmer details...</p>}

      {error && <p className={styles.error}>{error}</p>}

      {!loading && farmerDetails && (
        <div className={styles.farmerDetails}>
          {!editMode ? (
            <div className={styles.detailsCard}>
              <p><strong>Name:</strong> {farmerDetails.name}</p>
              <p><strong>Contact Number:</strong> {farmerDetails.contactNumber}</p>
              <p><strong>Location:</strong> {farmerDetails.location}</p>
              <div>
                <strong>Produce:</strong>
                <ul>
                  {farmerDetails.produce.map((prod, index) => (
                    <li key={index}>
                      {prod.item} - ${prod.price}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.actions}>
                <button className="btn btn-primary d-flex align-items-center gap-2" onClick={() => setEditMode(true)}> Edit</button>
                <button
                  onClick={handleDelete}
                  className="btn btn-danger d-flex align-items-center gap-2  shadow"
                >
                  Delete Profile
                </button>
              </div>
            </div>
          ) : (
            <div className={styles.editForm}>
              <label>
                Contact Number:
                <input
                  type="text"
                  value={updatedDetails.contactNumber}
                  onChange={(e) =>
                    setUpdatedDetails({
                      ...updatedDetails,
                      contactNumber: e.target.value,
                    })
                  }
                />
              </label>
              <label>
                Location:
                <input
                  type="text"
                  value={updatedDetails.location}
                  onChange={(e) =>
                    setUpdatedDetails({
                      ...updatedDetails,
                      location: e.target.value,
                    })
                  }
                />
              </label>
              <div>
                <strong>Produce:</strong>
                {updatedDetails.produce.map((prod, index) => (
                  <div key={index} className={styles.produceRow}>
                    <input
                      type="text"
                      placeholder="Item"
                      value={prod.item}
                      onChange={(e) =>
                        handleProduceChange(index, "item", e.target.value)
                      }
                    />
                    <input
                      type="number"
                      placeholder="Price"
                      value={prod.price}
                      onChange={(e) =>
                        handleProduceChange(index, "price", e.target.value)
                      }
                    />
                    <button
                      onClick={() => handleRemoveProduce(index)}
                      className="btn btn-danger" style={{ marginTop: "-10px" }}
                    >
                      remove
                    </button>
                  </div>
                ))}
                <button className="btn btn-warning d-flex align-items-center gap-2  shadow" style={{ marginBottom: "20px" }} onClick={handleAddProduce}>Add Produce</button>
              </div>
              <div className="d-flex align-items-center">
                <button
                  onClick={handleUpdate}
                  className="btn btn-success d-flex align-items-center gap-2  shadow me-2"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditMode(false)}
                  className="btn btn-secondary d-flex align-items-center gap-2  shadow"
                >
                  Cancel
                </button>
              </div>


            </div>
          )}
        </div>
      )}

      {!loading && !farmerDetails && !error && <p>No farmer details available.</p>}
    </div>


  );
};

export default FarmerGet;
