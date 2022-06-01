import React, { Fragment } from 'react'

import { SleepingContainer } from './style'

const Sleeping = () => {
  return (
    <Fragment>
      <SleepingContainer>
        <div className="container">
          <div className="on-ground-lights">
            <div className="window-light">
              <div className="cat">
                <div className="head"></div>
              </div>
            </div>
            <div className="window-light"></div>
          </div>
          <div className="table right">
            <div className="table-shadow">
              <div className="window-light"></div>
            </div>
          </div>
          <div className="bed">
            <div className="bed-shadow">
              <div className="window-light"></div>
              <div className="window-light"></div>
            </div>
            <div className="bed-head"></div>
            <div className="ground-cloth">
              <div className="window-light"></div>
              <div className="window-light"></div>
              <div className="under-pillow-shadows">
                <div className="head-shadow"></div>
                <div className="neck-shadow"></div>
              </div>
              <div className="pillow">
                <div className="window-light"></div>
                <div className="pillow-shadows">
                  <div className="ear-shadow"></div>
                  <div className="head-shadow"></div>
                </div>
              </div>
              <div className="boy">
                <div className="shoulder"></div>
                <div className="neck"></div>
                <div className="ears"></div>
                <div className="head">
                  <div className="nose"></div>
                  <div className="eyebrows">
                    <div className="eyebrow"></div>
                    <div className="eyebrow"></div>
                  </div>
                  <div className="eyes"></div>
                  <div className="mouth"></div>
                </div>
                <div className="hair">
                  <div className="part"></div>
                  <div className="part keen"></div>
                  <div className="part keen"></div>
                  <div className="part keen"></div>
                  <div className="part keen"></div>
                  <div className="part keen"></div>
                  <div className="part"></div>
                  <div className="part"></div>
                </div>
              </div>
            </div>
            <div className="quilt">
              <div className="top">
                <div className="window-light"></div>
                <div className="window-light"></div>
                <div className="window-light"></div>
                <div className="window-light"></div>
              </div>
              <div className="bottom">
                <div className="window-light"></div>
                <div className="window-light"></div>
              </div>
            </div>
          </div>
          <div className="shoes">
            <div className="shoe"></div>
            <div className="shoe"></div>
          </div>
          <div className="table left">
            <div className="lamp">
              <div className="bulb"></div>
            </div>
            <div className="phone"></div>
          </div>
        </div>
      </SleepingContainer>
    </Fragment>
  )
}

export default Sleeping
