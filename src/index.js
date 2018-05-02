import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import rootReducer from './reducer/rootReducer';
import './index.css';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const store = createStoreWithMiddleware(rootReducer);

ReactDOM.render(
  <Provider
    store={store}
  >
    <App/>
  </Provider>, document.getElementById('root')
);
