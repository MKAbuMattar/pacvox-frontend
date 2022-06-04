import React, { Fragment, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import Loader from '../../../../components/loader'

import { ToastContainer, toast } from 'react-toastify'

import { EmailTitle, EmailForm, EmailInput, EmailSubmit } from './style'

import { toastOptions } from '../../../../utils/toastOptions.util'
import { UPDATE_EMAIL_ROUTE } from '../../../../constants/api.constant'
import * as ConstantMessage from '../../../../constants/message.constant'

const Email = (props) => {
  const [values, setValues] = useState({ email: '' })
  const [isloading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  const validateForm = () => {
    const { email } = values
    if (email.length < 5) {
      toast.error(ConstantMessage.EMAIL_REQUIRED, toastOptions)
      return false
    }
    return true
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsLoading(true)
    try {
      if (validateForm()) {
        const { email } = values
        const user = await JSON.parse(
          localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY),
        )

        const { data } = await axios.post(`${UPDATE_EMAIL_ROUTE}/${user._id}`, {
          email,
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
      {isloading ? (
        <Loader />
      ) : (
        <Fragment>
          <EmailTitle>
            {props.icon}
            {props.title}
          </EmailTitle>
          <EmailForm onSubmit={(event) => handleSubmit(event)}>
            <EmailInput
              type="text"
              placeholder="Email"
              name="email"
              onChange={(event) => handleChange(event)}
              min="3"
            />
            <EmailSubmit type="submit">Save</EmailSubmit>
          </EmailForm>
        </Fragment>
      )}
      <ToastContainer />
    </Fragment>
  )
}

export default Email
