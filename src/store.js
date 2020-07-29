import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer'
import thunk from 'redux-thunk';

const initialState = {};

export default createStore(reducer, initialState, applyMiddleware(thunk));