import React, { Fragment } from 'react'

import { CactusContainer } from './style'

const Cactus = () => {
  return (
    <Fragment>
      <CactusContainer>
        <div className="cactus">
          <div className="shadow"></div>
          <div className="right">
            <div className="cube top"></div>
            <div className="cube front"></div>
            <div className="cube side"></div>
          </div>
          <div className="fork">
            <div className="cube top"></div>
            <div className="cube front"></div>
          </div>
          <div className="middle">
            <div className="cube top"></div>
            <div className="cube front"></div>
            <div className="cube side"></div>
          </div>
          <div className="fork-left">
            <div className="cube top"></div>
            <div className="cube front"></div>
          </div>
          <div className="left">
            <div className="cube top"></div>
            <div className="cube front"></div>
            <div className="cube side"></div>
          </div>
        </div>
      </CactusContainer>
    </Fragment>
  )
}

export default Cactus
