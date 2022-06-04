import React, { Fragment, useState } from 'react'

import { NavItemContainer, NavItemLink } from './style'

const NavItem = (props) => {
  const [open, setOpen] = useState(false)

  return (
    <Fragment>
      <NavItemContainer>
        <NavItemLink
          to={props.href ? props.href : ''}
          onClick={() => setOpen(!open)}
        >
          {props.icon}
        </NavItemLink>

        {open && props.children}
      </NavItemContainer>
    </Fragment>
  )
}

export default NavItem
