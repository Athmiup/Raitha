'use client';
import { useState, useEffect } from 'react';
import Nevbar from "../Nevbar";
import Loginpage from "./Register/Login";
import SignUpage from "./Register/SignUp";
import Header from "./Frontpage/Header";
import Footer from "../Footer";
import Image from "./Frontpage/Image";
import { useUser } from '../UserContext';


export default function Page() {

  const [login, setLogin] = useState(true);
  const {check } = useUser() || {};
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.min.js').catch((err) =>
      console.error('Failed to load Bootstrap JS:', err)
    );
  }, []);

  

  return (
    // <UserProvider>
    <>
      <Nevbar/>
      <div style={{ position: 'relative', height: '100vh' }}>
            <Image />
            {!check && (
                login ? (
                    <Loginpage setLogin={setLogin}/>
                ) : (
                    <SignUpage setLogin={setLogin}/>
                )
            )}
        </div>
            <Header />
            <Footer />
            </>     
    // </UserProvider> 
  );
}


