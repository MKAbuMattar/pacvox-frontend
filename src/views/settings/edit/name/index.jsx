import React, { Fragment, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import Loader from '../../../../components/loader'

import { ToastContainer, toast } from 'react-toastify'

import { NameTitle, NameForm, NameInput, NameSubmit } from './style'

import { toastOptions } from '../../../../utils/toastOptions.util'
import { UPDATE_NAME_ROUTE } from '../../../../constants/api.constant'
import * as ConstantMessage from '../../../../constants/message.constant'

const Name = (props) => {
  const [values, setValues] = useState({ firstname: '', lastname: '' })
  const [isloading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  const validateForm = () => {
    const { name } = values
    if (name.length < 4) {
      toast.error(ConstantMessage.FULLNAME_LENGTH_ERROR, toastOptions)
      return false
    }
    return true
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsLoading(true)
    if (validateForm()) {
      const { name } = values
      const user = await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY),
      )

      const { data } = await axios.post(`${UPDATE_NAME_ROUTE}/${user._id}`, {
        name,
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
      {isloading ? (
        <Loader />
      ) : (
        <Fragment>
          <NameTitle>
            {props.icon}
            {props.title}
          </NameTitle>
          <NameForm onSubmit={(event) => handleSubmit(event)}>
            <NameInput
              type="text"
              placeholder="Full name"
              name="name"
              onChange={(event) => handleChange(event)}
              min="3"
            />
            <NameSubmit type="submit">Save</NameSubmit>
          </NameForm>
        </Fragment>
      )}
      <ToastContainer />
    </Fragment>
  )
}

export default Name
