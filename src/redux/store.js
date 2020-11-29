import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import searchReducer from './searchReducer'


const middleware = [thunk];
const initialState = {};

const store = createStore(searchReducer, initialState, composeWithDevTools
    (applyMiddleware(...middleware)))


export default store;