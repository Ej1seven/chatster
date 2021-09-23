import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { formActions, loadingActions } from "../../store";
import { css } from "@emotion/react";
import BeatLoader from "react-spinners/BeatLoader";

const Register = () => {
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.load.showLoadingIcon);
  const email = useSelector((state) => state.form.email);
  const password = useSelector((state) => state.form.password);
  // const displayName = useSelector((state) => state.form.displayName);
  // const firstName = useSelector((state) => state.form.firstName);
  // const lastName = useSelector((state) => state.form.lastName);
  const loadingHandler = () => {
    dispatch(loadingActions.showLoadingIcon());
  };
  const handleEmailChanged = (e) => {
    dispatch(formActions.email(e.target.value));
  };
  const handlePasswordChanged = (e) => {
    dispatch(formActions.password(e.target.value));
  };
  // const handleDisplayNameChanged = (e) => {
  //   dispatch(formActions.displayName(e.target.value));
  // };
  // const handleFirstNameChanged = (e) => {
  //   dispatch(formActions.firstName(e.target.value));
  // };
  // const handleLastNameChanged = (e) => {
  //   dispatch(formActions.lastName(e.target.value));
  // };

  const submit = (event) => {
    event.preventDefault();
    // let registeredUser = {
    //   email: email,
    //   password: password,
    //   displayName: displayName,
    //   firstName: firstName,
    //   lastName: lastName,
    // };
    // console.log(email);
    // console.log(password);
    // console.log(displayName);
    // console.log(firstName);
    // console.log(lastName);
    loadingHandler();
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAcUSoG5Y93hsifS17N9wgXIMstnVwlnCQ",
      {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      }
    ).then((response) => {
      loadingHandler();
      if (response.ok) {
        console.log(response);
      } else {
        return response.json().then((data) => {
          let errorMessage = "Authentication failed!";
          if (data && data.error && data.error.message) {
            errorMessage = data.error.message;
          }
          alert(errorMessage);
        });
      }
    });
  };

  return (
    <>
      {/* <input
        type="text"
        onChange={handleDisplayNameChanged}
        className="rounded m-5 bg-transparent border-2 border-white w-4/5 "
        placeholder="Display Name"
        required
      />
      <input
        type="text"
        onChange={handleFirstNameChanged}
        className="rounded m-5 bg-transparent border-2 border-white w-4/5 "
        placeholder="First Name"
        required
      />
      <input
        type="text"
        onChange={handleLastNameChanged}
        className="rounded m-5 bg-transparent border-2 border-white w-4/5 "
        placeholder="Last Name"
        required
      /> */}
      {!isLoading ? (
        <>
          <input
            type="email"
            onChange={handleEmailChanged}
            className="rounded m-5 bg-transparent border-2 border-white w-4/5 "
            placeholder="Email"
            required
          />
          <input
            type="password"
            onChange={handlePasswordChanged}
            className="rounded m-5 bg-transparent border-2 border-white w-4/5 "
            placeholder="Password"
            required
          />
          <button className="border-2 rounded w-4/5 mb-4" onClick={submit}>
            Register
          </button>
        </>
      ) : (
        <>
          <BeatLoader color="#ffffff" css={override} size={50} />
        </>
      )}
    </>
  );
};

export default Register;

// const submit = (event) => {
//   event.preventDefault();
//   let registeredUser = {
//     email: email,
//     password: password,
//     displayName: displayName,
//     firstName: firstName,
//     lastName: lastName,
//   };
//   console.log(email);
//   console.log(password);
//   console.log(displayName);
//   console.log(firstName);
//   console.log(lastName);
//   fetch(
//     "https://chat-application-db-default-rtdb.firebaseio.com/register.json",
//     {
//       method: "post",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(registeredUser),
//     }
//   ).then((response) => {
//     console.log(response);
//   });
// };
