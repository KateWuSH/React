import React, { Component } from 'react';

// class SayHi extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }

class SayHi extends React.Component {
  constructor(props) {
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
        <p>TEST 1123</p>
      </div>
    )
  }
}

export default SayHi;