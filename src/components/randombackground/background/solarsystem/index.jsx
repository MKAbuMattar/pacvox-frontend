import React, { Fragment } from 'react'

import { SolarSystemContainer } from './style'

const SolarSystem = () => {
  return (
    <Fragment>
      <SolarSystemContainer>
        <div className="solar-syst">
          <div className="sun"></div>
          <div className="mercury"></div>
          <div className="venus"></div>
          <div className="earth"></div>
          <div className="mars"></div>
          <div className="jupiter"></div>
          <div className="saturn"></div>
          <div className="uranus"></div>
          <div className="neptune"></div>
          <div className="pluto"></div>
          <div className="asteroids-belt"></div>
        </div>
      </SolarSystemContainer>
    </Fragment>
  )
}

export default SolarSystem
