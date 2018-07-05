import React, { Component } from 'react';
import './LikeButton.css';

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {like: false};
    };

    //定義初始狀態
    getInitialState = function() {
        return {like: false};
    };

    handleClick = function() {
        this.setState({liked: !this.state.liked});
    };

    render() {
        var text = this.state.liked ? '喜歡' : '不喜歡';

        return (
            //如果只有單一個標籤，可以直接 return + 標籤；若有多個標籤，則需用 div 或 span 包起來，
            //因為 JSX 每個節點都對應到一個 javascript 函數，所以 component 的 render 裡只能回傳一個 root nodes
            <div className="LikeButton">
                <p>你<b> {text} </b>我</p>
                <button onClick={this.handleClick}>點我切換狀態</button>
            </div>
        )
        
    };
}

export default LikeButton;