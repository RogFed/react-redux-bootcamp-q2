export const ATTEMPT_LOGIN = 'ATTEMPT_LOGIN'
export const ATTEMPT_LOGIN_SUCCESS = 'ATTEMPT_LOGIN_SUCCESS'
export const ATTEMPT_LOGIN_FAILURE = 'ATTEMPT_LOGIN_FAILURE'

export const attemptLogin = user => ({
  type: ATTEMPT_LOGIN,
  payload: user
})