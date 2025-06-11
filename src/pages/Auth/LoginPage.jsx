jsx
import React, { useState } from 'react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    console.log('Attempting to login with:', { email, password });
  };

  return (
    <div className="login-container"> {/* Placeholder for styling */}
      <form onSubmit={handleSubmit} className="login-form"> {/* Placeholder for styling */}
        <h2>Login</h2> {/* Placeholder for styling */}
        <div className="form-group"> {/* Placeholder for styling */}
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group"> {/* Placeholder for styling */}
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button"> {/* Placeholder for styling */}
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;