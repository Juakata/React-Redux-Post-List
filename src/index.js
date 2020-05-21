import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, applyMiddleware } from 'react-redux';
import thunk from 'redux-thunk';
import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render (
  <Provider store={store}>
    <App />
  </Provider>
);
