import React, { Fragment, useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import { AiFillSetting } from 'react-icons/ai'
import { RiImageEditLine } from 'react-icons/ri'
import { BiPowerOff } from 'react-icons/bi'

import {
  LinkMenuItem,
  MenuItemIconButton,
  MenuItemIconRight,
  DropdownContainer,
  DropdownMenuContainer,
  DropdownMenuItemsContainer,
} from './style'

import { LOGOUT_ROUTE } from '../../../constants/api.constant'

const DropdownMenu = (props) => {
  const navigate = useNavigate()

  const dropdownRef = useRef(null)

  const [activeMenu, setActiveMenu] = useState('main')
  const [menuHeight, setMenuHeight] = useState(null)

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight + 30)
  }, [])

  const calcHeight = (el) => {
    const height = el.offsetHeight + 30
    setMenuHeight(height)
  }

  const handleLogout = async () => {
    const id = await JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY),
    )._id
    const data = await axios.get(`${LOGOUT_ROUTE}/${id}`)
    if (data.status === 200) {
      localStorage.clear()
      navigate('/login')
    }
  }

  const DropdownItem = (props) => {
    return (
      <Fragment>
        <LinkMenuItem
          to={props.href ? props.href : ''}
          onClick={
            props.type === 'logout'
              ? () => handleLogout()
              : () => props.goToMenu && setActiveMenu(props.goToMenu)
          }
        >
          <MenuItemIconButton>{props.leftIcon}</MenuItemIconButton>
          {props.children}
          <MenuItemIconRight>{props.rightIcon}</MenuItemIconRight>
        </LinkMenuItem>
      </Fragment>
    )
  }

  return (
    <Fragment>
      <DropdownContainer style={{ height: menuHeight }} ref={dropdownRef}>
        <DropdownMenuContainer
          in={activeMenu === 'main'}
          timeout={500}
          unmountOnExit
          onEnter={calcHeight}
        >
          <DropdownMenuItemsContainer>
            {props.user && (
              <Fragment>
                <DropdownItem
                  href={'/profile'}
                  leftIcon={
                    props.user.avatarImage ? (
                      <img
                        src={`data:image/svg+xml;base64,${props.user.avatarImage}`}
                        alt={props.user.username}
                        style={{ borderRadius: '99999999999px' }}
                      />
                    ) : (
                      <Fragment />
                    )
                  }
                >
                  {props.user.name ? props.user.name : 'My Profile'}
                </DropdownItem>

                <DropdownItem href={'/settings'} leftIcon={<AiFillSetting />}>
                  Settings
                </DropdownItem>

                <DropdownItem
                  href={'/setavatar'}
                  leftIcon={<RiImageEditLine />}
                >
                  Set Avatar
                </DropdownItem>

                <DropdownItem type="logout" leftIcon={<BiPowerOff />}>
                  Logout
                </DropdownItem>
              </Fragment>
            )}
          </DropdownMenuItemsContainer>
        </DropdownMenuContainer>
      </DropdownContainer>
    </Fragment>
  )
}

export default DropdownMenu
