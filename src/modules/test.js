import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes} from '../lib/createRequestSaga';
import * as testApi from '../lib/api/test';


const [TEST, TEST_SUCCESS,TEST_FAILURE] = createRequestActionTypes(
  "test/TEST"
);


export const testAPi = createAction(TEST,form =>form);


export function* testSaga() {
  yield takeLatest(TEST,  createRequestSaga(TEST, testApi.test));
}

const initialState = {

    "userId": null,
    "id": null,
    "title": null,
    "completed": null
    
};

const test = handleActions(
  {
    [TEST_SUCCESS] : (state, {payload  : form })=>({
        ...state,
        form
    }),
    [TEST_FAILURE] : (state, {payload  : form })=>({
        ...state,
        id:"FAIL"
    })
   
  },
  initialState
);

export default test;
