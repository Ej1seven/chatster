import { Switch, Route } from "react-router-dom";
import Login from "../src/pages/Login/login";
import Home from "../src/pages/Home/home";
import Header from "./components/Header/header";
import { useSelector, useDispatch } from "react-redux";
import { formActions } from "./store/index";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.authenticate.token);
  const email = useSelector((state) => state.form.email);
  const isLoggedIn = !!token;
  const handleDisplayNameChanged = (e) => {
    dispatch(formActions.displayName(e));
  };
  const handleFirstNameChanged = (e) => {
    dispatch(formActions.firstName(e));
  };
  const handleLastNameChanged = (e) => {
    dispatch(formActions.lastName(e));
  };
  if (isLoggedIn) {
    fetch(
      "https://chat-application-db-default-rtdb.firebaseio.com/profile.json"
    )
      .then((response) => response.json())
      .then((data) => {
        let users = Object.entries(data).map((key) => {
          return key;
        });
        let user = users.filter((user) => user[1].email === email);
        let userProfile = user[0][1];
        handleDisplayNameChanged(userProfile.displayName);
        handleFirstNameChanged(userProfile.firstName);
        handleLastNameChanged(userProfile.lastName);
      });
  }

  return (
    <div className={`app ${isLoggedIn && "background"}`}>
      {isLoggedIn && <Header />}
      <Switch>
        <Route path="/">
          {!isLoggedIn && <Login />}
          {isLoggedIn && <Home />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
