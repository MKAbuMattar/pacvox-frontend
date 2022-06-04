import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { AiFillHome, AiFillCaretDown } from 'react-icons/ai'

import Nav from './nav'
import NavItem from './navitem'
import DropdownMenu from './dropdown'

import Logo from '../../assets/img/logo.svg'

import { NavLogoBox, NavItemBox } from './style'

const Navbar = (props) => {
  return (
    <Fragment>
      <Nav>
        <NavLogoBox>
          <Link to="/">
            <img src={Logo} />
          </Link>
        </NavLogoBox>
        <NavItemBox>
          <NavItem icon={<AiFillHome />} href={'/'} />
          {props.user && (
            <NavItem icon={<AiFillCaretDown />}>
              <DropdownMenu user={props.user}></DropdownMenu>
            </NavItem>
          )}
        </NavItemBox>
      </Nav>
    </Fragment>
  )
}

export default Navbar
