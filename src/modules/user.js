import { createAction, handleActions } from 'redux-actions';
import { takeLatest, call } from 'redux-saga/effects';
import * as authAPI from '../lib/api/auth';
import createRequestSaga, {createRequestActionTypes} from '../lib/createRequestSaga';

const TEMP_SET_USER = 'user/TEMP_SET_USER'; // 새로고침 이후 임시 로그인 처리
const INSERT_USER = "user/INSERT_USER";





// export const insertUser = createAction(INSERT_USER, userInfo => userInfo);

// // 회원 정보 확인
// const LOGOUT = 'user/LOGOUT';
// const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] = createRequestActionTypes('user/CHECK');

// export const tempSetUser = createAction(TEMP_SET_USER, user => user);
// export const check = createAction(CHECK, tokken => tokken );
// export const logout = createAction(LOGOUT);

// const checkSaga = createRequestSaga(CHECK, authAPI.checkTokken);

// function checkFailureSaga() {
//   try {
//     console.log("Fail!!!!!")
//     localStorage.removeItem('tokken'); // localStorage 에서 user 제거하고
//   } catch (e) {
//     console.log('localStorage is not working');
//   }
// }

// function* logoutSaga() {
//   try {
//     yield call(authAPI.logout); // logout API 호출
//       localStorage.removeItem('tokken'); // localStorage 에서 user 제거
//   } catch (e) {
//     console.log(e);
//   }
// }

// export function* userSaga() {
//   yield takeLatest(CHECK, checkSaga);
//   yield takeLatest(CHECK_FAILURE, checkFailureSaga);
//   yield takeLatest(LOGOUT, logoutSaga);
// }

// const initialState = {
//   user: null,
//   checkError: null,
// };

// export default handleActions(
//   {
//     [INSERT_USER] : (state, {payload : user})=>({
//       ...state,
//       user : user
//     }),
//     [TEMP_SET_USER]: (state, { payload: user }) => ({
//       ...state,
//       user,
//     }),
//     [CHECK_SUCCESS]: (state, { payload: {data}}) => ({
//       ...state,
//       user : data,
//       checkError: null,
//     }),
//     [CHECK_FAILURE]: (state, { payload: error }) => ({
//       ...state,
//       user: null,
//       checkError: error,
//     }),
//     [LOGOUT]: state => ({
//       ...state,
//       user: null,
//     }),
//   },
//   initialState,
// );
