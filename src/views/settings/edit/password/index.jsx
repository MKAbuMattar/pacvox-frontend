import React, { Fragment, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import Loader from '../../../../components/loader'

import { ToastContainer, toast } from 'react-toastify'

import {
  PassowrdTitle,
  PassowrdForm,
  PassowrdInput,
  PassowrdSubmit,
} from './style'

import { toastOptions } from '../../../../utils/toastOptions.util'
import { UPDATE_PASSWORD_ROUTE } from '../../../../constants/api.constant'
import * as ConstantMessage from '../../../../constants/message.constant'

const Passowrd = (props) => {
  const [values, setValues] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  })
  const [isloading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  const validateForm = () => {
    const { oldPassword, newPassword, confirmPassword } = values
    if (oldPassword.length < 8) {
      toast.error(ConstantMessage.OLD_PASSWORD_REQUIRED, toastOptions)
      return false
    } else if (newPassword !== confirmPassword) {
      toast.error(
        ConstantMessage.PASSWORD_AND_CONFIRM_PASSWORD_NOT_MATCH,
        toastOptions,
      )
      return false
    } else if (oldPassword.length < 8) {
      toast.error(ConstantMessage.PASSWORD_LENGTH_ERROR, toastOptions)
      return false
    } else if (newPassword.length < 8) {
      toast.error(ConstantMessage.PASSWORD_LENGTH_ERROR, toastOptions)
      return false
    } else if (confirmPassword.length < 8) {
      toast.error(ConstantMessage.PASSWORD_LENGTH_ERROR, toastOptions)
      return false
    }
    return true
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsLoading(true)
    if (validateForm()) {
      const { oldPassword, newPassword, confirmPassword } = values
      const user = await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY),
      )

      try {
        let { data } = await axios.post(
          `${UPDATE_PASSWORD_ROUTE}/${user._id}`,
          {
            oldPassword,
            newPassword,
            confirmPassword,
          },
        )

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
      } catch (error) {
        setIsLoading(false)
      }
    }
    setIsLoading(false)
  }
  return (
    <Fragment>
      {isloading ? (
        <Loader />
      ) : (
        <Fragment>
          <PassowrdTitle>
            {props.icon}
            {props.title}
          </PassowrdTitle>
          <PassowrdForm onSubmit={(event) => handleSubmit(event)}>
            <PassowrdInput
              type="password"
              placeholder="Old Password"
              name="oldPassword"
              onChange={(event) => handleChange(event)}
              min="3"
            />
            <PassowrdInput
              type="password"
              placeholder="New Password"
              name="newPassword"
              onChange={(event) => handleChange(event)}
              min="3"
            />
            <PassowrdInput
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              onChange={(event) => handleChange(event)}
              min="3"
            />
            <PassowrdSubmit type="submit">Save</PassowrdSubmit>
          </PassowrdForm>
        </Fragment>
      )}
      <ToastContainer />
    </Fragment>
  )
}

export default Passowrd
