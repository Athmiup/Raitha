import React, { useState } from 'react';
import { useUser } from '../../UserContext';
import './styles.css';

const LoginPage = ({setLogin}) => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { user, setUser, check, setcheck } = useUser();
  // const [state,setState]=useState(false);
  const handleLogin = async () => {
    try {  
      const response = await fetch('https://backendraithapi.onrender.com/api/auth/login', { // Update URL if necessary
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (response.ok) {
        const { token, User } = data;
        // localStorage.setItem('token', token); 
        // alert(user.username);
        setUser(User);
        
        setcheck(true); // Close login page on success
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while logging in');
    }
  };

  return (



    <><style jsx>{`
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
          <h1 className="title">Login</h1>
          <input
            type="text"
            placeholder="Username"
            className="input-field"
            value={username}
            onChange={(e) => setUsername(e.target.value)} />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
          <button className="button" onClick={handleLogin}>
            Login
          </button>

          <div className="social-login">
            <button className="social-button google">Sign in with Google</button>
            <button className="social-button facebook">Sign in with Facebook</button>
          </div>

          <a href="/reset-password" className="forgot-password">Forgot Password?</a>

          <button onClick={() => setLogin(false)} className="switch-button">
            Signup
          </button>
        </div>
      </div></>
  );
};

export default LoginPage;
