import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const useIsUserLogin = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (
      localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY) &&
      localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY) !== 'undefined'
    ) {
      navigate('/')
    }
  }, [])
}

export const useCheckUserAccess = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
      navigate('/login')
    }
  }, [])
}

export const useIsUserLoginHome = () => {
  const navigate = useNavigate()
  const [getcurrentUser, setGetCurrentUser] = useState(undefined)
  const [isGetcurrentUserLoading, setIsLoading] = useState(true)

  useEffect(async () => {
    if (!localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
      setIsLoading(false)
      navigate('/login')
    } else {
      if (
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY) ===
        'undefined'
      ) {
        setIsLoading(false)
        navigate('/login')
      }
      setGetCurrentUser(
        await JSON.parse(
          localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY),
        ),
      )
      setIsLoading(false)
    }
  }, [])

  return { getcurrentUser, isGetcurrentUserLoading }
}
