import React, { useState } from "react";

const Registration = () => {
    const [usernameReg, setUsernameReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')
    const [emailReg, setEmailReg] = useState('')

    const usernameHandler = (event) =>{
        setUsernameReg(event.target.value)
        console.log(event.target.value)
    }

    const passwordHandler =(event) => {
        setPasswordReg(event.target.value)
        console.log(event.target.value)
    }

    const emailHandler = (event) => {
        setEmailReg(event.target.value)
        console.log(event.target.value)
    }

    const onSubmitHandler = () => {

    }
  

  return (
    <div>
      <h1>Registration</h1>
      <div>
        <form onSubmit={onSubmitHandler}>
          <div>
            <label>Username:</label>
            <input type="text" onChange={usernameHandler} />
          </div>
          <div>
            <label>Email:</label>
            <input type="text" onChange={emailHandler} />
          </div>
          <div>
            <label>Password:</label>
            <input type="text" onChange={passwordHandler} />
          </div>
          <div>
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration
