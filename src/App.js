import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import Home from './components/Home/Home'
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <Home />
      </div>
    );
  }
}

export default App;
