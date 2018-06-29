import React, { Component } from 'react';

class AlarmClockControl extends React.Component {
    //先用 constructo 和 super 把父組件的 props 參數傳入
    //props 可從父組件傳入資料，資料是從父元件 -> 子元件的單向流動
    //state 只受子組件元件控制
    constructor(props) {
        super(props);
        //將有 this 的事件在此進行綁定
        this.OpenAlarmClockClick = this.OpenAlarmClockClick.bind(this);
        this.CloseAlarmClockClick = this.CloseAlarmClockClick.bind(this);
        this.state = {isAlarm: false};
    }

    OpenAlarmClockClick() {
        //使用 setState 時，元件會進行重新繪製
        this.setState({isAlarm: true});
    }

    CloseAlarmClockClick() {
        this.setState({isAlarm: false});
    }

    render() {
        const isAlarm = this.state.isAlarm;

        let button = null;
        if (isAlarm) {
            button = <ClockAlarmButton ring="off" onClick={this.CloseAlarmClockClick} />;
        } else {
            button = <ClockAlarmButton ring="on" onClick={this.OpenAlarmClockClick} />;
        }

        return (
        <div>
            <Action isAlarm={isAlarm} />
            {button}
        </div>
        );
    }
}

function Morning(props) {
  return <h1>Get up!</h1>;
}  

function Night(props) {
  return <h1>Sleep zzz...</h1>;
}

function Action(props) {
  const isAlarm = props.isAlarm;
  if (isAlarm) {
    return <Morning />;
  }
    return <Night />;
}

function ClockAlarmButton(props) {
  return (
    <button onClick={props.onClick}>
      {props.ring==='on'?'Open Alarm Clock': 'Close Alarm Clock'}
    </button>
  );
}

export default AlarmClockControl;