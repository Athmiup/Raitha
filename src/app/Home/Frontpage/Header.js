

import Fruits from "./List/Fruits.js";
import Vegitable from "./List/Vegitables.js";
import Pules from "./List/Pules.js";
import Dairy from "./DailyProduct/Dairy.js";
import Stample from "./DailyProduct/Stample.js";
import Caursole from "./Caursole.js";
import products from "./data.json";
import React from 'react';
import About from "./About.js";

export default function Header() {
 return  (
    <>
      <h3 style={{textAlign: "center", marginTop: "100px" }}>Fresh Fruits  </h3>
      <Fruits fruits={products.fruits}/>
      <h3 style={{textAlign: "center" }}> Vegetables  </h3>
      <Vegitable vegetables={products.vegetables}/>
       <h3 style={{textAlign: "center" }}>Pulses</h3>
      <Pules pules={products.pules}/>
 
     <h3 style={{textAlign: "center" }}>Dairy Product</h3>
      <Dairy dairy={products.dairy}/>
      <h3 style={{textAlign: "center" }}>Raice And Wheat</h3>
      <Stample stample={products.stample}/> 
      <Caursole/> 
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <About/>
    
    </>

  );
}
