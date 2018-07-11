import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SayHi from './SayHi';
import LikeButton from './LikeButton';
import LifeCycle from './LifeCycle';
import AlarmClockControl from './AlarmClockControl';
import Form from './Form';
import CssStyleTest from './CssStyleTest';
// import ImmutableJS from './ImmutableJS';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//----- React-router-dom -----

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)
  
ReactDOM.render(
  <Router>
    <div>
      <ul className='Nav'>
        <li><Link to="/">App</Link></li>
        <li><Link to="/about">About</Link></li>
        <li>
          <Link to={{
            pathname: '/sayhi',
            state: { id: '1', message: 'Hello, component' }
          }}>Say Hi</Link>
        </li>
        <li><Link to="/likebutton">Like Button</Link></li>
        <li><Link to="/alarm">Alarm Clock Control</Link></li>
        <li><Link to="/form">Form</Link></li>
        <li><Link to="/cssstyletest">Css Style Test</Link></li>
        {/* <li><Link to="/immutablejs">Immutable JS</Link></li> */}
      </ul>
      <hr/>
      <Route exact path="/" component={App}/>
      <Route path="/about" component={About}/>
      <Route path="/sayhi" render={props =><SayHi name="Joe" {...props} />} />
      <Route path="/likebutton" component={LikeButton}/>
      <Route path="/alarm" component={AlarmClockControl}/>
      <Route path="/form" component={Form}/>
      <Route path="/cssstyletest" component={CssStyleTest}/>
      {/* <Route path="/immutablejs" component={ImmutableJS}/> */}
    </div>
  </Router>,
  document.getElementById('root'));
registerServiceWorker();

  //----- 方法三：component 內再嵌入 component -----

// function Group() {
//     return(
//         <div>
//             <App></App>
//             <SayHi name ="Kate" />
//             <SayHi name ="Ben" />
//             <SayHi name ="Zonk" />
//             <LikeButton name ="Patty" />
//             <LifeCycle name ="Candy" />
//             <AlarmClockControl />
//         </div>
//     );
// }

// ReactDOM.render(
//     <Group />,
//     document.getElementById('root')
// );
// registerServiceWorker();


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
