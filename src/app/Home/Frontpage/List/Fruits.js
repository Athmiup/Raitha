import React, { useRef } from "react";
import Card from "../Card.js";
import "../Card.css";

export default function Fruits({ fruits }) {
  const containerRef = useRef(null);

  const handleScroll = (direction) => {
    const container = containerRef.current;
    const scrollAmount = container.offsetWidth; // Scroll by the width of the container

    if (direction === "next") {
      if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
        // If at the end, go back to the beginning
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    } else {
      if (container.scrollLeft <= 0) {
        // If at the beginning, go to the end
        container.scrollTo({ left: container.scrollWidth - container.offsetWidth, behavior: "smooth" });
      } else {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <div style={{ padding: "20px 0", margin: "50px", backgroundColor: "#eafbea", borderRadius: "20px" }}>
      <div style={{ textAlign: "center", marginBottom: "5px" }}>
        <button
          onClick={() => handleScroll("prev")}
          style={{ padding: "10px 20px", margin: "0 10px", backgroundColor: "rgb(242 242 242)", borderRadius: "50px" }}
        >
          Previous
        </button>
        <button
          onClick={() => handleScroll("next")}
          style={{ padding: "10px 20px", margin: "0 10px", backgroundColor: "rgb(242 242 242)", borderRadius: "50px" }}
        >
          Next
        </button>
      </div>
      <div
        className="card-container"
        ref={containerRef}
        style={{
          display: "flex",
          overflowX: "scroll",
          scrollBehavior: "smooth",
          gap: "20px",
          padding: "50px",
        }}
      >
        {fruits.map((fruit) => (
          <Card
            key={fruit.id}
            image={fruit.image}
            title={fruit.title}
            productName={fruit.productName}
            originalPrice={fruit.originalPrice}
            discount={fruit.discount}
            percentageLikes={fruit.percentageLikes}
            contactNumber={fruit.contactNumber}
          />
        ))}
      </div>
    </div>
  );
}
