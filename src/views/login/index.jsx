import React, { Fragment, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import Logo from '../../assets/img/logo.png'
import RandomBackground from '../../components/randombackground'

import { ToastContainer, toast } from 'react-toastify'

import {
  LoginContainer,
  LoginBox,
  LoginForm,
  LoginLogoBox,
  LoginInput,
  LoginSubmit,
  LoginMessage,
  LoginLink,
} from './style'

import { loginRoute } from '../../constants/api.constant'
import * as ConstantMessage from '../../constants/message.constant'

const Login = () => {
  const toastOptions = {
    position: 'bottom-right',
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark',
  }

  const navigate = useNavigate()

  const [values, setValues] = useState({ username: '', password: '' })

  useEffect(() => {
    if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
      navigate('/')
    }
  }, [])

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  const validateForm = () => {
    const { username, password } = values
    if (username === '') {
      toast.error(ConstantMessage.EMAIL_AND_PASSWORD_REQUIRED, toastOptions)
      return false
    } else if (password === '') {
      toast.error(ConstantMessage.EMAIL_AND_PASSWORD_REQUIRED, toastOptions)
      return false
    }
    return true
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (validateForm()) {
      const { username, password } = values
      const { data } = await axios.post(loginRoute, {
        username,
        password,
      })
      if (data.status === false) {
        toast.error(data.msg, toastOptions)
      }
      if (data.status === true) {
        localStorage.setItem(
          process.env.REACT_APP_LOCALHOST_KEY,
          JSON.stringify(data.user),
        )

        navigate('/')
      }
    }
  }

  return (
    <Fragment>
      <RandomBackground />
      <LoginContainer>
        <LoginBox>
          <LoginForm onSubmit={(event) => handleSubmit(event)}>
            <LoginLogoBox>
              <img src={Logo} alt="logo" />
            </LoginLogoBox>
            <LoginInput
              type="text"
              placeholder="username"
              name="username"
              onChange={(event) => handleChange(event)}
              min="3"
            />
            <LoginInput
              type="password"
              placeholder="password"
              name="password"
              onChange={(event) => handleChange(event)}
            />
            <LoginSubmit type="submit">Log In</LoginSubmit>
            <LoginMessage>
              New to pacvox? <LoginLink to="/register">Sign Up</LoginLink>
            </LoginMessage>
          </LoginForm>
        </LoginBox>
      </LoginContainer>
      <ToastContainer />
    </Fragment>
  )
}

export default Login
