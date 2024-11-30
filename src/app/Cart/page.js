'use client';

import Nevbar from '../Nevbar';
import Footer from '../Footer';
import { useUser } from '../UserContext';
import { useState, useEffect } from "react";
import List from './List'

export default function Page() {
  const { check} = useUser() || {};



  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>


        <Nevbar />




        {check && (<List/>)}

        {check && (<Footer />)}



    </div>


  );
}
