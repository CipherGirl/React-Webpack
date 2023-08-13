import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import './css/styles.css'

const App = () => {
  return <div>Hello from React & Webpack!
    <Home/>
  </div>;
}

ReactDOM.render(<App />, document.getElementById('root'));
