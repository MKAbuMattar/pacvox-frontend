import React, { Fragment } from 'react'

import Stars from './background/stars'
import SolarSystem from './background/solarsystem'
import Sleeping from './background/sleeping'
import Car from './background/car'
import Bicycle from './background/bicycle'
import Cactus from './background/cactus'
import Room from './background/room'
import VanillaCSS from './background/vanillacss'
import Plane from './background/plane'

const RandomBackground = () => {
  const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const backgrounds = [
    'Stars',
    'SolarSystem',
    'Sleeping',
    'Car',
    'Bicycle',
    'Cactus',
    'Room',
    'VanillaCSS',
    'Plane',
  ]

  const backgroundName = backgrounds[getRndInteger(0, backgrounds.length - 1)]

  const renderBackground = (param) => {
    switch (param) {
      case 'Stars':
        return <Stars />
      case 'SolarSystem':
        return <SolarSystem />
      case 'Sleeping':
        return <Sleeping />
      case 'Car':
        return <Car />
      case 'Bicycle':
        return <Bicycle />
      case 'Cactus':
        return <Cactus />
      case 'Room':
        return <Room />
      case 'VanillaCSS':
        return <VanillaCSS />
      case 'Plane':
        return <Plane />
      default:
        return <Stars />
    }
  }

  return <Fragment>{renderBackground(backgroundName)}</Fragment>
}

export default React.memo(RandomBackground)
