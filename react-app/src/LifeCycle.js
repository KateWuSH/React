import React, { Component } from 'react';

class LifeCycle extends React.Component {
    constructor(props) {
      super(props);
      console.log('constructor');
      this.handleClick = this.handleClick.bind(this);
      console.log(this);
      this.state = {date: new Date()};
    }
  
    handleClick() {
      this.setState({date: new Date()});
    }
  
    //插入DOM前呼叫
    componentWillMount() {
      console.log('componentWillMount');
    }
  
    //插入DOM後呼叫
    componentDidMount() {
      console.log('componentDidMount');
    }
    
    //setProps() 後呼叫
    componentWillReceiveProps() {
      console.log('componentWillReceiveProps');
    }
    
    //回傳true才會更新DOM，回傳false則停止更新
    shouldComponentUpdate(nextProps, nextState) {
      console.log('shouldComponentUpdate');
      console.log('nextProps:'+nextProps.name);
      console.log('nextState:'+nextState.date);
      return true;
    }
    
    //更新元素前呼叫
    componentWillUpdate() {
      console.log('componentWillUpdate');
    }
    
    //更新元素後呼叫
    componentDidUpdate() {
      console.log('componentDidUpdate');
    }
    
    //remove元素後呼叫
    componentWillUnmount() {
      console.log('componentWillUnmount');
    }
  
    render() {
      return <h1 onClick={this.handleClick}>{this.state.date.toLocaleTimeString()} Hi, {this.props.name}</h1>;
    }
  }
  
  export default LifeCycle;