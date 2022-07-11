import React from "react"
import { StyledInputBlock } from "../../styles/components/login/InputBlock"
import { StyledLabel } from "../../styles/components/login/Label"

export const LoginInput = ({inputId, placeholder, updateForm}) => {
  const handleInputChange = (e) => {
    switch(inputId){
      case 'username':
        updateForm(state => ({...state, username: e.target.value}))
        return
      case 'password':
        // TODO: DO NOT SEND PASSWORD UNENCRYPTED
        updateForm(state => ({...state, password: e.target.value}))
        return
      default:
      return
    }
  }
  
  return (
    <StyledInputBlock>
      <StyledLabel htmlFor={inputId}>{inputId}</StyledLabel>
      <input id={inputId} placeholder={placeholder} onChange={handleInputChange} />
    </StyledInputBlock>
  )
}