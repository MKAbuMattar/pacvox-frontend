import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

export const LinkMenuItem = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: var(--border-radius);
  transition: background var(--speed);
  padding: 0.5rem;
  color: var(--text-color);
  text-decoration: none;

  :hover {
    background-color: #525357;
  }
`

export const MenuItemIconButton = styled.span`
  --button-size: calc(var(--nav-size) * 0.5);
  width: var(--button-size);
  height: var(--button-size);
  background-color: #484a4d;
  border-radius: 50%;
  padding: 5px;
  margin: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: filter 300ms;
  margin-right: 0.5rem;

  :hover {
    filter: none;
  }

  svg {
    fill: var(--text-color);
    width: 20px;
    height: 20px;
  }
`

export const MenuItemIconRight = styled.span`
  margin-left: auto;

  svg {
    fill: var(--text-color);
    width: 20px;
    height: 20px;
  }
`

export const DropdownContainer = styled.div`
  position: absolute;
  top: 58px;
  width: 300px;
  transform: translateX(-45%);
  background-color: var(--bg);
  border: var(--border);
  border-radius: var(--border-radius);
  padding: 1rem;
  overflow: hidden;
  transition: height var(--speed) ease;
`

export const DropdownMenuContainer = styled(CSSTransition)`
  .menu-primary-enter {
    position: absolute;
    transform: translateX(-110%);
  }
  .menu-primary-enter-active {
    transform: translateX(0%);
    transition: all var(--speed) ease;
  }
  .menu-primary-exit {
    position: absolute;
  }
  .menu-primary-exit-active {
    transform: translateX(-110%);
    transition: all var(--speed) ease;
  }
`

export const DropdownMenuItemsContainer = styled.div`
  width: 100%;
`
