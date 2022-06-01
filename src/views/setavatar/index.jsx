import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Buffer } from 'buffer'

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

import { setAvatarRoute } from '../../constants/api.constant'
import { getRndInteger } from '../../utils/getRndInteger.util'
import { getRndColor } from '../../utils/getRndColor.util'

const SetAvatar = () => {
  const toastOptions = {
    position: 'bottom-right',
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark',
  }

  const avatar = [
    'adventurer',
    'adventurer-neutral',
    'avataaars',
    'big-ears',
    'big-ears-neutral',
    'big-smile',
    'bottts',
    'female',
    'gridy',
    'male',
    'micah',
    'miniavs',
    'open-peeps',
    'personas',
    'pixel-art',
    'pixel-art-neutral',
  ]

  const api = `https://avatars.dicebear.com/api`
  const navigate = useNavigate()
  const [avatars, setAvatars] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedAvatar, setSelectedAvatar] = useState(undefined)

  useEffect(async () => {
    if (!localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY))
      navigate('/login')
  }, [])

  const setProfilePicture = async () => {
    if (selectedAvatar === undefined) {
      toast.error('Please select an avatar', toastOptions)
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
        toast.error('Error setting avatar. Please try again.', toastOptions)
      }
    }
  }

  useEffect(async () => {
    const data = []
    for (let i = 0; i < 25; i++) {
      let image
      try {
        image = await axios.get(
          `${api}/${
            avatar[getRndInteger(0, avatar.length - 1)]
          }/${getRndInteger(0, 5000000)}.svg?b=${getRndColor()}`,
        )
      } catch (error) {
        i--
        continue
      }
      if (image.data) {
        const buffer = Buffer.from(image.data)
        data.push(buffer.toString('base64'))
      }
    }
    setAvatars(data)
    setIsLoading(false)
  }, [])

  return (
    <Fragment>
      <RandomBackground />
      {isLoading ? (
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
                      className={`${
                        selectedAvatar === index ? 'selected' : ''
                      }`}
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
