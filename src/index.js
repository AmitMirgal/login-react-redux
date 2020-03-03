import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reducer from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import LoginPanel from './components/LoginPanel';

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
        <LoginPanel />
    </Provider>,
    document.getElementById('root')
);
