import React from "react";
export default class Home extends React.Component {
  render() {
    return <div className="message-box">Hello {this.props.name}</div>;
  }
}
