import React, { Fragment } from 'react'

import { NavbarContainer, NavbarContainerInner } from './style'

const Nav = (props) => {
  return (
    <Fragment>
      <NavbarContainer>
        <NavbarContainerInner>{props.children}</NavbarContainerInner>
      </NavbarContainer>
    </Fragment>
  )
}

export default Nav
