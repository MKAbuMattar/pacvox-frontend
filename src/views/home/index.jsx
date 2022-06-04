import React, { Fragment, useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { io } from 'socket.io-client'
import axios from 'axios'

import Navbar from '../../components/navbar'

import RandomBackground from '../../components/randombackground'
import Loader from '../../components/loader'
import MeatDecorator from '../../components/meatdecorator'

import Contacts from '../../components/contacts'
import Welcome from '../../components/welcome'
import ChatContainer from '../../components/chatcontainer'

import {
  HomeContainer,
  HomeAppContainer,
  HomeAppLeft,
  HomeAppMain,
} from './style'

import { useIsUserLoginHome } from '../../hooks/useUserLogin'

import { ALL_USERS_ROUTE, HOST } from '../../constants/api.constant'

const Home = (props) => {
  const { getcurrentUser, isGetcurrentUserLoading } = useIsUserLoginHome()

  const navigate = useNavigate()
  const socket = useRef()
  const [contacts, setContacts] = useState([])
  const [currentChat, setCurrentChat] = useState(undefined)
  const [currentUser, setCurrentUser] = useState(undefined)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!isGetcurrentUserLoading) {
      setCurrentUser(getcurrentUser)
    }
  }, [isGetcurrentUserLoading])

  useEffect(() => {
    if (currentUser) {
      socket.current = io(HOST)
      socket.current.emit('add-user', currentUser._id)
    }
  }, [currentUser])

  useEffect(async () => {
    if (currentUser) {
      if (currentUser.isAvatarImageSet) {
        const data = await axios.get(`${ALL_USERS_ROUTE}/${currentUser._id}`)
        setContacts(data.data)
        setIsLoading(false)
      } else {
        setIsLoading(false)
        navigate('/setavatar')
      }
    }
  }, [currentUser])

  const handleChatChange = (chat) => {
    setCurrentChat(chat)
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
      {isLoading ? (
        <Fragment>
          <Loader />
        </Fragment>
      ) : (
        <Fragment>
          <Navbar user={currentUser} />
          <HomeContainer>
            <HomeAppContainer>
              <HomeAppLeft>
                <Contacts contacts={contacts} changeChat={handleChatChange} />
              </HomeAppLeft>
              <HomeAppMain>
                {currentChat === undefined ? (
                  <Welcome />
                ) : (
                  <ChatContainer currentChat={currentChat} socket={socket} />
                )}
              </HomeAppMain>
            </HomeAppContainer>
          </HomeContainer>
        </Fragment>
      )}
    </Fragment>
  )
}

export default Home
