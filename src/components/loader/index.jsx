import React, { Fragment } from 'react'

import { LoaderContainer } from './style'

const Loader = () => {
  return (
    <Fragment>
      <LoaderContainer>
        <div className="load">
          <div className="dot"></div>
          <div className="outline">
            <span></span>
          </div>
        </div>
      </LoaderContainer>
    </Fragment>
  )
}

export default Loader
