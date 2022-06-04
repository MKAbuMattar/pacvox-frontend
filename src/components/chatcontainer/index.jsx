import React, { Fragment, useState, useEffect, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'
import moment from 'moment'

import ChatInput from '../chatinput'

import { useIsUserLoginHome } from '../../hooks/useUserLogin'

import { ChatContainerChatWrapper, ChatContainerMessageWrapper } from './style'

import {
  SEND_MESSAGE_ROUTE,
  RECEIVE_MESSAGE_ROUTE,
} from '../../constants/api.constant'

const ChatContainer = ({ currentChat, socket }) => {
  const { getcurrentUser, isGetcurrentUserLoading } = useIsUserLoginHome()

  const scrollRef = useRef()

  const [messages, setMessages] = useState([])
  const [arrivalMessage, setArrivalMessage] = useState(null)
  const [currentUser, setCurrentUser] = useState(undefined)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!isGetcurrentUserLoading) {
      setCurrentUser(getcurrentUser)
      setIsLoading(false)
    }
  }, [isGetcurrentUserLoading])

  useEffect(async () => {
    const data = await JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY),
    )
    const response = await axios.post(RECEIVE_MESSAGE_ROUTE, {
      from: data._id,
      to: currentChat._id,
    })
    setMessages(response.data)
  }, [currentChat])

  useEffect(() => {
    const getCurrentChat = async () => {
      if (currentChat) {
        await JSON.parse(
          localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY),
        )._id
      }
    }
    getCurrentChat()
  }, [currentChat])

  const handleSendMsg = async (msg) => {
    const data = await JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY),
    )
    socket.current.emit('send-msg', {
      to: currentChat._id,
      from: data._id,
      msg,
    })
    await axios.post(SEND_MESSAGE_ROUTE, {
      from: data._id,
      to: currentChat._id,
      message: msg,
    })

    const msgs = [...messages]
    msgs.push({ fromSelf: true, message: msg })
    setMessages(msgs)
  }

  useEffect(() => {
    if (socket.current) {
      socket.current.on('msg-recieve', (msg) => {
        setArrivalMessage({ fromSelf: false, message: msg })
      })
    }
  }, [])

  useEffect(() => {
    arrivalMessage && setMessages((prev) => [...prev, arrivalMessage])
  }, [arrivalMessage])

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const momentJSRelativeTime = (data) => {
    return moment(data).fromNow()
  }

  return (
    <Fragment>
      <ChatContainerChatWrapper>
        {messages.map((message) => {
          return (
            <Fragment key={uuidv4()}>
              {message.fromSelf ? (
                <ChatContainerMessageWrapper
                  ref={scrollRef}
                  key={uuidv4()}
                  className="reverse"
                >
                  <img
                    src={`data:image/svg+xml;base64,${currentUser.avatarImage}`}
                    className="message-pp"
                    alt=""
                  />
                  <div className="message-box-wrapper">
                    <div className="message-box">{message.message}</div>
                    <span>{momentJSRelativeTime(message.createdAt)}</span>
                  </div>
                </ChatContainerMessageWrapper>
              ) : (
                <ChatContainerMessageWrapper ref={scrollRef} key={uuidv4()}>
                  <img
                    src={`data:image/svg+xml;base64,${currentChat.avatarImage}`}
                    className="message-pp"
                    alt=""
                  />
                  <div className="message-box-wrapper">
                    <div className="message-box">{message.message}</div>
                    <span>{momentJSRelativeTime(message.createdAt)}</span>
                  </div>
                </ChatContainerMessageWrapper>
              )}
            </Fragment>
          )
        })}
      </ChatContainerChatWrapper>
      <ChatInput handleSendMsg={handleSendMsg} />
    </Fragment>
  )
}

export default ChatContainer
