'use client';

import Nevbar from '../Nevbar';
import Footer from '../Footer';
import FarmerForm  from './FarmerForm ';
import { useUser } from '../UserContext';
import { useState, useEffect } from "react";
import FarmerGet from './FarmerGet';
export default function Page() {
    const {check} = useUser() || {}; 
    
    const [ad,setad]=useState(true)
    return (
       <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
           
           
            <Nevbar/>
           
          
            {check && (
                ad ? (
                    <FarmerGet setad={setad}/>
                ) : (
                    <FarmerForm setad={setad}/>
                )
            )}

            {check&& ( <Footer></Footer>)}
            
     
            </div>
       
      
    );
}
