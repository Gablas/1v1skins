// External
import React from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

// Views
import Home from "./views/home/Home.jsx";

// Utils
import { getCookie, setCookie } from "./utils/cookies";

function App() {
  checkID();
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/id/:id">
            <Test></Test>
          </Route>
          <Route path="/">
            <Home name={getCookie("id")} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function Test() {
  let { id } = useParams();
  return <h2>{id}</h2>;
}

async function checkID() {
  if (!getCookie("id")) {
    try {
      const id = await getID();
      setCookie("id", id);
    } catch (e) {
      console.error(e);
    }
  }
}

function getID() {
  return new Promise((resolve, reject) => {
    axios
      .get("/getid")
      .then(function (response) {
        resolve(response.data.id);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}

export default App;
