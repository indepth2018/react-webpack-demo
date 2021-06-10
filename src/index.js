import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// const root = document.querySelector('#root');
// // lodash（目前通过一个 script 引入）对于执行这一行是必需的
// // lodash 在当前 script 中使用 import 引入
// root.innerHTML = _.join(['Hello', 'webpack'], ' ');
