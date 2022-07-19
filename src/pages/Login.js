import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { attemptLogin } from '../store/user'
import { StyledLogin } from '../styles/pages/Login.styles'
import { LoginInput } from '../components/login/Input'
import { Button } from '../components/Button'

const loginInputs = [
  {
    inputId: 'username',
    placeholder: 'Enter your username:'
  },
  {
    inputId: 'password',
    placeholder: 'Enter your password:'
  }
]

export const Login = () => {
  const [form, updateForm] = useState({
    username: '',
    password: ''
  })
  const dispatch = useDispatch()
  const user = useSelector(({user}) => user)
  const history = useHistory()

  useEffect(() => {
    if (!user.id) return
    history.push('/products')
  }, [user, history])

  const renderInputBlocks = () => loginInputs.map(({inputId, placeholder}) => <LoginInput inputId={inputId} placeholder={placeholder} key={inputId} updateForm={updateForm} />)

  const handleLogin = e => {
    e.preventDefault()
    dispatch(attemptLogin(form))
  }

  return (
    <StyledLogin>
      <h1>Welcome to the Wizestore!</h1>
      <div>
        <form onSubmit={handleLogin}>
          { renderInputBlocks() }
          <Button type='submit'>Login</Button>
        </form>
      </div>
    </StyledLogin>
  )
}
