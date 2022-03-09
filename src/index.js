import React from 'react';
import ReactDOM from 'react-dom';

import reducer from "./reducers/counter"
import { createStore } from 'redux';
import App from './App';
import { Provider } from 'react-redux'; // 关联redux 和 react

// 创建仓库
const store = createStore(reducer)

ReactDOM.render(
  <Provider store={ store }>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);