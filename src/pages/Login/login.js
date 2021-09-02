import React from "react";
import logo from "../../photos/logo-white.png";
import "./login.css";

function Login() {
    return (
      <div> 
      <div transition-style className="splash-screen">
      <p className="app-title">Chatster</p>
      <img className="app-logo" src={logo}/>
      </div>
      </div>
    );
  }
  
  export default Login;