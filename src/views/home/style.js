import styled from 'styled-components'

export const HomeContainer = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  height: calc(100vh - var(--nav-size));
  overflow: hidden;
  font-family: 'DM Sans', sans-serif;
  align-items: center;

  @media screen and (max-width: 680px) {
    height: auto;
  }
`

export const HomeAppContainer = styled.div`
  display: flex;
  padding: 24px;
  max-width: 1800px;
  max-height: 600px;
  background: rgba(19, 35, 47, 0.9);
  flex-direction: row;
  width: fit-content;
  height: fit-content;

  @media screen and (max-width: 680px) {
    flex-direction: column;
    max-height: 914px;
  }
`

export const HomeAppLeft = styled.div`
  flex-basis: 320px;
  flex-shrink: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  max-width: 480px;
  margin-right: 24px;
  overflow-y: auto;
`

export const HomeAppMain = styled.main`
  /* flex: 3; */
  /* height: 100%; */
  /* max-width: 700px; */
  width: 500px;
  /* min-height: 550px; */
  height: 550px;
  background-color: var(--box-color);
  border-radius: 10px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  transition: 0.2s;

  @media screen and (max-width: 680px) {
    width: 100%;
  }
`
