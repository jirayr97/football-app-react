import React, { Component } from 'react';
import './App.css';
import Container from "./Container";
import News from "./News";
import Header from "./Header";
import { Route} from "react-router";

class App extends Component {
    render() {
      return (
        <div className="app">
            <Header />
    		<Route exact path='/' component={Container}/>
			<Route path='/news' component={News}/>         
        </div>
      );
    }
}

export default App;
