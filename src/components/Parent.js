import React from "react";
import { useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [isLoggedIn, setIsLoggendIn] = useState(false);

  function handleLogin() {
    setIsLoggendIn(true);
  }

  return (
    <div>
      <h1>Parent Component</h1>

      <Child isLoggedIn={isLoggedIn} onLogin={handleLogin} />
    </div>
  );
}
