import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { applyMiddleware,createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { rootReducer } from './redux/redusers/reduser';

const store=createStore(rootReducer,applyMiddleware(thunk))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
    
  
);

