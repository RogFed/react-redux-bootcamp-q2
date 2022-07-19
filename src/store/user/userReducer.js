import { ATTEMPT_LOGIN_SUCCESS } from "./userActions"

const initialState = {}

export const userReducer = (state = initialState, {type, payload}) => {
  switch(type){
    case ATTEMPT_LOGIN_SUCCESS:
      return payload
    default:
      return state
  }
}