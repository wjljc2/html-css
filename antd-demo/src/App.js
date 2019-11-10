import React, { Component } from 'react';
import './App.css';
import { Button } from 'antd';
import Header from "./components/CommonHeader";
import Nav from './components/Nav';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Teacher from './page/Teacher';
import Home from './page/Home';
import Student from './page/Student';

class App extends Component {
  render() {
    return (
      
        <div className="App">
           <Router>
              <div className = 'app-left'>
                <Nav></Nav>
              </div>
              <div className = 'app-right'>
                <Header></Header>
                <Route path = "/home"component={Home}></Route>
                <Route path = "/teacher/add" component={Teacher}></Route>
                <Route path = "/student" component = {Student}></Route>
              </div>
            </Router>
        </div>
      
     
    );
  }
}


export default App;