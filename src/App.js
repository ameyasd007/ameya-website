import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

console.log(process.env.npm_package_version);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-headerr">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <CommentForm />
          <CommentList /> */}
        </header>
      </div>
    );
  }
}

export default App;
