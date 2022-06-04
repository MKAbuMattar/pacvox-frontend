import styled from 'styled-components'

export const PassowrdTitle = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  gap: 0.5rem;
`

export const PassowrdForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`

export const PassowrdInput = styled.input`
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

export const PassowrdSubmit = styled.button`
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
