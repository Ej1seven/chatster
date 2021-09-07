import React from "react";
import { useSelector, useDispatch } from "react-redux";
import logo from "../../photos/logo-white.png";
import "./login.css";

const Login = () => {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.show);
  const showPassword = useSelector((state) => state.passwordIcon);

  const showHandler = () => {
    dispatch({ type: "toggleRegistrationPage" });
  };
  const showPasswordHandler = () => {
    dispatch({ type: "togglePasswordIcon" });
  };

  return (
    <div>
      <div transition-style className="splash-screen">
        <p className="app-title">Chatster</p>
        <img alt="logo" className="app-logo" src={logo} />
        <form className="rounded flex justify-center flex-col items-center	">
          <p className="form-title">Chatster</p>
          <img alt="logo" className="form-logo h-1/3" src={logo} />
          {!showModal ? (
            <>
              <input
                type="text"
                className="rounded m-5 bg-transparent border-2 border-white w-3/5 "
                placeholder="Email"
              />
              <input
                type="text"
                className="rounded m-5 bg-transparent border-2 border-white w-3/5 "
                placeholder="Password"
              />
              <i class="fas fa-eye icon"></i>
              <button className="border-2 rounded w-3/5 mb-4"> Login</button>
            </>
          ) : (
            <></>
          )}
          <p>
            Don't have an account?
            <span className="sign-up" onClick={showHandler}>
              Sign up
            </span>
          </p>
          <p>
            Sign in as a<span className="sign-up"> Demo User</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
