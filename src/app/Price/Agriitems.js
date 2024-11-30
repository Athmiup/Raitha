import React from 'react'
// import   PropTypes  from 'prop-types'
import "./Agriitems.css";
export default function Agriitems(props) {

  
        
    
      
    return (
        <div ><div className="agri-gridcontainer">
           <div style={{ fontWeight: 'bold' }}>{props. commodity}</div>
           <div>{props.Title}</div>
          
           <div> {props. market}</div>
           
           {/* <div>{props. variety}</div> */}
           <div>    {props. arrival_date}</div>
           <div > {props. min_price}</div>
           <div> {props. max_price}</div>
           </div>
    
        </div>
    )
}