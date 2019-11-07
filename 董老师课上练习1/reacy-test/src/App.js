import React, { Component } from 'react';
import store from './store';
import {Add,Reduce} from './action';



class App extends Component {
    render() {
        return (
            <div>
                haha   
                <button onClick = {() =>{
                        store.dispatch(Add());
                    }
                }>click + 1</button>
                <button onClick = {()=>{
                        store.dispatch(Reduce());
                    }
                }>click - 1</button>
            </div>
        );
    }
}

export default App;