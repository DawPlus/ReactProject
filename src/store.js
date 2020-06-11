import { createStore, applyMiddleware } from 'redux';
import modules from './modules';



// 스토어 생성
const store = createStore(modules, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//const store = createStore(modules, applyMiddleware(logger))

export default store;