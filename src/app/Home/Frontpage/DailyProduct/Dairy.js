import React from "react";
import DailyCard from "../Dailycard.js";
import "./Card2.css";
export default function Dairy({dairy}) {
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
        {dairy.map((dairy) => (
          <DailyCard
            key={dairy.id}
            image={dairy.image}
            description={dairy.description}
            productName={dairy.productName}
            price={dairy.price}
            contactNumber={dairy.contactNumber}
            
          />
        ))}
        
      </div>
    </div>
  );
}
