import React, { Component } from 'react';
import './App.css';
import Container from "./Container";

class App extends Component {
    render() {
      return (
        <div className="app">
          <div className="header">FIFA 2018 WORLD CUP</div>
        	<Container />
        </div>
      );
    }
}

export default App;
