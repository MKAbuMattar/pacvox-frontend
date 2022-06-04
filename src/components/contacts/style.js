import styled from 'styled-components'

export const ContactsContainer = styled.section``

export const ContactsAppProfileBox = styled.div`
  border: 1px solid var(--box-border);
  background-color: var(--box-color);
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 16px;
  border-radius: 10px;
  margin-bottom: 24px;

  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    -o-object-fit: cover;
    object-fit: cover;
  }
`

export const ContactsAppProfileText = styled.div`
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  color: var(--text-dark);
  margin: 4px 0;
  display: flex;
  align-items: center;
`

export const ContactsAppProfileName = styled(ContactsAppProfileText)``

export const ContactsAppProfileUsername = styled(ContactsAppProfileText)``

export const ContactsAppProfileEmail = styled(ContactsAppProfileText)``

export const ContactsChatListWrapper = styled.div``

export const ContactsChatListHeader = styled.div`
  font-weight: 700;
  line-height: 24px;
  font-size: 16px;
  color: var(--text-dark);
  display: flex;
  align-items: center;
  height: 40px;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--button-bg);
    color: #fff;
    font-weight: 500;
    font-size: 12px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    margin-left: 8px;
  }
`

export const ContactsChatList = styled.div`
  display: block;
  height: auto;
  max-height: auto;
  opacity: 1;
  padding: 0;
  list-style: none;
  overflow: hidden;
  transition: 0.4s ease-in;
`

export const ContactsChatListItem = styled.div`
  transition: 0.2s;
  padding: 8px 14px;
  margin: 0;
  border-radius: 6px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  position: relative;
  cursor: pointer;

  :hover {
    background-color: var(--box-color);
  }

  img,
  svg {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    -o-object-fit: cover;
    object-fit: cover;
    margin-right: 8px;
  }

  svg {
    fill: var(--text-dark);
  }

  &.active {
    background-color: var(--box-color);
  }
  &.active span {
    color: var(--text-dark);
    font-weight: 700;
  }
`

export const ContactsChatListItemName = styled.div`
  display: inline-block;
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  color: var(--text-light);
`
