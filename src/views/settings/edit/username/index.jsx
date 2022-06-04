import React, { Fragment, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import Loader from '../../../../components/loader'

import { ToastContainer, toast } from 'react-toastify'

import {
  UsernameTitle,
  UsernameForm,
  UsernameInput,
  UsernameSubmit,
} from './style'

import { toastOptions } from '../../../../utils/toastOptions.util'
import { UPDATE_USERNAME_ROUTE } from '../../../../constants/api.constant'
import * as ConstantMessage from '../../../../constants/message.constant'

const Username = (props) => {
  const [values, setValues] = useState({ username: '' })
  const [isloading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  const validateForm = () => {
    const { username } = values
    if (username === '') {
      toast.error(ConstantMessage.USERNAME_LENGTH_ERROR, toastOptions)
      return false
    }
    return true
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsLoading(true)
    try {
      if (validateForm()) {
        const { username } = values
        const user = await JSON.parse(
          localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY),
        )

        const { data } = await axios.post(
          `${UPDATE_USERNAME_ROUTE}/${user._id}`,
          {
            username,
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
      }
    } catch (error) {
      setIsLoading(false)
    }
    setIsLoading(false)
  }

  return (
    <Fragment>
      {isloading ? (
        <Loader />
      ) : (
        <Fragment>
          <UsernameTitle>
            {props.icon}
            {props.title}
          </UsernameTitle>
          <UsernameForm onSubmit={(event) => handleSubmit(event)}>
            <UsernameInput
              type="text"
              placeholder="username"
              name="username"
              onChange={(event) => handleChange(event)}
              min="3"
            />
            <UsernameSubmit type="submit">Save</UsernameSubmit>
          </UsernameForm>
        </Fragment>
      )}
      <ToastContainer />
    </Fragment>
  )
}

export default Username
