import React, { Fragment } from 'react'

import { CoffeeMachineContainer } from './style'

const CoffeeMachine = () => {
  return (
    <Fragment>
      <CoffeeMachineContainer>
        <div className="machine">
          <div className="machine-top">
            <div className="machine-middle"></div>
          </div>
          <div className="machine-bottom"></div>
          <div className="hand"></div>
          <div className="left-hand"></div>
          <div className="coffee"></div>
        </div>
      </CoffeeMachineContainer>
    </Fragment>
  )
}

export default CoffeeMachine
