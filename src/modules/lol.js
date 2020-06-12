import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes} from '../lib/createRequestSaga';
import * as lolAPI from '../lib/api/lol';


const [SUMMONER, SUMMONER_SUCCESS, SUMMONER_FAILURE] = createRequestActionTypes("lol/SUMMONER");
const CHANGE_FIELD = 'lol/CHANGE_FIELD'; 

export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
    key,
    value,
  }));


export const getSummerner = createAction(SUMMONER, name => name);

export function* lolSaga() {
  yield takeLatest(SUMMONER,  createRequestSaga(SUMMONER, lolAPI.getSummerner));
}

const initialState = {
    summoner :{},
    inputText : ""
};

const lolInfo = handleActions(
  {
    [SUMMONER_SUCCESS] : (state, {payload  : form })=>({
        ...state,
        summoner : form
    }),
    [SUMMONER_FAILURE] : (state, {payload  : form })=>({
        ...state,
        summoner : "Fail"
    }),

    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
        ...state,
        [key]: value, // 특정 key 값을 업데이트
      }),
   
  },
  initialState
);

export default lolInfo;
