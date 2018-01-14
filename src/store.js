import {createStore, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import allReducers from './reducers/index'

const store = createStore(allReducers,{});

export default store;
