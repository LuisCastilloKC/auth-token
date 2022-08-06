import React, { useState } from "react";

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [usernameData, setUsernameData] = useState('')


    const usernameHandler = (event) => {
        setUsername(event.target.value)
    }
    
    const passwordHandler = (event) => {
        setPassword(event.target.value)
    }

    const loginOnSubmit = (event) => {
        event.preventDefault()
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                "Content-type": "Application/json",
                "Accept": " Application/json"
            },
            body: JSON.stringify(
                {user: {
                    username: username,
                    password: password
                }}
            )
        })
        .then(response => response.json())
        .then(userData => {
            if(userData.error){
            setUsernameData(userData.error)
        } else {
            setUsernameData(userData.user.username)
        }
    })
           

    }


  return (
    <div>
      <h1>Login</h1>
      <div>
        <form onSubmit={loginOnSubmit}>
          <div>
            <label>Username:</label>
            <input type="text" onChange={usernameHandler}/>
          </div>
          <div>
            <label>Password:</label>
            <input type="password" name="password" autoComplete="on" onChange={passwordHandler} />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
      <h1> {usernameData.toUpperCase()}</h1>
    </div>
  );
}

export default Login
