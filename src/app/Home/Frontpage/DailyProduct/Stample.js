import React from "react";
import DailyCard from "../Dailycard.js";
import "./Card2.css";
export default function Stample({stample}) {
  return (
    <div
      style={{
        padding: "20px",
        margin: "50px auto",
        
        borderRadius: "20px",
        maxWidth: "1200px", // Center and limit max width
      }}
    >
      <div
        className="card-container"
      
      >
        {stample.map((stample) => (
          <DailyCard
            key={stample.id}
            image={stample.image}
            description={stample.description}
            productName={stample.productName}
            price={stample.price}
            contactNumber={stample.contactNumber}
            
          />
        ))}
        
      </div>
    </div>
  );
}
