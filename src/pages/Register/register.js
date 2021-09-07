import React from "react";

const Register = () => {
  return (
    <>
      <input
        type="text"
        className="rounded m-5 bg-transparent border-2 border-white w-4/5 "
        placeholder="Display Name"
      />
      <input
        type="text"
        className="rounded m-5 bg-transparent border-2 border-white w-4/5 "
        placeholder="First Name"
      />
      <input
        type="text"
        className="rounded m-5 bg-transparent border-2 border-white w-4/5 "
        placeholder="Last Name"
      />
      <input
        type="text"
        className="rounded m-5 bg-transparent border-2 border-white w-4/5 "
        placeholder="Email"
      />
      <input
        type="password"
        className="rounded m-5 bg-transparent border-2 border-white w-4/5 "
        placeholder="Password"
      />
      <button className="border-2 rounded w-4/5 mb-4">Register</button>
    </>
  );
};

export default Register;
