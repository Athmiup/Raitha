// Nevbar.js
"use client"
import React from 'react';
// import { useState, useEffect } from "react";
import { useUser } from './UserContext';
import { useState, useEffect } from "react";
import Link from 'next/link';


const Nevbar = () => {
  const { user, setUser, setcheck } = useUser() || {}; // Fallback for user context

  const [error, setError] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if window is defined before using it
    if (typeof window !== "undefined") {
      const handleResize = () => setIsMobile(window.innerWidth < 1000);
      
      // Set initial state when component mounts on the client-side
      setIsMobile(window.innerWidth < 1000);

      // Add event listener for resize events
      window.addEventListener('resize', handleResize);

      // Clean up the event listener on component unmount
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [])

  const avatarStyle = {
    marginRight: isMobile ? '-110px' : '0px', // For screens smaller than 1000px, width becomes 50px, else 40px
    // Similar adjustment for height
    backgroundColor: 'rgb(209 255 221)',
    objectFit: 'cover',
    cursor: 'pointer',
  };
  const handleDelete = async () => {
    try {
      const response = await fetch(
        `https://backendraithapi.onrender.com/api/auth/deleteuser?username=${user.username}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        setError("Failed to delete user profile.");
        return;
      }

      setUser(null);
      setcheck(false);
      alert("Profile deleted successfully.");

    } catch (err) {
      console.error("Error deleting farmer profile:", err);
      setError("An error occurred while deleting the profile.");
    }
  };



  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        backgroundColor: '#e6f8dc',
        position: 'sticky',
        top: 0,
        zIndex: 1020,
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className="container-fluid">
        <Link href="/" className="navbar-brand">Raithapi</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/Order" className="nav-link">
                Order
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Seemore
              </a>
              <ul
                className="dropdown-menu"
                style={{ backgroundColor: 'rgb(209 255 221)' }}
              >
                <li>
                  <Link href="/Farmer" className="dropdown-item">
                    Farmer Details
                  </Link>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link href="/Price" className="dropdown-item">
                    Price
                  </Link>
                </li>
                <li>
                  <Link href="/Cart" className="dropdown-item">
                    Cart
                  </Link>
                </li>
                <li>
                  <Link href="/History" className="dropdown-item">
                    History
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <div className="dropdown" >
              <img
                src="https://cdn-icons-png.flaticon.com/512/61/61205.png"
                alt="Account"
                className="rounded-circle"
                style={{
                  width: '40px',
                  height: '40px',
                  objectFit: 'cover',
                  cursor: 'pointer',
                }}
                id="accountDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              />
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="accountDropdown"

                style={avatarStyle}
              >
                {user ? (
                  <div>
                    <li>
                      <span className="dropdown-item-text">
                        Hi, {user.username}
                      </span>
                    </li>
                    <li>
                      <Link href="/profile" className="dropdown-item">
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link href="/settings" className="dropdown-item">
                        Settings
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li className="dropdown-item" onClick={handleDelete}>

                      Logout

                    </li>
                  </div>
                ) : (
                  <li>
                    <Link href="/" className="dropdown-item">
                      Login
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nevbar;
