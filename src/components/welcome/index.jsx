import React, { Fragment, useState, useEffect } from 'react'

import { WelcomeContainer } from './style'

const Welcome = () => {
  const [userName, setUserName] = useState('')
  useEffect(async () => {
    setUserName(
      await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY),
      ).username,
    )
  }, [])

  return (
    <Fragment>
      <WelcomeContainer>
        <h1>
          Welcome, <span>{userName}!</span>
        </h1>
        <h3>Please select a chat to Start messaging.</h3>
      </WelcomeContainer>
    </Fragment>
  )
}

export default Welcome
