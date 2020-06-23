// External
import React from "react";
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
import { getID, getName } from "./utils/requests";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: undefined, name: undefined };
  }

  componentWillMount() {
    checkAndSetID()
      .then(([id, name]) => {
        this.setState({ id, name });
      })
      .catch((e) => console.error(e));
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/">
              <Home id={this.state.id} name={this.state.name} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

function checkAndSetID() {
  return new Promise(async (resolve, reject) => {
    const myID = getCookie("id");
    if (!myID) {
      try {
        const [id, name] = await getID(prompt("Vad heter du?"));
        setCookie("id", id);
        resolve([id, name]);
      } catch (e) {
        reject(e);
      }
    } else {
      const [id, name] = await getName(myID);
      resolve([id, name]);
    }
  });
}

export default App;
