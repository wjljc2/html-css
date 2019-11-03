import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
                shouye
                <button onClick = {()=>{
                    this.props.history.go(-1);
                }}>&lt;</button>
            </div>
        );
    }
}

export default withRouter(Header);