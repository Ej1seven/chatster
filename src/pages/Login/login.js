import React from "react";
import logo from "../../photos/logo-white.png";
import "./login.css";

function Login() {
  return (
    <div>
      <div transition-style className="splash-screen">
        <p className="app-title">Chatster</p>
        <img alt="logo" className="app-logo" src={logo} />
        <form className="rounded flex justify-center flex-col items-center	">
          <p className="form-title">Chatster</p>
          <img alt="logo" className="form-logo h-1/3" src={logo} />
          <input
            type="text"
            className="rounded m-6 bg-transparent border-2 border-white"
            placeholder="Email"
          />
          <input
            type="text"
            className="rounded m-6 bg-transparent border-2 border-white"
            placeholder="Password"
          />
        </form>
      </div>
    </div>
  );
}

export default Login;
