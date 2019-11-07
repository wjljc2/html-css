import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import A from './components/A';
import B from './components/B';
import E from './components/E';
import G from './components/G';
import H from './components/H';
import Children from './components/Children';
import Home from './components/Home';

import {HashRouter as 
  Router,
  NavLink,
  Route,
  Switch,
  Redirect,
  Prompt
} from "react-router-dom";
import Jump from './components/Jump';

function App() {
  return (
    <div className="App">
      
      <hr></hr>
      <Router>
        <Header></Header>

        <NavLink exect activeClassName = "selected" to = "/">首页</NavLink> |
        <NavLink to = "/a/5">A页面</NavLink> |
        <NavLink to = "/b">B页面</NavLink> |
        <NavLink to = "/children">children页面</NavLink> |
        <hr></hr>
        <Jump to = "/e">jump到e页面</Jump> |
        <Jump to = "/g">jump到g页面</Jump> |
        <Jump to = "/h">jump到h页面</Jump> |
        {/* 
          由于react中Route的path是模糊判定 所以有两种方法解决 
          1 在path 前 + exact 
          2 在HashRouter 中 多添加一个 Switch属性, 不过此时必须把最简单的放在最后面 选择就近的path对象
        */}
        {/* <Route exact path = "/" component = {Home}></Route>
        <Route path = "/a" component = {A}></Route>
        <Route path = "/b" component = {B}></Route> */}
        {/* <Switch> */}
          <Route exact path = "/a/:id" component = {A}></Route>
          <Route exact path = "/b" render = {()=>{
              return <Redirect to = "/"></Redirect>
          }}></Route>
          {/* <Route exact path = "/children" children = {(props)=>{
            console.log(props.match);
            return (
              <h2>111</h2>
            )
          }}></Route> */}
          <Route exact path = "/e" component = {E}></Route>
          <Route exact path = "/g" component = {G}></Route>
          <Route exact path = "/h" component = {H}></Route>
          <Route exact path = "/" component = {Home}></Route>
          {/* <Prompt when={true} message = "确定离开吗?"></Prompt> */}
        {/* </Switch> */}

        <Footer></Footer>

      </Router>

    </div>
  );
}

export default App;
