import React from 'react';
import ReactDOM from 'react-dom';

import rootReducer from './reducers';
import { applyMiddleware, createStore } from 'redux';
import App from './App';
import { Provider } from 'react-redux'; // 关联redux 和 react
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// 创建仓库
const store = createStore(rootReducer, applyMiddleware(logger, thunk))

ReactDOM.render(
  <Provider store={ store }>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);