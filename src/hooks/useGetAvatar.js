import { useEffect, useState } from 'react'
import axios from 'axios'
import { Buffer } from 'buffer'

import { getRndInteger } from '../utils/getRndInteger.util'
import { getRndColor } from '../utils/getRndColor.util'

export const useGetAvatar = () => {
  const [getAvatars, setAvatars] = useState([])
  const [isAvatarsLoading, setIsLoading] = useState(true)
  const [getAvatarError, setError] = useState(null)

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

  useEffect(async () => {
    const data = []
    for (let i = 0; i < 20; i++) {
      let image
      try {
        image = await axios.get(
          `${api}/${
            avatar[getRndInteger(0, avatar.length - 1)]
          }/${getRndInteger(0, 5000000)}.svg?b=${getRndColor()}`,
        )
      } catch (error) {
        setError(true)
        i--
        continue
      }
      if (image.data) {
        const buffer = Buffer.from(image.data)
        data.push(buffer.toString('base64'))
      }
    }
    setAvatars(data)
    setError(false)
    setIsLoading(false)
  }, [])

  return { getAvatars, isAvatarsLoading, getAvatarError }
}

export default useGetAvatar
