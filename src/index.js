import React from 'react';
import ReactDOM from 'react-dom';

import reducer from "./reducers/counter"
import { applyMiddleware, createStore } from 'redux';
import App from './App';
import { Provider } from 'react-redux'; // 关联redux 和 react
import logger from 'redux-logger';

// 创建仓库
const store = createStore(reducer, applyMiddleware(logger))

ReactDOM.render(
  <Provider store={ store }>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);