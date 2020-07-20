import { combineReducers } from 'redux';

import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import board, { boardSaga } from './board';



const rootReducer = combineReducers({
    auth,
    board
  
    
  });
  

export function* rootSaga() {
    yield all([
      authSaga(),
      boardSaga()
        
          
          
          
    ]);
  }
  
export default rootReducer;
  