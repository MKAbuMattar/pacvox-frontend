import React, { Fragment, useState, useEffect } from 'react'

import Navbar from '../../components/navbar'

import RandomBackground from '../../components/randombackground'
import Loader from '../../components/loader'
import MeatDecorator from '../../components/meatdecorator'

import { useIsUserLoginHome } from '../../hooks/useUserLogin'

import { ProfileContainer, ProfileBox, ProfileAvatarBox } from './style'

const Profile = (props) => {
  const { getcurrentUser, isGetcurrentUserLoading } = useIsUserLoginHome()

  const [currentUser, setCurrentUser] = useState(undefined)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!isGetcurrentUserLoading) {
      setCurrentUser(getcurrentUser)
      setIsLoading(false)
    }
  }, [isGetcurrentUserLoading])

  const formatDate = (date) => {
    // 2022-05-31T04:54:30.071Z
    const dateFormated = new Date(date)
    const year = dateFormated.getFullYear()
    const month = dateFormated.getMonth() + 1
    const day = dateFormated.getDate()
    const hour = dateFormated.getHours()
    const minutes = dateFormated.getMinutes()
    const seconds = dateFormated.getSeconds()
    return `${year}/${month}/${day} at ${hour}:${minutes}:${seconds}`
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
          <ProfileContainer>
            <ProfileBox>
              <ProfileAvatarBox>
                <img
                  src={`data:image/svg+xml;base64,${currentUser.avatarImage}`}
                  alt=""
                />
              </ProfileAvatarBox>
              <div>
                <p>
                  <span>Name: </span>
                  {currentUser.name}
                </p>
                <p>
                  <span>Username: </span>
                  {currentUser.username}
                </p>
                <p>
                  <span>Email: </span>
                  {currentUser.email}
                </p>
                <p>
                  <span>Created: </span>
                  {formatDate(currentUser.createdAt)}
                </p>
              </div>
            </ProfileBox>
          </ProfileContainer>
        </Fragment>
      )}
    </Fragment>
  )
}

export default Profile
