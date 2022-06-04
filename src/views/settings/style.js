import styled from 'styled-components'

import { Tab, TabList, TabPanel } from 'react-tabs'

export const SettingsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - var(--nav-size));
  border-radius: 2rem;
`

export const SettingsBox = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
  flex-direction: column;
  align-items: center;
  /* background: rgba(19, 35, 47, 0.9); */
  padding: 2.5rem;
  margin-top: 1rem;
  border-radius: 0.25rem;
  /* box-shadow: 0 0.25rem 0.625rem 0.25rem rgb(19 35 47 / 30%); */
  color: white;
  border-radius: 1rem;
`

export const TabListCounter = styled(TabList)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`

export const TabCounter = styled(Tab)`
  cursor: pointer;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 8px 16px;
  border: 0;
  border: 2px solid transparent;
  background: rgba(0, 0, 0, 0.8);
  color: rgba(221, 221, 221, 01);
  border-radius: 0.5rem;
  box-shadow: 0 4px 5px rgb(0 0 0 / 20%);
  width: 6rem;
  height: 6rem;
  user-select: none;
  text-align: center;

  &&.react-tabs__tab--selected {
    border: 2px solid rgb(78 14 255 / 60%);
    outline: none;
  }
  :hover {
    border: 2px solid #4e0eff;
  }
`

export const TabPanelCounter = styled(TabPanel)`
  background: rgba(0, 0, 0, 0.8);
  color: rgba(221, 221, 221, 01);
  box-shadow: 0 4px 5px rgb(0 0 0 / 20%);
  border-radius: 0.5rem;
`
