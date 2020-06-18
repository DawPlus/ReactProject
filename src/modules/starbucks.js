import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {createRequestActionTypes} from '../lib/createRequestSaga';
import * as starAPI from '../lib/api/starbucks';


const CHANGE_FIELD = 'starbucks/CHANGE_FIELD';

const CHANGE_FIELDS = 'starbucks/CHANGE_FIELDS';

const INITIALIZE_FORM = 'starbucks/INITIALIZE_FORM';
const [STARBUCKS, STARBUCKS_SUCCESS, STARBUCKS_FAILURE] = createRequestActionTypes('starbucks/STARBUGS');


export const changeField     = createAction(CHANGE_FIELD,({ form, key, value }) => ({form, key, value}));

export const changeFields    = createAction(CHANGE_FIELDS,({  key, value }) => ({key, value}));
export const initializeForm  = createAction(INITIALIZE_FORM, form => form);
export const getData          = createAction(STARBUCKS,(gugun_cd)=> (gugun_cd));


export function* starbucksSaga() {
  yield takeLatest(STARBUCKS, createRequestSaga(STARBUCKS,  starAPI.getBag));
 
}

const initialState = {
    infos :{
        gugun_cd :""
    },
    storeList :[],
    stockList  : [],
    error_code:"",
    error_msg:""
    
    
};

const starbucks = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, draft => {
        draft[form][key] = value; // 예: state.register.username을 바꾼다
      }),
    [CHANGE_FIELDS]: (state, { payload: { key, value } }) =>
        produce(state, draft => {
        draft[key] = value; // 예: state.register.username을 바꾼다
    }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
      starbucksError: null // 폼 전환 시 회원 인증 에러 초기화
    }),
  
    // 가져옴
    [STARBUCKS_SUCCESS]: (state, { payload : data }) =>{
      console.log(data)
      return {
        ...state, data
        
       
      }
    },

    
    // 못가져옴
    [STARBUCKS_FAILURE]: (state, { payload : {data} }) =>{
        console.log(data);
      return {
        ...state, data
      }
    },
  
  },
  initialState
);

export default starbucks;
