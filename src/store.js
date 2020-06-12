import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import modules from './modules';
import ReduxThunk from 'redux-thunk';
import penderMiddleware from 'redux-pender';


//const store = createStore(modules, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store = createStore(modules, composeWithDevTools(applyMiddleware(ReduxThunk, penderMiddleware())))

export default store;