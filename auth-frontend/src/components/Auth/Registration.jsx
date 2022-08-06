import React from "react";

const Registration = () => {

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
