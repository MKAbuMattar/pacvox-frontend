import styled from 'styled-components'

export const SetAvatarContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 2rem;
  margin: 2rem 0;
  height: calc(100vh - 4rem);
  overflow: hidden;
`

export const SetAvatarBox = styled.div`
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
  max-width: 100%;

  @media screen and (max-width: 320px) {
  }
  @media screen and (min-width: 375px) {
  }
  @media screen and (min-width: 576px) {
    max-width: 90%;
  }
  @media screen and (min-width: 767px) {
    max-width: 40rem;
  }
  @media screen and (min-width: 992px) {
    max-width: 45rem;
  }
  @media screen and (min-width: 1024px) {
    max-width: 50rem;
  }
  @media screen and (min-width: 1440px) {
    max-width: 60rem;
  }
`

export const SetAvatarLogoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 20rem;
  }
`

export const SetAvatarContainerTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    color: white;
  }
`

export const SetAvatarAvatars = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  overflow: auto;
  max-height: calc(60vh - 4rem - 4rem - 2rem);
  .selected {
    border: 0.4rem solid #4e0eff;
  }
`

export const SetAvatarAvatar = styled.div`
  border: 0.4rem solid transparent;
  padding: 0.4rem;
  border-radius: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s ease-in-out;
  img {
    height: 6rem;
    transition: 0.5s ease-in-out;
    border-radius: 99999px;
    cursor: pointer;
  }
`

export const SetAvatarSubmit = styled.button`
  background-color: #4e0eff;
  color: white;
  padding: 1rem 2rem;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 0.4rem;
  font-size: 1rem;
  margin-top: 2rem;
  &:hover {
    background-color: #4e0eff;
  }
`
