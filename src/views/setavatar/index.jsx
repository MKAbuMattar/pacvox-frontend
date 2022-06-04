import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import Navbar from '../../components/navbar'

import Logo from '../../assets/img/logo.png'
import RandomBackground from '../../components/randombackground'
import Loader from '../../components/loader'
import MeatDecorator from '../../components/meatdecorator'

import { useIsUserLoginHome } from '../../hooks/useUserLogin'

import { ToastContainer, toast } from 'react-toastify'

import { AiOutlineReload } from 'react-icons/ai'

import {
  SetAvatarContainer,
  SetAvatarBox,
  SetAvatarLogoBox,
  SetAvatarContainerTitle,
  SetAvatarAvatars,
  SetAvatarAvatar,
  SetAvatarSubmit,
} from './style'

import { useCheckUserAccess } from '../../hooks/useUserLogin'
import useGetAvatar from '../../hooks/useGetAvatar'

import { toastOptions } from '../../utils/toastOptions.util'

import { SET_AVATAR_ROUTE } from '../../constants/api.constant'
import * as ConstantMessage from '../../constants/message.constant'

const SetAvatar = (props) => {
  useCheckUserAccess()

  const { getcurrentUser, isGetcurrentUserLoading } = useIsUserLoginHome()

  const { getAvatars, isAvatarsLoading, getAvatarError } = useGetAvatar()

  const [avatars, setAvatars] = useState([])
  const [selectedAvatar, setSelectedAvatar] = useState(undefined)
  const [currentUser, setCurrentUser] = useState(undefined)
  const [isLoading, setIsLoading] = useState(true)

  const navigate = useNavigate()

  const setProfilePicture = async () => {
    if (selectedAvatar === undefined) {
      toast.error(ConstantMessage.AVATAR_REQUIRED, toastOptions)
    } else {
      const user = await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY),
      )

      const { data } = await axios.post(`${SET_AVATAR_ROUTE}/${user._id}`, {
        image: avatars[selectedAvatar],
      })

      if (data.isSet) {
        user.isAvatarImageSet = true
        user.avatarImage = data.image
        localStorage.setItem(
          process.env.REACT_APP_LOCALHOST_KEY,
          JSON.stringify(user),
        )
        navigate('/')
      } else {
        toast.error(ConstantMessage.AVATAR_ERROR, toastOptions)
      }
    }
  }

  useEffect(() => {
    if (!isGetcurrentUserLoading) {
      setCurrentUser(getcurrentUser)
    }
  }, [isGetcurrentUserLoading])

  useEffect(() => {
    if (!isAvatarsLoading && !getAvatarError) {
      setAvatars(getAvatars)
      setIsLoading(false)
    }
  }, [isAvatarsLoading, getAvatarError])

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
          {currentUser && (
            <Fragment>
              {currentUser.isAvatarImageSet && <Navbar user={currentUser} />}
            </Fragment>
          )}

          <SetAvatarContainer>
            <SetAvatarBox>
              <SetAvatarLogoBox>
                <img src={Logo} alt="logo" />
              </SetAvatarLogoBox>
              <SetAvatarContainerTitle>
                <h1>Pick an Avatar as your profile picture</h1>
              </SetAvatarContainerTitle>
              <SetAvatarAvatars>
                {avatars.map((avatar, index) => {
                  return (
                    <SetAvatarAvatar
                      key={index}
                      className={selectedAvatar === index ? 'selected' : ''}
                    >
                      <img
                        src={`data:image/svg+xml;base64,${avatar}`}
                        alt="avatar"
                        key={avatar}
                        onClick={() => setSelectedAvatar(index)}
                      />
                    </SetAvatarAvatar>
                  )
                })}
              </SetAvatarAvatars>
              <SetAvatarSubmit onClick={setProfilePicture}>
                Set as Profile Picture
              </SetAvatarSubmit>
            </SetAvatarBox>
          </SetAvatarContainer>
          <ToastContainer />
        </Fragment>
      )}
    </Fragment>
  )
}

export default SetAvatar
