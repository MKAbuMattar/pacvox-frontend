import React, { Fragment } from 'react'

import { SnorlaxContainer } from './style'

const Snorlax = () => {
  return (
    <Fragment>
      <SnorlaxContainer>
        <div className="snorlax">
          <div className="snorlax__head">
            <div className="snorlax__head-outline"></div>
            <div className="snorlax__ear snorlax__ear--left"></div>
            <div className="snorlax__ear snorlax__ear--right"></div>
            <div className="snorlax__brow snorlax__brow--left"></div>
            <div className="snorlax__brow snorlax__brow--right"></div>
            <div className="snorlax__eye snorlax__eye--left"></div>
            <div className="snorlax__eye snorlax__eye--right"></div>
            <div className="snorlax__mouth">
              <div className="snorlax__tooth snorlax__tooth--left"></div>
              <div className="snorlax__tooth snorlax__tooth--right"></div>
            </div>
          </div>
          <div className="snorlax__arm-left">
            <div className="snorlax__arm-wrapper">
              <div className="snorlax__claws--left"></div>
              <div className="snorlax__arm-left-arm"></div>
            </div>
          </div>
          <div className="snorlax__arm-right">
            <div className="snorlax__claws--right"></div>
            <div className="snorlax__arm-right-arm"></div>
            <div className="snorlax__claw"></div>
          </div>
          <div className="snorlax__body">
            <div className="snorlax__body-shade"></div>
            <div className="snorlax__belly">
              <div className="snorlax__belly-segment snorlax__belly-segment--one"></div>
              <div className="snorlax__belly-segment snorlax__belly-segment--two"></div>
            </div>
          </div>
          <div className="snorlax__left-foot">
            <div className="snorlax__left-foot-foot"></div>
            <div className="snorlax__foot-claw snorlax__foot-claw--one">
              <div></div>
            </div>
            <div className="snorlax__foot-claw snorlax__foot-claw--two">
              <div></div>
            </div>
            <div className="snorlax__foot-claw snorlax__foot-claw--three">
              <div></div>
            </div>
          </div>
          <div className="snorlax__right-foot">
            <div className="snorlax__right-foot-foot"></div>
            <div className="snorlax__foot-claw snorlax__foot-claw--four">
              <div></div>
            </div>
            <div className="snorlax__foot-claw snorlax__foot-claw--five">
              <div></div>
            </div>
            <div className="snorlax__foot-claw snorlax__foot-claw--six">
              <div></div>
            </div>
          </div>
        </div>
      </SnorlaxContainer>
    </Fragment>
  )
}

export default Snorlax
