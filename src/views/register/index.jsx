import React, { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import Logo from '../../assets/img/logo.png'
import RandomBackground from '../../components/randombackground'
import MeatDecorator from '../../components/meatdecorator'

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

import { useIsUserLogin } from '../../hooks/useUserLogin'

import { toastOptions } from '../../utils/toastOptions.util'

import { REGISTER_ROUTE } from '../../constants/api.constant'
import * as ConstantMessage from '../../constants/message.constant'
import Loader from '../../components/loader'

const Register = (props) => {
  useIsUserLogin()

  const [values, setValues] = useState({
    username: '',
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [isloading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  const handleValidation = () => {
    const { password, confirmPassword, username, name, email } = values
    setIsLoading(false)
    if (password !== confirmPassword) {
      toast.error(
        ConstantMessage.PASSWORD_AND_CONFIRM_PASSWORD_NOT_MATCH,
        toastOptions,
      )
      return false
    } else if (username.length < 3) {
      toast.error(ConstantMessage.USERNAME_LENGTH_ERROR, toastOptions)
      return false
    } else if (username.name < 4) {
      toast.error(ConstantMessage.FULLNAME_LENGTH_ERROR, toastOptions)
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
    setIsLoading(true)
    if (handleValidation()) {
      const { username, name, email, password } = values
      const { data } = await axios.post(REGISTER_ROUTE, {
        username,
        name,
        email,
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
                  type="text"
                  placeholder="Full Name"
                  name="name"
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
      )}
    </Fragment>
  )
}

export default Register
