import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { rootSaga } from './modules';
import {checkTokken} from './modules/auth';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);


function loadUser() {
  try {
    const tokken = sessionStorage.getItem('tokken'); 
    // 로그인 상태가 아니라면 아무것도 안함
    if (!tokken) return; 
    console.log(tokken, "새로고침");
    // 새로고침 할경우  체크해줌 
    store.dispatch(checkTokken(tokken));
 
  } catch (e) {
    console.log('sessionStorage is not working');
  }
}

sagaMiddleware.run(rootSaga);
loadUser();




ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <App />
          </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
