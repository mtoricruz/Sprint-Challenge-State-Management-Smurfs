import React, { Component } from "react";
import "./App.css";

import SmurfList from '../components/SmurfList';
import Form from '../components/Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
        <SmurfList />
      </div>
    );
  }
}

export default App;
