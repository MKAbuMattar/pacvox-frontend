import React, { Fragment, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import Logo from '../../assets/img/logo.png'
import RandomBackground from '../../components/randombackground'

import { ToastContainer, toast } from 'react-toastify'

import {
  RegisterContainer,
  RegisterBox,
  RegisterForm,
  RegisterLogoBox,
  RegisterInput,
  RegisterSubmit,
  RegisterMessage,
  RegisterLink,
} from './style'

import { registerRoute } from '../../constants/api.constant'
import * as ConstantMessage from '../../constants/message.constant'

const Register = () => {
  const toastOptions = {
    position: 'bottom-right',
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark',
  }

  const navigate = useNavigate()

  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  useEffect(() => {
    if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
      navigate('/')
    }
  }, [])

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  const handleValidation = () => {
    const { password, confirmPassword, username, email } = values
    if (password !== confirmPassword) {
      toast.error(
        ConstantMessage.PASSWORD_AND_CONFIRM_PASSWORD_NOT_MATCH,
        toastOptions,
      )
      return false
    } else if (username.length < 3) {
      toast.error(ConstantMessage.USERNAME_LENGTH_ERROR, toastOptions)
      return false
    } else if (email === '') {
      toast.error(ConstantMessage.EMAIL_REQUIRED, toastOptions)
      return false
    } else if (password.length < 8) {
      toast.error(ConstantMessage.PASSWORD_LENGTH_ERROR, toastOptions)
      return false
    }

    return true
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (handleValidation()) {
      const { email, username, password } = values
      const { data } = await axios.post(registerRoute, {
        username,
        email,
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
      <RegisterContainer>
        <RegisterBox>
          <RegisterForm onSubmit={(event) => handleSubmit(event)}>
            <RegisterLogoBox>
              <img src={Logo} alt="logo" />
            </RegisterLogoBox>
            <RegisterInput
              type="text"
              placeholder="Username"
              name="username"
              onChange={(event) => handleChange(event)}
            />
            <RegisterInput
              type="email"
              placeholder="Email"
              name="email"
              onChange={(event) => handleChange(event)}
            />
            <RegisterInput
              type="password"
              placeholder="Password"
              name="password"
              onChange={(event) => handleChange(event)}
            />
            <RegisterInput
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              onChange={(event) => handleChange(event)}
            />
            <RegisterSubmit type="submit">Sign Up</RegisterSubmit>
            <RegisterMessage>
              Already have an account?{' '}
              <RegisterLink to="/login">Log in</RegisterLink>
            </RegisterMessage>
          </RegisterForm>
        </RegisterBox>
      </RegisterContainer>
      <ToastContainer />
    </Fragment>
  )
}

export default Register
