import { Switch, Route } from "react-router-dom";
import Login from "../src/pages/Login/login";
import './App.css';

function App() {
  return (
    <div className="app">
    <Switch>
      <Route path="/">
        <Login/>
      </Route>
    </Switch>
    </div>
  );
}

export default App;
