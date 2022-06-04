import styled from 'styled-components'

export const ProfileContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - var(--nav-size));
  border-radius: 2rem;
`

export const ProfileBox = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
  flex-direction: column;
  align-items: center;
  background: rgba(19, 35, 47, 0.9);
  padding: 2.5rem;
  margin-top: 1rem;
  border-radius: 0.25rem;
  box-shadow: 0 0.25rem 0.625rem 0.25rem rgb(19 35 47 / 30%);
  color: white;
  border-radius: 1rem;
`

export const ProfileAvatarBox = styled.div`
  background: rgba(19, 35, 47, 0.5);
  border-radius: 99999999px;
  border: 10px solid rgba(19, 35, 47, 0.4);
  height: 10rem;
  margin-top: -7.2rem;

  && img {
    border-radius: 99999999px;
    height: 100%;
    width: 100%;
  }
`
