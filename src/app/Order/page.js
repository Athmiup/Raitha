'use client';

import Nevbar from '../Nevbar';
import Footer from '../Footer';
import { useUser } from '../UserContext';
import { useState, useEffect } from "react";
import Order from './Order'


export default function Page() {
  const { check } = useUser() || {};



  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>


        <Nevbar />




        {check && (<Order />)}

         {check && (<Footer />)}



    </div>


  );
}
