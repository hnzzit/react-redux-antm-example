import React from 'react';
import ReactDOM from 'react-dom';

import Router from './router';
import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'

import reducers from './reducers'
import saga from './saga'


import './index.css';

const sagaMiddleware = createSagaMiddleware();
//store
const finalCreateStore = compose(
    applyMiddleware(sagaMiddleware)
)(createStore);

const store = finalCreateStore(combineReducers(reducers));

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById('root'));

sagaMiddleware.run(saga)