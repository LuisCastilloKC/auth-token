import React, { useState } from "react";

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const usernameHandler = (event) => {
        setUsername(event.target.value)
    }
    
    const passwordHandler = (event) => {
        setPassword(event.target.value)
    }

  return (
    <div>
      <h1>Login</h1>
      <div>
        <form>
          <div>
            <label>Username:</label>
            <input type="text" onChange={usernameHandler}/>
          </div>
          <div>
            <label>Password:</label>
            <input type="text" onChange={passwordHandler} />
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
