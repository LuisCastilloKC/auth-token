import React, { useState } from "react";

const Login = () => {
    const [username, setUsername] = useState('')

  return (
    <div>
      <h1>Login</h1>
      <div>
        <form>
          <div>
            <label>Username:</label>
            <input type="text" />
          </div>
          <div>
            <label>Password:</label>
            <input type="text" />
          </div>
          <div>
            <button>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
