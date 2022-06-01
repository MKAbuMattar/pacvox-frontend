import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const useIsUserLogin = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
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
