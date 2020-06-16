import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {createRequestActionTypes} from '../lib/createRequestSaga';
import * as authAPI from '../lib/api/auth';


const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes('auth/LOGIN');
const [LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILURE] = createRequestActionTypes('auth/LOGOUT');
const [SESSION, SESSION_SUCCESS, SESSION_FAILURE] = createRequestActionTypes('auth/SESSION');


const [CHECK_TOKKEN, CHECK_TOKKEN_SUCCESS, CHECK_TOKKEN_FAILURE ]  = createRequestActionTypes('auth/CHECK_TOKKEN');


export const changeField    = createAction(CHANGE_FIELD,({ form, key, value }) => ({form, key, value}));
export const initializeForm = createAction(INITIALIZE_FORM, form => form);
export const login          = createAction(LOGIN, ({ userid, password }) => ({userid,password}));
export const logout         = createAction(LOGOUT);
export const getSession     = createAction(SESSION);

export const checkTokken    = createAction(CHECK_TOKKEN,  (tokken) => (tokken))



// saga 생성
const loginSaga             = createRequestSaga(LOGIN,  authAPI.login);
const logoutSaga             = createRequestSaga(LOGOUT,  authAPI.logout);
const getSessionSaga             = createRequestSaga(SESSION,  authAPI.getSession);
const checkSaga             = createRequestSaga(CHECK_TOKKEN,  authAPI.check);

const checkFailureSaga = () => {
  try {
    localStorage.removeItem('authrization'); 
  } catch (e) {
    console.log('localStorage is not working');
  }
}


export function* authSaga() {
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(LOGOUT, logoutSaga);
  yield takeLatest(SESSION, getSessionSaga);
  
  yield takeLatest(CHECK_TOKKEN, checkSaga);
  yield takeLatest(CHECK_TOKKEN_FAILURE, checkFailureSaga);
}

const initialState = {
  loginInfo: {
    userid: '',
    password: ''
  },
  userInfo : {

  },
  authrization: null,
  tokken : null,
  authError: null
};

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, draft => {
        draft[form][key] = value; // 예: state.register.username을 바꾼다
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
      authError: null // 폼 전환 시 회원 인증 에러 초기화
    }),
  
    // 로그인 성공
    [LOGIN_SUCCESS]: (state, { payload : {data} }) =>{
      
      return {
        ...state,
        authError: null,
        authrization:  data.authrization,
        userInfo : data.userInfo
      }
    },
    [LOGOUT_SUCCESS]: (state, { payload : {data} }) =>{
      return {
        ...state,
        authError: null,
        authrization: data.authrization,
        userInfo : initialState.userInfo
      }
    },
    [SESSION_SUCCESS]: (state, { payload : {data} }) =>{

      return {
        ...state,
        authError: null,
        authrization:  data.authrization,
        userInfo : data.userInfo
      }
    },
    

    // 로그인 실패
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error
    }),

    
    [CHECK_TOKKEN_SUCCESS]: (state, { payload : {data} }) =>{
      return {
        ...state,
        authError: null,
        auth : data.auth,
        tokken :  data.tokken,
        userInfo : data.userInfo
      };
    },
    
    [LOGOUT_FAILURE]: (state) =>{
      return {
        ...state
      };
    },
        
    [SESSION_FAILURE]: (state) =>{
      return {
        ...state
      };
    },
    

  },
  initialState
);

export default auth;
