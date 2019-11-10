import React, { Component } from 'react';
import {Table} from 'antd';
import axios from 'axios';
import Mock from './../Mock/mock';
import './Students.css';

    const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '生日',
      dataIndex: 'birthday',
      key: 'birthday',
    },
  ];

  class Student extends Component {
    constructor(){
      super();
      this.state = {
        dataSource:[]
      }
    }
    componentWillMount(){
        axios.get('http://www.weichuang.com/student').then((res)=>{
            this.setState ({
              dataSource : res.data.list
            })
        }).catch((res)=>{
          console.log("拦截失败");
        })
    }
    render() {
        return (
            <div className="student-list">
                学生列表
                <Table dataSource={this.state.dataSource} columns={columns} />;
            </div>
        );
    }
}

export default Student;