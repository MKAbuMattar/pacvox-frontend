import React, { Fragment } from 'react'

import { EditContainer, EditBox } from './style'

const Edit = (props) => {
  return (
    <Fragment>
      <EditContainer>
        <EditBox>{props.children}</EditBox>
      </EditContainer>
    </Fragment>
  )
}

export default Edit
