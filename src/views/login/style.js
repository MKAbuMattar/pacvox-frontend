import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const LoginContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  border-radius: 2rem;
`

export const LoginBox = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
  flex-direction: column;
  background: rgba(19, 35, 47, 0.9);
  padding: 2.5rem;
  margin-top: 1rem;
  border-radius: 0.25rem;
  box-shadow: 0 0.25rem 0.625rem 0.25rem rgb(19 35 47 / 30%);
  color: white;
  border-radius: 1rem;
`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`

export const LoginLogoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 20rem;
  }
`

export const LoginInput = styled.input`
  background-color: transparent;
  padding: 1rem;
  border: 0.1rem solid #4e0eff;
  border-radius: 0.4rem;
  color: white;
  width: 100%;
  font-size: 1rem;
  &:focus {
    border: 0.1rem solid #997af0;
    outline: none;
  }
`

export const LoginSubmit = styled.button`
  background-color: #4e0eff;
  color: white;
  padding: 1rem 2rem;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 0.4rem;
  font-size: 1rem;
  &:hover {
    background-color: #4e0eff;
  }
`

export const LoginMessage = styled.span``

export const LoginLink = styled(Link)`
  color: #4e0eff;
  text-decoration: none;
  font-weight: bold;
`
