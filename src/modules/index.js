import { combineReducers } from 'redux';

import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';

import test, { testSaga } from './test'
import lolInfo, {lolSaga} from "./lol"
const rootReducer = combineReducers({
    auth,
    test,
    lolInfo 
    
  });
  

export function* rootSaga() {
    yield all([authSaga()  , testSaga(), lolSaga()]);
  }
  
export default rootReducer;
  