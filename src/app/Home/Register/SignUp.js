import React, { useState } from 'react';
import { useUser } from '../../UserContext';
import './styles.css';

const SignUpPage = ({ setLogin}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
   const { user, setUser, check, setcheck } = useUser();

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('https://backendraithapi.onrender.com/api/auth/register', { // Update URL if necessary
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        const { message, User } = data;
        // localStorage.setItem('token', token); 
        // alert(user.username);
        setUser(User);
        
        setcheck(true); // Switch to login page on success
    } else {
        console.log(data); // Add this line to see the error details
        alert(data.message || 'Signup failed');
    }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during signup');
    }
  };

  return (<>
   
   <style jsx>{`
     body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #e5f4e3; /* Light earthy green */
}
  `}</style>

    <div className="container">
      <div className="form-card">
        <h1 className="title">Signup</h1>
        <input
          type="text"
          placeholder="Username"
          className="input-field"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="input-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="input-field"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button className="button" onClick={handleSignup}>
          Sign up
        </button>

        <div className="social-login">
          <button className="social-button google">Sign up with Google</button>
          <button className="social-button facebook">Sign up with Facebook</button>
        </div>

        <button onClick={() => setLogin(true)} className="switch-button">
          Login
        </button>
      </div>
    </div></>
  );
};

export default SignUpPage;
