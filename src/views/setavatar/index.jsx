import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import Logo from '../../assets/img/logo.png'
import RandomBackground from '../../components/randombackground'
import Loader from '../../components/loader'

import { ToastContainer, toast } from 'react-toastify'

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

import { setAvatarRoute } from '../../constants/api.constant'
import * as ConstantMessage from '../../constants/message.constant'

const SetAvatar = () => {
  useCheckUserAccess()

  const { getAvatars, isAvatarsLoading, getAvatarError } = useGetAvatar()

  const [avatars, setAvatars] = useState([])
  const [selectedAvatar, setSelectedAvatar] = useState(undefined)

  const navigate = useNavigate()

  const setProfilePicture = async () => {
    if (selectedAvatar === undefined) {
      toast.error(ConstantMessage.AVATAR_REQUIRED, toastOptions)
    } else {
      const user = await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY),
      )

      const { data } = await axios.post(`${setAvatarRoute}/${user._id}`, {
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
    if (!isAvatarsLoading && !getAvatarError) {
      setAvatars(getAvatars)
    }
  }, [isAvatarsLoading, getAvatarError])

  return (
    <Fragment>
      <RandomBackground />
      {isAvatarsLoading ? (
        <Fragment>
          <Loader />
        </Fragment>
      ) : (
        <Fragment>
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
