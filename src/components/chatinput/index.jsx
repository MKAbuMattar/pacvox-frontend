import React, { Fragment, useState } from 'react'
import Picker from 'emoji-picker-react'

import { BsEmojiSmileFill } from 'react-icons/bs'
import { IoMdSend } from 'react-icons/io'

import {
  ChatInputWrapper,
  InputWrapper,
  ChatSendBtn,
  Input,
  EmojiBtnContainer,
  EmojiBtn,
} from './style'

const ChatInput = ({ handleSendMsg }) => {
  const [msg, setMsg] = useState('')
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)

  const handleEmojiPickerhideShow = () => {
    setShowEmojiPicker(!showEmojiPicker)
  }

  const handleEmojiClick = (event, emojiObject) => {
    let message = msg
    message += emojiObject.emoji
    setMsg(message)
  }

  const sendChat = (event) => {
    event.preventDefault()
    if (msg.length > 0) {
      handleSendMsg(msg)
      setMsg('')
    }
  }

  return (
    <Fragment>
      <form style={{ marginTop: 'auto' }} onSubmit={(event) => sendChat(event)}>
        <ChatInputWrapper>
          <InputWrapper>
            <Input
              type="text"
              placeholder="Enter your message here"
              onChange={(e) => setMsg(e.target.value)}
              value={msg}
            />
            <EmojiBtnContainer>
              <EmojiBtn className="emoji">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="feather feather-smile"
                  viewBox="0 0 24 24"
                  onClick={handleEmojiPickerhideShow}
                >
                  <defs></defs>
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"></path>
                </svg>
                {showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} />}
              </EmojiBtn>
            </EmojiBtnContainer>
          </InputWrapper>
          <ChatSendBtn type="submit">Send</ChatSendBtn>
        </ChatInputWrapper>
      </form>
    </Fragment>
  )
}

export default ChatInput
