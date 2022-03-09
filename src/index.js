import React from 'react';
import ReactDOM from 'react-dom';

import reducer from "./reducers/counter"
import { createStore } from 'redux';
import App from './App';

// 创建仓库
const store = createStore(reducer)

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App 
        value = {store.getState()}
        onIncrement={ () => store.dispatch({ type: "INCREMENT" }) }
        onDecrement={ () => store.dispatch({ type: "DECREMENT" }) }
      />
    </React.StrictMode>,
    document.getElementById('root')
  )
}

render();

// 监听到数据的变化
store.subscribe(render)