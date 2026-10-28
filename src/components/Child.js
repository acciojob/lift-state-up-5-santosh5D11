import React from "react";

export default function Child({ isLoggedIn, onLogin, handleSubmit }) {
  function handleSubmit(e) {
    e.preventDefault();
    onLogin();
  }

  return (
    <div>
      {isLoggedIn ? (
        <p>You are logged in!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <lable>Username : </lable>
            <input type="text" required />
          </div>

          <div className="form-row">
            <label>Password :</label>
            <input type="password" required />
          </div>
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
}
