// External
import React from "react";

// Components
import LobbyList from "./components/LobbyList";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <p>
          Hello {this.props.name} with id {this.props.id}
        </p>
        <h1>Lobbies</h1>
        <LobbyList></LobbyList>
      </div>
    );
  }
}
