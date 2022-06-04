import React, { Fragment, useState, useEffect } from 'react'

import {
  ContactsContainer,
  ContactsAppProfileBox,
  ContactsAppProfileName,
  ContactsAppProfileUsername,
  ContactsAppProfileEmail,
  ContactsChatListWrapper,
  ContactsChatListHeader,
  ContactsChatList,
  ContactsChatListItem,
  ContactsChatListItemName,
} from './style'

import { AiOutlineCloseCircle } from 'react-icons/ai'

const Contacts = ({ contacts, changeChat }) => {
  const [currentUserName, setCurrentUserName] = useState(undefined)
  const [Currentname, setCurrentname] = useState(undefined)
  const [currentUserImage, setCurrentUserImage] = useState(undefined)
  const [currentEmail, setCurrentEmail] = useState(undefined)
  const [currentSelected, setCurrentSelected] = useState(-1)

  useEffect(async () => {
    const data = await JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY),
    )
    setCurrentUserName(data.username)
    setCurrentname(data.name)
    setCurrentEmail(data.email)
    setCurrentUserImage(data.avatarImage)
  }, [])

  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index)
    changeChat(contact)
  }

  return (
    <Fragment>
      <ContactsContainer>
        {currentUserName && Currentname && currentUserImage && currentEmail && (
          <Fragment>
            <ContactsAppProfileBox>
              <img
                src={`data:image/svg+xml;base64,${currentUserImage}`}
                alt="avatar"
              />
              <ContactsAppProfileName>{Currentname}</ContactsAppProfileName>
              <ContactsAppProfileUsername>
                {currentUserName}
              </ContactsAppProfileUsername>
              <ContactsAppProfileEmail>{currentEmail}</ContactsAppProfileEmail>
            </ContactsAppProfileBox>
            <ContactsChatListWrapper>
              <ContactsChatListHeader>
                Users <span>{contacts.length}</span>
              </ContactsChatListHeader>
              <ContactsChatList>
                <ContactsChatListItem
                  className={-1 === currentSelected ? 'active' : ''}
                  onClick={() => changeCurrentChat(-1, undefined)}
                >
                  <AiOutlineCloseCircle />
                  <ContactsChatListItemName>
                    Close Chat
                  </ContactsChatListItemName>
                </ContactsChatListItem>

                {contacts.map((contact, index) => (
                  <Fragment key={contact._id}>
                    <ContactsChatListItem
                      key={contact._id}
                      className={index === currentSelected ? 'active' : ''}
                      onClick={() => changeCurrentChat(index, contact)}
                    >
                      <img
                        src={`data:image/svg+xml;base64,${contact.avatarImage}`}
                        alt=""
                      />
                      <ContactsChatListItemName>
                        {contact.username}
                      </ContactsChatListItemName>
                    </ContactsChatListItem>
                  </Fragment>
                ))}
              </ContactsChatList>
            </ContactsChatListWrapper>
          </Fragment>
        )}
      </ContactsContainer>
    </Fragment>
  )
}

export default Contacts
