import React, { Component } from 'react';
import './App.css';
import { Button } from 'antd';
import Header from "./components/CommonHeader";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className = "app-header">
          <Header></Header>
        </div>
      </div>
    );
  }
}


export default App;
