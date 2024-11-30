import React from "react";

export default function Carousel() {
  return (
    
    <>
      
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner"  style={{
    maxWidth: "75%", // Restrict carousel width to 75% of screen width
    margin: "-60px auto",
     // Center the carousel horizontally
  }}>
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="https://media.istockphoto.com/id/1183221474/photo/old-grandfather-planting-seeds-in-the-ground-at-bassien-beach-mumbai-maharashtra-india.webp?s=2048x2048&w=is&k=20&c=8q3E-sceehw9QNB0SNmXvr9v_J2QpIObyr-2Z-X4mvk="   style={{
        maxWidth: "100%", // Ensure the image doesn’t exceed container width
        maxHeight: "60vh", // Restrict image height to 50% of viewport height
        objectFit: "cover", // Preserve original image proportions
        borderRadius: "20px",
        padding:"10px" // Add border radius
      }}className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://media.istockphoto.com/id/472120413/photo/tamil-pickers-collecting-tea-leaves-on-plantation-southern-india.jpg?s=2048x2048&w=is&k=20&c=9V1yqJMg3cHZi05RYFjeAXr-hbW2bHKTqJ9_ypskJl0="  style={{
        maxWidth: "100%", // Ensure the image doesn’t exceed container width
        maxHeight: "60vh", // Restrict image height to 50% of viewport height
        objectFit: "cover", // Preserve original image proportions
        borderRadius: "20px", 
        padding:"10px"// Add border radius
      }} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://media.istockphoto.com/id/2148858499/photo/indian-woman-collecting-a-wheat-india.jpg?s=2048x2048&w=is&k=20&c=rrblH2nm-Ux_DG8gqhKJ4SygUzCsQ-iRaLPJrGwS-bg="  style={{
        maxWidth: "100%", // Ensure the image doesn’t exceed container width
        maxHeight: "60vh", // Restrict image height to 50% of viewport height
        objectFit: "cover", // Preserve original image proportions
        borderRadius: "20px",
        padding:"10px" // Add border radius
      }} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
       
    </>
     
    
  );
}





