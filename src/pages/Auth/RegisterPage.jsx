jsx
import React from 'react';

function RegistrationPage() {
  return (
    <div className="registration-container">
      <h2>Register</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit" className="register-button">Register</button>
      </form>
    </div>
  );
}

export default RegistrationPage;