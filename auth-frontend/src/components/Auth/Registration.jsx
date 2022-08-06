import React, { useState } from "react";

const Registration = () => {
    const [usernameReg, setUsernameReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')

    const usernameHandler = (event) =>{
        setUsernameReg(event.target.value)
        console.log(event.target.value)
    }
  

  return (
    <div>
      <h1>Registration</h1>
      <div>
        <form>
          <div>
            <label>Username:</label>
            <input type="text" onChange={usernameHandler} />
          </div>
          <div>
            <label>Password:</label>
            <input type="text" />
          </div>
          <div>
            <button>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration
