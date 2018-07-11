import React, { Component } from 'react';
import './CssStyleBox.css';
import styled from 'styled-components';
import Immutable from 'immutable';

class CssStyleTest extends Component {
    render() {
        return <div>
            <h2>React 寫 CSS 的三種方法 </h2>
            <CssStyleBox />
            <InlineBox />
            <StyledComponentBox />
        </div>
    }
}

//載入 css 檔案 
const CssStyleBox = () => (
  <div className="CssStyleBox">
    <p>CSS Style Box</p>
  </div>  
);

// inline css
const divStyle = {
    width: '50%',
    margin: '20px auto',
    border: '2px solid green'
}

const pStyle = {
    fontSize: '20px',
    color: 'green'
}

const InlineBox = () => (
    <div style={divStyle}>
        <p style={pStyle}>Inline Style Box</p>
    </div>
)

// styled-components
const Div = styled.div`
    width: 50%;
    margin: 20px auto;
    border: 2px dotted gray;
`;

const Paragraph = styled.p`
    font-size: 20px;
    color: gray;
`;
const StyledComponentBox = () => (
    <Div>
        <Paragraph>Styled-component Box</Paragraph>
    </Div>
)


export default CssStyleTest;