import React, { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import Logo from '../../assets/img/logo.png'
import RandomBackground from '../../components/randombackground'
import MeatDecorator from '../../components/meatdecorator'
import Loader from '../../components/loader'

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

import { useIsUserLogin } from '../../hooks/useUserLogin'

import { toastOptions } from '../../utils/toastOptions.util'
import { LOGIN_ROUTE } from '../../constants/api.constant'
import * as ConstantMessage from '../../constants/message.constant'

const Login = (props) => {
  useIsUserLogin()

  const [values, setValues] = useState({ username: '', password: '' })
  const [isloading, setIsLoading] = useState(false)

  const navigate = useNavigate()

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
    setIsLoading(true)
    try {
      if (validateForm()) {
        const { username, password } = values
        const { data } = await axios.post(LOGIN_ROUTE, {
          username,
          password,
        })
        if (data.status === false) {
          setIsLoading(false)
          toast.error(data.msg, toastOptions)
        }
        if (data.status === true) {
          localStorage.setItem(
            process.env.REACT_APP_LOCALHOST_KEY,
            JSON.stringify(data.user),
          )

          setIsLoading(false)
          navigate('/')
        }
      }
    } catch (error) {
      setIsLoading(false)
    }
    setIsLoading(false)
  }

  return (
    <Fragment>
      <MeatDecorator
        title={props.meta.title}
        description={props.meta.description}
        keywords={props.meta.keywords}
        canonical={props.meta.canonical}
        imageSecureUrl={props.meta.imageSecureUrl}
        image={props.meta.image}
        imageAlt={props.meta.imageAlt}
        imageWidth={props.meta.imageWidth}
        imageHeight={props.meta.imageHeight}
        imageType={props.meta.imageType}
      />
      <RandomBackground />
      {isloading ? (
        <Loader />
      ) : (
        <Fragment>
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
      )}
    </Fragment>
  )
}

export default Login
