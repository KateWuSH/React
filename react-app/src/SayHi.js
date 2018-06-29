import React, { Component } from 'react';

// class SayHi extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }

class SayHi extends React.Component {
  //只要存在 constructor 就要调用 super()
  constructor(props) {
    //super() 是用來初始化 this 的，可以绑定事件到 this 上
    super(props);
    this.state = {date: new Date()};
  };

  render() {
    var myStyle = {
      fontSize: 20,
      color: 'green'
    };
    return (
      <div>
        <h1 style = {myStyle}>{this.state.date.toLocaleTimeString()} Hi, {this.props.name} </h1>
      </div>
    )
  }
}

export default SayHi;