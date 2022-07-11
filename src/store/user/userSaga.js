import { call, put, takeEvery } from "redux-saga/effects"
import { ATTEMPT_LOGIN, ATTEMPT_LOGIN_SUCCESS, ATTEMPT_LOGIN_FAILURE } from "./index"
import loginApi from '../../utils/loginApi'

export function* watchUserSaga(){
  yield takeEvery(ATTEMPT_LOGIN, requestLogin)
}

export function* requestLogin({payload: {username, password}}){
  try {
    const user = yield call(loginApi, username, password)
    yield put({
      type: ATTEMPT_LOGIN_SUCCESS,
      payload: user
    })
  } catch(e){
    yield put({
      type: ATTEMPT_LOGIN_FAILURE,
      payload: 'Unable to reach login service. Try again'
    })
  }
}