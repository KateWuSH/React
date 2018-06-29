import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SayHi from './SayHi';
import LikeButton from './LikeButton';
import LifeCycle from './LifeCycle';
import AlarmClockControl from './AlarmClockControl';
import registerServiceWorker from './registerServiceWorker';


//----- 方法三：component 內再嵌入 component -----

function Group() {
    return(
        <div>
            <App></App>
            <SayHi name ="Kate" />
            <SayHi name ="Ben" />
            <SayHi name ="Zonk" />
            <LikeButton name ="Patty" />
            <LifeCycle name ="Candy" />
            <AlarmClockControl />
        </div>
    );
}

ReactDOM.render(
    <Group />,
    document.getElementById('root')
);
registerServiceWorker();


//----- 方法二：直接在 index.js 置入 HTML (上方不可以 import SayHi) -----

//  function SayHi(props) {
//        return <h1>Hi123, {props.name}</h1>;
//    }
//    const people = {"name": "John"}; 

// ReactDOM.render(<SayHi name="Joh456n" />, document.getElementById('root'));
// registerServiceWorker(); 


//----- 方法一：直接 render SayHi.js -----
// ReactDOM.render(<SayHi name="Joh456n" />, document.getElementById('root'));
// registerServiceWorker();


// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
