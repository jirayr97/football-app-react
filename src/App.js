import React, { Component } from 'react';
import './App.css';
import Container from "./Container";

class App extends Component {
    render() {
      return (
        <div className="app">
          <div className="header">Header</div>
        	<Container />
          <div className="footer">footer</div>

        </div>
      );
    }
}

export default App;
