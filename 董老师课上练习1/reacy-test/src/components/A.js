import React, { Component } from 'react';

class A extends Component {
    render() {
        return (
            <div>
                A页面的内容
                <button onClick = {()=>{
                    this.props.history.push('/');
                }
                    
                }>跳转到home页</button>
            </div>
        );
    }
}

export default A;