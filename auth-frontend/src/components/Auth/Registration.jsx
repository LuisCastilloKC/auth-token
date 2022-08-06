import React, { useState } from "react";

const Registration = () => {
    const [userReg, setUserReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')
  

  return (
    <div>
      <h1>Registration</h1>
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
            <button>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration
