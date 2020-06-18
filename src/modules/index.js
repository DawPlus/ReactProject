import { combineReducers } from 'redux';

import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';

import user, { userSaga } from './user'

import starbucks, { starbucksSaga } from './starbucks'

const rootReducer = combineReducers({
    auth,
    user ,
    starbucks
    
  });
  

export function* rootSaga() {
    yield all([authSaga(), userSaga() ,starbucksSaga()]);
  }
  
export default rootReducer;
  