import styled from 'styled-components'

// https://codepen.io/ricardoolivaalonso/pen/mdPzrpe

export const RoomContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: pointer;
  background-image: radial-gradient(circle, #171424, black);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -1;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
    transform-style: preserve-3d;
    -webkit-tap-highlight-color: transparent;
    &::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      user-select: none;
      transform-style: preserve-3d;
      -webkit-tap-highlight-color: transparent;
    }
    &::before {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      user-select: none;
      transform-style: preserve-3d;
      -webkit-tap-highlight-color: transparent;
    }
  }
  .face {
    position: absolute;
  }
  .house {
    position: absolute;
    width: 28vw;
    height: 28vw;
    transform: perspective(90vw) rotateX(75deg) rotateZ(45deg) translateZ(-9vw);
  }
  .h-shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 1.5vw -3vw 3vw black, 1.5vw 0.5vw 1.5vw black;
  }
  .h-lights {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 45vw;
    height: 45vw;
  }
  .h-light {
    position: absolute;
    &:nth-of-type(1) {
      bottom: 5vw;
      right: 0;
      width: 14vw;
      height: 14vw;
      border-radius: 50%;
      background-image: radial-gradient(#1b182a, transparent);
      filter: blur(1vw);
    }
    &:nth-of-type(2) {
      bottom: 18vw;
      right: -1vw;
      width: 2vw;
      height: 12vw;
      border-radius: 50%;
      transform: rotateZ(-50deg);
      background-image: radial-gradient(
        rgba(81, 137, 251, 0.45) 50%,
        rgba(40, 125, 210, 0.45),
        transparent
      );
      box-shadow: -1vw -1vw 2vw 1vw rgba(131, 171, 252, 0.1);
      filter: blur(1vw);
    }
    &:nth-of-type(3) {
      bottom: -2vw;
      right: 17vw;
      width: 5vw;
      height: 12vw;
      border-radius: 50%;
      transform: rotateZ(-50deg);
      background-image: radial-gradient(
        rgba(81, 137, 251, 0.5) 50%,
        rgba(40, 125, 210, 0.5),
        transparent
      );
      filter: blur(2vw);
      &::before {
        content: '';
        position: absolute;
        width: 200%;
        top: -6vw;
        height: 400%;
        background-image: linear-gradient(
          to bottom,
          rgba(40, 125, 210, 0.1),
          rgba(81, 137, 251, 0.1),
          transparent
        );
        border-top-left-radius: 10vw;
        border-top-right-radius: 10vw;
        filter: blur(1.5vw);
        right: -50%;
        transform-origin: top right;
        transform: rotateZ(15deg);
        box-shadow: -2vw -2vw 0 rgba(81, 137, 251, 0.075);
      }
      &::after {
        content: '';
        position: absolute;
        width: 200%;
        top: -6vw;
        height: 400%;
        background-image: linear-gradient(
          to bottom,
          rgba(40, 125, 210, 0.1),
          rgba(81, 137, 251, 0.1),
          transparent
        );
        border-top-left-radius: 10vw;
        border-top-right-radius: 10vw;
        filter: blur(1.5vw);
        left: -50%;
        transform-origin: top left;
        transform: rotateZ(-15deg);
        box-shadow: 2vw -2vw 0 rgba(81, 137, 251, 0.075);
      }
    }
    &:nth-of-type(4) {
      bottom: 5vw;
      left: 8vw;
      width: 28vw;
      height: 4vw;
      transform-origin: top left;
      transform: skewX(58deg);
      background-image: linear-gradient(
        to right,
        rgba(81, 137, 251, 0.075) 10%,
        transparent 25%,
        transparent,
        rgba(0, 0, 0, 0.15)
      );
      filter: blur(0.25vw);
    }
    &:nth-of-type(6) {
      bottom: 14vw;
      right: 2vw;
      width: 8vw;
      height: 16vw;
      transform-origin: bottom left;
      transform: skewY(49deg);
      background-image: linear-gradient(
        to left,
        rgba(0, 0, 0, 0.1),
        rgba(0, 0, 0, 0.7)
      );
      filter: blur(0.35vw);
    }
  }
  .alt {
    position: absolute;
    left: 0;
    top: 0;
    width: 27vw;
    height: 27vw;
  }
  .alt__front {
    width: 27vw;
    height: 0.5vw;
    transform-origin: bottom left;
    transform: rotateX(-90deg) translateZ(26.5vw);
    background-color: #9e99c1;
  }
  .alt__back {
    width: 27vw;
    height: 0.5vw;
    transform-origin: top left;
    transform: rotateX(-90deg) rotateY(180deg) translateX(-27vw)
      translateY(-0.5vw);
    background-color: #383358;
  }
  .alt__right {
    width: 27vw;
    height: 0.5vw;
    transform-origin: top left;
    transform: rotateY(90deg) rotateZ(-90deg) translateZ(27vw) translateX(-27vw)
      translateY(-0.5vw);
    background-color: #383358;
  }
  .alt__left {
    width: 27vw;
    height: 0.5vw;
    transform-origin: top left;
    transform: rotateY(-90deg) rotateZ(90deg) translateY(-0.5vw);
    background-color: #fbfafe;
  }
  .alt__top {
    width: 27vw;
    height: 27vw;
    transform-origin: top left;
    transform: translateZ(0.5vw);
    background-image: linear-gradient(to bottom, #0b0c1f, #383358, #9e99c1);
    .light {
      &:nth-of-type(1) {
        position: absolute;
        height: 100%;
        width: 100%;
        background-image: linear-gradient(
          to bottom,
          rgba(20, 61, 103, 0.75),
          rgba(81, 137, 251, 0.75),
          transparent
        );
      }
      &:nth-of-type(2) {
        position: absolute;
        left: 4vw;
        height: 100%;
        width: 6vw;
        background-image: linear-gradient(
          to bottom,
          transparent 20%,
          rgba(40, 125, 210, 0.75),
          rgba(81, 137, 251, 0.25) 80%
        );
        filter: blur(0.1vw);
      }
      &:nth-of-type(3) {
        position: absolute;
        bottom: 10vw;
        left: 5vw;
        width: 6vw;
        height: 3vw;
        border-radius: 50%;
        transform: rotateZ(42deg);
        background-image: radial-gradient(
          rgba(131, 171, 252, 0.75) 50%,
          rgba(32, 99, 167, 0.75)
        );
        filter: blur(0.55vw);
      }
      &:nth-of-type(4) {
        position: absolute;
        bottom: 7vw;
        left: 4vw;
        width: 8.5vw;
        height: 2vw;
        border-radius: 50%;
        transform: rotateZ(40deg);
        background-image: radial-gradient(
          rgba(131, 171, 252, 0.75) 50%,
          rgba(32, 99, 167, 0.75)
        );
        filter: blur(0.55vw);
      }
      &:nth-of-type(5) {
        position: absolute;
        bottom: 3.5vw;
        left: 4.5vw;
        width: 6vw;
        height: 2vw;
        border-radius: 50%;
        transform: rotateZ(40deg);
        background-image: radial-gradient(
          rgba(141, 178, 252, 0.75) 50%,
          rgba(32, 99, 167, 0.75)
        );
        filter: blur(0.75vw);
      }
      &:nth-of-type(6) {
        position: absolute;
        bottom: 3vw;
        left: 0.5vw;
        width: 4vw;
        height: 2vw;
        border-radius: 50%;
        transform: rotateZ(40deg);
        background-image: radial-gradient(
          rgba(141, 178, 252, 0.75) 50%,
          rgba(32, 99, 167, 0.75)
        );
        filter: blur(0.35vw);
      }
      &:nth-of-type(7) {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(
          to right,
          black,
          #5189fb 10%,
          transparent 20%
        );
        &::before {
          content: '';
          position: absolute;
          width: 20%;
          height: 100%;
          background-image: linear-gradient(
            to right,
            rgba(5, 70, 199, 0.6),
            transparent 60%
          );
        }
        &::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 20%;
          background-image: linear-gradient(
            to bottom,
            rgba(6, 78, 224, 0.5),
            transparent 60%
          );
        }
      }
      &:nth-of-type(8) {
        position: absolute;
        bottom: 5vw;
        left: 10vw;
        width: 6vw;
        height: 4vw;
        border-radius: 50%;
        transform: rotateZ(40deg);
        background-image: radial-gradient(
          rgba(255, 255, 255, 0.1) 50%,
          rgba(128, 121, 174, 0.1)
        );
        filter: blur(0.8vw);
      }
    }
  }
  .alt__bottom {
    width: 27vw;
    height: 27vw;
    transform-origin: top left;
    transform: rotateY(180deg) translateX(-27vw);
    background-color: #383358;
  }
  .alb {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 27vw;
    height: 1vw;
  }
  .alb__front {
    width: 27vw;
    height: 2vw;
    transform-origin: bottom left;
    transform: rotateX(-90deg) translateZ(-1vw);
    background-image: linear-gradient(to right, #9e99c1 40%, #8f89b7);
  }
  .alb__back {
    width: 27vw;
    height: 2vw;
    transform-origin: top left;
    transform: rotateX(-90deg) rotateY(180deg) translateX(-27vw)
      translateY(-2vw);
    background-color: #383358;
  }
  .alb__right {
    width: 1vw;
    height: 2vw;
    transform-origin: top left;
    transform: rotateY(90deg) rotateZ(-90deg) translateZ(27vw) translateX(-1vw)
      translateY(-2vw);
    background-color: #383358;
  }
  .alb__left {
    width: 1vw;
    height: 2vw;
    transform-origin: top left;
    transform: rotateY(-90deg) rotateZ(90deg) translateY(-2vw);
    background-color: #fbfafe;
  }
  .alb__top {
    width: 27vw;
    height: 1vw;
    transform-origin: top left;
    transform: translateZ(2vw);
    background-image: linear-gradient(to right, #fbfafe 40%, #eae5fa);
  }
  .alb__bottom {
    width: 27vw;
    height: 1vw;
    transform-origin: top left;
    transform: rotateY(180deg) translateX(-27vw);
    background-color: #383358;
  }
  .arb {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 1vw;
    height: 28vw;
  }
  .arb__front {
    width: 1vw;
    height: 2vw;
    transform-origin: bottom left;
    transform: rotateX(-90deg) translateZ(26vw);
    background-color: #8f89b7;
  }
  .arb__back {
    width: 1vw;
    height: 2vw;
    transform-origin: top left;
    transform: rotateX(-90deg) rotateY(180deg) translateX(-1vw) translateY(-2vw);
    background-color: #383358;
  }
  .arb__right {
    width: 28vw;
    height: 2vw;
    transform-origin: top left;
    transform: rotateY(90deg) rotateZ(-90deg) translateZ(1vw) translateX(-28vw)
      translateY(-2vw);
    background-image: linear-gradient(to right, #282347 40%, #0f0e17);
  }
  .arb__left {
    width: 28vw;
    height: 2vw;
    transform-origin: top left;
    transform: rotateY(-90deg) rotateZ(90deg) translateY(-2vw);
    background-color: #9e99c1;
  }
  .arb__top {
    width: 1vw;
    height: 28vw;
    transform-origin: top left;
    transform: translateZ(2vw);
    background-image: linear-gradient(
      to top,
      #fbfafe,
      #3b3469 25%,
      #2e2a48 75%,
      #9e99c1
    );
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 30%;
      top: 0;
      background-image: linear-gradient(
        to bottom,
        transparent,
        rgba(81, 137, 251, 0.85),
        transparent
      );
    }
  }
  .arb__bottom {
    width: 1vw;
    height: 28vw;
    transform-origin: top left;
    transform: rotateY(180deg) translateX(-1vw);
    background-color: #383358;
  }
  .blt {
    position: absolute;
    left: 0;
    top: 0;
    width: 1vw;
    height: 27vw;
    transform: translateZ(0.5vw);
  }
  .blt__front {
    width: 1vw;
    height: 20vw;
    transform-origin: bottom left;
    transform: rotateX(-90deg) translateZ(7vw);
    background-image: linear-gradient(to bottom, #383358, #9e99c1);
  }
  .blt__back {
    width: 1vw;
    height: 20vw;
    transform-origin: top left;
    transform: rotateX(-90deg) rotateY(180deg) translateX(-1vw)
      translateY(-20vw);
    background-color: #383358;
  }
  .blt__right {
    width: 27vw;
    height: 20vw;
    transform-origin: top left;
    transform: rotateY(90deg) rotateZ(-90deg) translateZ(1vw) translateX(-27vw)
      translateY(-20vw);
    background-image: linear-gradient(
      to bottom,
      #151225,
      #383358,
      #383358 90%,
      #242040
    );
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 0.75vw;
      background-image: linear-gradient(to bottom, #8f89b7, #287dd2);
      border-top: 0.1vw solid #282347;
      border-bottom: 0.1vw solid #282347;
    }
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        to bottom,
        rgba(6, 78, 224, 0.35),
        transparent 30%,
        transparent 70%,
        rgba(40, 125, 210, 0.35)
      );
    }
  }
  .blt__left {
    width: 27vw;
    height: 20vw;
    transform-origin: top left;
    transform: rotateY(-90deg) rotateZ(90deg) translateY(-20vw);
    background-color: #fbfafe;
  }
  .blt__top {
    width: 1vw;
    height: 27vw;
    transform-origin: top left;
    transform: translateZ(20vw);
  }
  .blt__bottom {
    width: 1vw;
    height: 27vw;
    transform-origin: top left;
    transform: rotateY(180deg) translateX(-1vw);
    background-color: #383358;
  }
  .blt2 {
    position: absolute;
    left: 0;
    top: 0;
    width: 2vw;
    height: 27vw;
    transform: translateZ(20.5vw);
  }
  .blt2__front {
    width: 2vw;
    height: 0.75vw;
    transform-origin: bottom left;
    transform: rotateX(-90deg) translateZ(26.25vw);
    background-color: #383358;
  }
  .blt2__back {
    width: 2vw;
    height: 0.75vw;
    transform-origin: top left;
    transform: rotateX(-90deg) rotateY(180deg) translateX(-2vw)
      translateY(-0.75vw);
    background-color: #383358;
  }
  .blt2__right {
    width: 27vw;
    height: 0.75vw;
    transform-origin: top left;
    transform: rotateY(90deg) rotateZ(-90deg) translateZ(2vw) translateX(-27vw)
      translateY(-0.75vw);
    background-image: linear-gradient(to right, #8f89b7, #9e99c1, #7169a4);
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      bottom: 0;
      border-bottom: 0.1vw solid rgba(251, 250, 254, 0.75);
      background-image: linear-gradient(
        to top,
        rgba(81, 137, 251, 0.35),
        transparent
      );
    }
  }
  .blt2__left {
    width: 27vw;
    height: 0.75vw;
    transform-origin: top left;
    transform: rotateY(-90deg) rotateZ(90deg) translateY(-0.75vw);
    background-color: #fbfafe;
  }
  .blt2__top {
    width: 2vw;
    height: 27vw;
    transform-origin: top left;
    transform: translateZ(0.75vw);
    background-image: linear-gradient(to top, #9e99c1, #fbfafe);
  }
  .blt2__bottom {
    width: 2vw;
    height: 27vw;
    transform-origin: top left;
    transform: rotateY(180deg) translateX(-2vw);
    background-color: #383358;
  }
  .blb {
    position: absolute;
    left: 1vw;
    top: 0;
    width: 26vw;
    height: 1vw;
    transform: translateZ(0.5vw);
  }
  .blb__front {
    width: 26vw;
    height: 20vw;
    transform-origin: bottom left;
    transform: rotateX(-90deg) translateZ(-19vw);
    background-image: linear-gradient(to bottom, #4b4572, #595388 20%, #4b4572);
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
          to bottom,
          rgba(40, 125, 210, 0.25),
          transparent 20%,
          transparent 80%,
          rgba(40, 125, 210, 0.5)
        ),
        linear-gradient(to right, rgba(31, 33, 88, 0.35), transparent),
        linear-gradient(to bottom, rgba(31, 33, 88, 0.35), transparent),
        linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.5),
          transparent 20%,
          transparent 80%,
          rgba(40, 125, 210, 0.25)
        );
    }
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 0.75vw;
      background-image: linear-gradient(to bottom, #8f89b7, #287dd2);
      border-top: 0.1vw solid #282347;
      border-bottom: 0.1vw solid #282347;
    }
  }
  .blb__back {
    width: 26vw;
    height: 20vw;
    transform-origin: top left;
    transform: rotateX(-90deg) rotateY(180deg) translateX(-26vw)
      translateY(-20vw);
    background-color: #383358;
  }
  .blb__right {
    width: 1vw;
    height: 20vw;
    transform-origin: top left;
    transform: rotateY(90deg) rotateZ(-90deg) translateZ(26vw) translateX(-1vw)
      translateY(-20vw);
    background-image: linear-gradient(to bottom, #151225, #0f0e17 80%, #151225);
  }
  .blb__left {
    width: 1vw;
    height: 20vw;
    transform-origin: top left;
    transform: rotateY(-90deg) rotateZ(90deg) translateY(-20vw);
  }
  .blb__top {
    width: 26vw;
    height: 1vw;
    transform-origin: top left;
    transform: translateZ(20vw);
  }
  .blb__bottom {
    width: 26vw;
    height: 1vw;
    transform-origin: top left;
    transform: rotateY(180deg) translateX(-26vw);
    background-color: #383358;
  }
  .blb2 {
    position: absolute;
    left: 2vw;
    top: 0;
    width: 25vw;
    height: 1vw;
    transform: translateZ(20.5vw);
  }
  .blb2__front {
    width: 25vw;
    height: 0.75vw;
    transform-origin: bottom left;
    transform: rotateX(-90deg) translateZ(1.25vw);
    background-image: linear-gradient(to right, #7169a4, #9e99c1, #8f89b7);
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      bottom: 0;
      border-bottom: 0.1vw solid rgba(251, 250, 254, 0.75);
      background-image: linear-gradient(
        to top,
        rgba(40, 125, 210, 0.25),
        transparent
      );
    }
  }
  .blb2__back {
    width: 25vw;
    height: 0.75vw;
    transform-origin: top left;
    transform: rotateX(-90deg) rotateY(180deg) translateX(-25vw)
      translateY(-0.75vw);
    background-color: #383358;
  }
  .blb2__right {
    width: 2vw;
    height: 0.75vw;
    transform-origin: top left;
    transform: rotateY(90deg) rotateZ(-90deg) translateZ(25vw) translateX(-2vw)
      translateY(-0.75vw);
    background-color: #151225;
  }
  .blb2__left {
    width: 2vw;
    height: 0.75vw;
    transform-origin: top left;
    transform: rotateY(-90deg) rotateZ(90deg) translateY(-0.75vw);
    background-color: #9e99c1;
  }
  .blb2__top {
    width: 25vw;
    height: 2vw;
    transform-origin: top left;
    transform: translateZ(0.75vw);
    background-image: linear-gradient(to left, #9e99c1, #fbfafe);
  }
  .blb2__bottom {
    width: 25vw;
    height: 2vw;
    transform-origin: top left;
    transform: rotateY(180deg) translateX(-25vw);
    background-color: #383358;
  }
  .bocina-l {
    position: absolute;
    left: 1.5vw;
    bottom: 5.25vw;
    width: 0.75vw;
    height: 1.5vw;
    transform: translateZ(8vw);
  }
  .bocina-r {
    position: absolute;
    left: 1.5vw;
    bottom: 5.25vw;
    width: 0.75vw;
    height: 1.5vw;
    transform: translateZ(8vw);
    top: 5.25vw;
  }
  .bocina-l__front {
    width: 0.75vw;
    height: 6vw;
    transform-origin: bottom left;
    transform: rotateX(-90deg) translateZ(-4.5vw);
    background-image: linear-gradient(to right, #5189fb, #595388 30%, #b7a5ed);
  }
  .bocina-r__front {
    width: 0.75vw;
    height: 6vw;
    transform-origin: bottom left;
    transform: rotateX(-90deg) translateZ(-4.5vw);
    background-image: linear-gradient(to right, #383358, #0f0e17);
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        to left,
        rgba(81, 137, 251, 0.35) 65%,
        rgba(81, 137, 251, 0.95)
      );
    }
  }
  .bocina-l__back {
    width: 0.75vw;
    height: 6vw;
    transform-origin: top left;
    transform: rotateX(-90deg) rotateY(180deg) translateX(-0.75vw)
      translateY(-6vw);
    background-image: linear-gradient(to right, #383358, #232038);
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        to right,
        rgba(81, 137, 251, 0.35) 65%,
        rgba(81, 137, 251, 0.95)
      );
    }
  }
  .bocina-r__back {
    width: 0.75vw;
    height: 6vw;
    transform-origin: top left;
    transform: rotateX(-90deg) rotateY(180deg) translateX(-0.75vw)
      translateY(-6vw);
    background-image: linear-gradient(to right, #595388, #b7a5ed);
  }
  .bocina-l__right {
    width: 1.5vw;
    height: 6vw;
    transform-origin: top left;
    transform: rotateY(90deg) rotateZ(-90deg) translateZ(0.75vw)
      translateX(-1.5vw) translateY(-6vw);
    background-image: radial-gradient(black, black);
  }
  .bocina-r__right {
    width: 1.5vw;
    height: 6vw;
    transform-origin: top left;
    transform: rotateY(90deg) rotateZ(-90deg) translateZ(0.75vw)
      translateX(-1.5vw) translateY(-6vw);
    background-image: radial-gradient(black, black);
  }
  .bocina-l__left {
    width: 1.5vw;
    height: 6vw;
    transform-origin: top left;
    transform: rotateY(-90deg) rotateZ(90deg) translateY(-6vw);
    background-color: #282347;
    &::before {
      content: '';
      position: absolute;
      top: -10%;
      left: 20%;
      width: 120%;
      height: 120%;
      background-image: linear-gradient(
        to left,
        rgba(7, 23, 39, 0.75),
        rgba(0, 0, 0, 0.75)
      );
      filter: blur(0.5vw);
    }
  }
  .bocina-r__left {
    width: 1.5vw;
    height: 6vw;
    transform-origin: top left;
    transform: rotateY(-90deg) rotateZ(90deg) translateY(-6vw);
    background-color: #282347;
    &::before {
      content: '';
      position: absolute;
      top: -10%;
      left: -20%;
      width: 120%;
      height: 120%;
      background-image: linear-gradient(
        to right,
        rgba(7, 23, 39, 0.75),
        rgba(0, 0, 0, 0.75)
      );
      filter: blur(0.5vw);
    }
  }
  .bocina-l__top {
    width: 0.75vw;
    height: 1.5vw;
    transform-origin: top left;
    transform: translateZ(6vw);
    background-image: linear-gradient(to left, #d9d0f6, #9e99c1, #7169a4);
  }
  .bocina-r__top {
    width: 0.75vw;
    height: 1.5vw;
    transform-origin: top left;
    transform: translateZ(6vw);
    background-image: linear-gradient(to left, #d9d0f6, #9e99c1, #7169a4);
  }
  .bocina-l__bottom {
    width: 0.75vw;
    height: 1.5vw;
    transform-origin: top left;
    transform: rotateY(180deg) translateX(-0.75vw);
    background-color: #383358;
  }
  .bocina-r__bottom {
    width: 0.75vw;
    height: 1.5vw;
    transform-origin: top left;
    transform: rotateY(180deg) translateX(-0.75vw);
    background-color: #383358;
  }
  .repisa-t {
    position: absolute;
    left: 1.5vw;
    top: 9vw;
    width: 1.5vw;
    height: 10vw;
    transform: translateZ(16vw);
  }
  .repisa-b {
    position: absolute;
    left: 1.5vw;
    top: 9vw;
    width: 1.5vw;
    height: 10vw;
    transform: translateZ(16vw);
    transform: translateZ(5vw);
  }
  .repisa-t__front {
    width: 1.5vw;
    height: 0.25vw;
    transform-origin: bottom left;
    transform: rotateX(-90deg) translateZ(9.75vw);
    background-color: #9e99c1;
  }
  .repisa-b__front {
    width: 1.5vw;
    height: 0.25vw;
    transform-origin: bottom left;
    transform: rotateX(-90deg) translateZ(9.75vw);
    background-color: #9e99c1;
  }
  .repisa-t__back {
    width: 1.5vw;
    height: 0.25vw;
    transform-origin: top left;
    transform: rotateX(-90deg) rotateY(180deg) translateX(-1.5vw)
      translateY(-0.25vw);
    background-color: #fbfafe;
  }
  .repisa-b__back {
    width: 1.5vw;
    height: 0.25vw;
    transform-origin: top left;
    transform: rotateX(-90deg) rotateY(180deg) translateX(-1.5vw)
      translateY(-0.25vw);
    background-color: #fbfafe;
  }
  .repisa-t__right {
    width: 10vw;
    height: 0.25vw;
    transform-origin: top left;
    transform: rotateY(90deg) rotateZ(-90deg) translateZ(1.5vw)
      translateX(-10vw) translateY(-0.25vw);
    background-color: #8079ae;
  }
  .repisa-b__right {
    width: 10vw;
    height: 0.25vw;
    transform-origin: top left;
    transform: rotateY(90deg) rotateZ(-90deg) translateZ(1.5vw)
      translateX(-10vw) translateY(-0.25vw);
    background-color: #8079ae;
  }
  .repisa-t__left {
    width: 10vw;
    height: 0.25vw;
    transform-origin: top left;
    transform: rotateY(-90deg) rotateZ(90deg) translateY(-0.25vw);
    background-color: #fbfafe;
  }
  .repisa-b__left {
    width: 10vw;
    height: 0.25vw;
    transform-origin: top left;
    transform: rotateY(-90deg) rotateZ(90deg) translateY(-0.25vw);
    background-color: #fbfafe;
  }
  .repisa-t__top {
    width: 1.5vw;
    height: 10vw;
    transform-origin: top left;
    transform: translateZ(0.25vw);
    background-color: #d9d0f6;
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        to right,
        rgba(6, 78, 224, 0.75),
        transparent
      );
    }
  }
  .repisa-b__top {
    width: 1.5vw;
    height: 10vw;
    transform-origin: top left;
    transform: translateZ(0.25vw);
    background-color: #d9d0f6;
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        to right,
        rgba(6, 78, 224, 0.75),
        transparent
      );
    }
  }
  .repisa-t__bottom {
    width: 1.5vw;
    height: 10vw;
    transform-origin: top left;
    transform: rotateY(180deg) translateX(-1.5vw);
    background-color: #383358;
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        to right,
        rgba(6, 78, 224, 0.75),
        transparent
      );
    }
  }
  .repisa-b__bottom {
    width: 1.5vw;
    height: 10vw;
    transform-origin: top left;
    transform: rotateY(180deg) translateX(-1.5vw);
    background-color: #383358;
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        to right,
        rgba(6, 78, 224, 0.75),
        transparent
      );
    }
  }
  .tv {
    position: absolute;
    left: 1.51vw;
    top: 8vw;
    width: 0.5vw;
    height: 12vw;
    transform: translateZ(8vw);
  }
  .tv__front {
    width: 0.5vw;
    height: 6vw;
    transform-origin: bottom left;
    transform: rotateX(-90deg) translateZ(6vw);
    background-color: #0b0c1f;
  }
  .tv__back {
    width: 0.5vw;
    height: 6vw;
    transform-origin: top left;
    transform: rotateX(-90deg) rotateY(180deg) translateX(-0.5vw)
      translateY(-6vw);
    background-color: #0b0c1f;
  }
  .tv__right {
    width: 12vw;
    height: 6vw;
    transform-origin: top left;
    transform: rotateY(90deg) rotateZ(-90deg) translateZ(0.5vw)
      translateX(-12vw) translateY(-6vw);
    background-color: #9cbcfc;
    border: 0.125vw solid black;
    animation: pantalla-tv 0.25s infinite alternate;
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      box-shadow: 0.125vw 0.125vw 1vw rgba(81, 137, 251, 0.5),
        -0.125vw 0.125vw 1vw rgba(81, 137, 251, 0.5),
        0.125vw -0.125vw 1vw rgba(81, 137, 251, 0.5),
        -0.125vw -0.125vw 1vw rgba(81, 137, 251, 0.5);
      background-image: url('https://rawcdn.githack.com/ricardoolivaalonso/Codepen/43200238c3177b02a97423fa6cc23f8bfcc5c105/Room/gif.gif');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: bottom;
      opacity: 0.8;
    }
  }
  .tv__left {
    width: 12vw;
    height: 6vw;
    transform-origin: top left;
    transform: rotateY(-90deg) rotateZ(90deg) translateY(-6vw);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0b0c1f;
    &::before {
      content: '';
      position: absolute;
      width: 13vw;
      height: 7vw;
      background-image: radial-gradient(
        rgba(36, 112, 188, 0.95),
        rgba(56, 121, 250, 0.95)
      );
      filter: blur(1.25vw);
      animation: luz-tv 0.25s infinite alternate;
    }
  }
  .tv__top {
    width: 0.5vw;
    height: 12vw;
    transform-origin: top left;
    transform: translateZ(6vw);
    background-color: #0b0c1f;
  }
  .tv__bottom {
    width: 0.5vw;
    height: 12vw;
    transform-origin: top left;
    transform: rotateY(180deg) translateX(-0.5vw);
    background-color: #0b0c1f;
  }
  .librero {
    position: absolute;
    left: 13vw;
    top: 1vw;
    width: 12vw;
    height: 0.5vw;
    transform: translateZ(7vw);
  }
  .librero__front {
    width: 12vw;
    height: 0.25vw;
    transform-origin: bottom left;
    transform: rotateX(-90deg) translateZ(1.25vw);
    background-color: #9e99c1;
  }
  .librero__back {
    width: 12vw;
    height: 0.25vw;
    transform-origin: top left;
    transform: rotateX(-90deg) rotateY(180deg) translateX(-12vw)
      translateY(-0.25vw);
    background-color: #383358;
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 4vw;
      border-radius: 50%;
      background-image: radial-gradient(
        rgba(106, 154, 251, 0.7) 50%,
        rgba(32, 99, 167, 0.6),
        transparent
      );
      filter: blur(1.25vw);
    }
  }
  .librero__right {
    width: 1.5vw;
    height: 0.25vw;
    transform-origin: top left;
    transform: rotateY(90deg) rotateZ(-90deg) translateZ(12vw)
      translateX(-1.5vw) translateY(-0.25vw);
    background-color: #383358;
  }
  .librero__left {
    width: 1.5vw;
    height: 0.25vw;
    transform-origin: top left;
    transform: rotateY(-90deg) rotateZ(90deg) translateY(-0.25vw);
    background-color: #9e99c1;
  }
  .librero__top {
    width: 12vw;
    height: 1.5vw;
    transform-origin: top left;
    transform: translateZ(0.25vw);
    background-color: #d9d0f6;
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        to bottom,
        rgba(31, 104, 249, 0.75),
        transparent
      );
    }
  }
  .librero__bottom {
    width: 12vw;
    height: 1.5vw;
    transform-origin: top left;
    transform: rotateY(180deg) translateX(-12vw);
    background-color: #383358;
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        to bottom,
        rgba(31, 104, 249, 0.75),
        transparent
      );
    }
  }
  .libros {
    position: absolute;
  }
  .libro {
    position: absolute;
    top: 1vw;
    width: 0.5vw;
    height: 1vw;
    transform: translateZ(7.25vw);
    &:nth-of-type(1) {
      left: 16vw;
      transform-origin: left;
      transform: translateZ(7.25vw) rotateZ(-10deg);
    }
    &:nth-of-type(2) {
      left: 17vw;
      transform: translateZ(7.25vw) rotateZ(2deg);
    }
    &:nth-of-type(3) {
      left: 17.75vw;
      transform: translateZ(7.25vw) rotateZ(5deg);
    }
    &:nth-of-type(4) {
      left: 19vw;
      transform-origin: left;
      transform: translateZ(7.25vw) rotateZ(10deg);
    }
    &:nth-of-type(5) {
      left: 20vw;
      transform-origin: left;
      transform: translateZ(7.25vw) rotateZ(10deg);
    }
    &:nth-of-type(6) {
      left: 23vw;
      transform-origin: left;
      transform: translateZ(7.25vw) rotateY(-90deg);
    }
  }
  .libro__front {
    width: 0.5vw;
    height: 1.5vw;
    transform-origin: bottom left;
    transform: rotateX(-90deg) translateZ(-0.5vw);
    background-image: linear-gradient(to bottom, #9e99c1, #8079ae);
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        to bottom,
        rgba(81, 137, 251, 0.4),
        transparent
      );
    }
  }
  .libro__back {
    width: 0.5vw;
    height: 1.5vw;
    transform-origin: top left;
    transform: rotateX(-90deg) rotateY(180deg) translateX(-0.5vw)
      translateY(-1.5vw);
    background-color: #fbfafe;
  }
  .libro__right {
    width: 1vw;
    height: 1.5vw;
    transform-origin: top left;
    transform: rotateY(90deg) rotateZ(-90deg) translateZ(0.5vw) translateX(-1vw)
      translateY(-1.5vw);
    background-color: #645c98;
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        to bottom,
        rgba(81, 137, 251, 0.85),
        rgba(40, 125, 210, 0.35)
      );
    }
  }
  .libro__left {
    width: 1vw;
    height: 1.5vw;
    transform-origin: top left;
    transform: rotateY(-90deg) rotateZ(90deg) translateY(-1.5vw);
    background-color: #9e99c1;
  }
  .libro__top {
    width: 0.5vw;
    height: 1vw;
    transform-origin: top left;
    transform: translateZ(1.5vw);
    background-color: #d9d0f6;
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        to bottom,
        rgba(81, 137, 251, 0.85),
        rgba(40, 125, 210, 0.35)
      );
    }
  }
  .libro__bottom {
    width: 0.5vw;
    height: 1vw;
    transform-origin: top left;
    transform: rotateY(180deg) translateX(-0.5vw);
    background-color: #554d85;
  }
  .fotos {
    position: absolute;
  }
  .foto {
    position: absolute;
    width: 0.125vw;
    height: 2vw;
    left: 2vw;
    top: 11vw;
    transform: translateZ(5.26vw);
    &:nth-of-type(1) {
      top: 10.5vw;
      transform: translateZ(5.26vw) rotateZ(5deg);
    }
    &:nth-of-type(2) {
      top: 15vw;
      transform: translateZ(5.26vw) rotateZ(-15deg);
    }
  }
  .foto__front {
    width: 0.125vw;
    height: 1.125vw;
    transform-origin: bottom left;
    transform: rotateX(-90deg) translateZ(1.125vw);
    background-image: linear-gradient(to bottom, #9e99c1, #8079ae);
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        to bottom,
        rgba(81, 137, 251, 0.4),
        transparent
      );
    }
  }
  .foto__back {
    width: 0.125vw;
    height: 1.125vw;
    transform-origin: top left;
    transform: rotateX(-90deg) rotateY(180deg) translateX(-0.125vw)
      translateY(-1.125vw);
    background-color: #fbfafe;
  }
  .foto__right {
    width: 2.25vw;
    height: 1.125vw;
    transform-origin: top left;
    transform: rotateY(90deg) rotateZ(-90deg) translateZ(0.125vw)
      translateX(-2.25vw) translateY(-1.125vw);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #8f89b7;
    border: 0.15vw solid #1f2158;
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: repeating-linear-gradient(
        to bottom,
        #9e99c1 0.1vw,
        #b7a5ed 0.2vw
      );
    }
  }
  .foto__left {
    width: 2.25vw;
    height: 1.125vw;
    transform-origin: top left;
    transform: rotateY(-90deg) rotateZ(90deg) translateY(-1.125vw);
    background-color: #9e99c1;
  }
  .foto__top {
    width: 0.125vw;
    height: 2.25vw;
    transform-origin: top left;
    transform: translateZ(1.125vw);
    background-color: #d9d0f6;
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        to bottom,
        rgba(81, 137, 251, 0.85),
        rgba(40, 125, 210, 0.35)
      );
    }
  }
  .foto__bottom {
    width: 0.125vw;
    height: 2.25vw;
    transform-origin: top left;
    transform: rotateY(180deg) translateX(-0.125vw);
    background-color: #595388;
    &::before {
      content: '';
      position: absolute;
      right: -100%;
      width: 400%;
      height: 100%;
      background-color: rgba(11, 12, 31, 0.75);
      filter: blur(0.15vw);
    }
  }
  .cajas {
    position: absolute;
  }
  .caja {
    position: absolute;
    width: 1vw;
    height: 1.5vw;
    left: 2vw;
    transform: translateZ(16.35vw);
    &:nth-of-type(1) {
      top: 11.6vw;
    }
    &:nth-of-type(2) {
      top: 13.5vw;
    }
    &:nth-of-type(3) {
      top: 17vw;
    }
  }
  .caja__front {
    width: 1vw;
    height: 0.75vw;
    transform-origin: bottom left;
    transform: rotateX(-90deg) translateZ(0.75vw);
    background-image: linear-gradient(to bottom, #9e99c1, #8079ae);
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        to bottom,
        rgba(81, 137, 251, 0.4),
        transparent
      );
    }
  }
  .caja__back {
    width: 1vw;
    height: 0.75vw;
    transform-origin: top left;
    transform: rotateX(-90deg) rotateY(180deg) translateX(-1vw)
      translateY(-0.75vw);
    background-color: #9e99c1;
  }
  .caja__right {
    width: 1.5vw;
    height: 0.75vw;
    transform-origin: top left;
    transform: rotateY(90deg) rotateZ(-90deg) translateZ(1vw) translateX(-1.5vw)
      translateY(-0.75vw);
    background-color: #645c98;
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        to bottom,
        rgba(81, 137, 251, 0.85),
        rgba(40, 125, 210, 0.35)
      );
    }
  }
  .caja__left {
    width: 1.5vw;
    height: 0.75vw;
    transform-origin: top left;
    transform: rotateY(-90deg) rotateZ(90deg) translateY(-0.75vw);
    background-color: #9e99c1;
  }
  .caja__top {
    width: 1vw;
    height: 1.5vw;
    transform-origin: top left;
    transform: translateZ(0.75vw);
    background-color: #d9d0f6;
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        to bottom,
        rgba(81, 137, 251, 0.85),
        rgba(40, 125, 210, 0.35)
      );
    }
  }
  .caja__bottom {
    width: 1vw;
    height: 1.5vw;
    transform-origin: top left;
    transform: rotateY(180deg) translateX(-1vw);
    background-color: #595388;
    &::before {
      content: '';
      position: absolute;
      right: -50%;
      width: 150%;
      height: 120%;
      background-color: rgba(31, 33, 88, 0.5);
      filter: blur(0.15vw);
    }
  }
  .cuadro-l {
    position: absolute;
    left: 13vw;
    top: 1vw;
    width: 5vw;
    height: 0.5vw;
    transform: translateZ(10vw);
  }
  .cuadro-r {
    position: absolute;
    left: 13vw;
    top: 1vw;
    width: 5vw;
    height: 0.5vw;
    transform: translateZ(10vw);
    left: 20vw;
  }
  .cuadro-l__front {
    width: 5vw;
    height: 7vw;
    transform-origin: bottom left;
    transform: rotateX(-90deg) translateZ(-6.75vw);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    background-image: url('https://rawcdn.githack.com/ricardoolivaalonso/Codepen/43200238c3177b02a97423fa6cc23f8bfcc5c105/Room/cuadro-1.jpg');
    background-color: #d51e24;
    border: 1vw solid #d51e24;
    &::before {
      content: '';
      position: absolute;
      top: -1vw;
      left: -1vw;
      width: 5vw;
      height: 7vw;
      background-origin: padding-box;
      background-image: linear-gradient(
        to bottom,
        rgba(40, 125, 210, 0.15),
        rgba(40, 125, 210, 0.15)
      );
    }
  }
  .cuadro-r__front {
    width: 5vw;
    height: 7vw;
    transform-origin: bottom left;
    transform: rotateX(-90deg) translateZ(-6.75vw);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    background-image: url('https://rawcdn.githack.com/ricardoolivaalonso/Codepen/43200238c3177b02a97423fa6cc23f8bfcc5c105/Room/cuadro-2.jpg');
    background-color: #0f1110;
    border: 0.5vw solid #0f1110;
    &::before {
      content: '';
      position: absolute;
      top: -0.5vw;
      left: -0.5vw;
      width: 5vw;
      height: 7vw;
      background-origin: padding-box;
      background-image: linear-gradient(
        to bottom,
        rgba(40, 125, 210, 0.15),
        rgba(40, 125, 210, 0.15)
      );
    }
  }
  .cuadro-l__back {
    width: 5vw;
    height: 7vw;
    transform-origin: top left;
    transform: rotateX(-90deg) rotateY(180deg) translateX(-5vw) translateY(-7vw);
    background-color: #383358;
    box-shadow: 0.35vw 0.35vw 0.35vw rgba(81, 137, 251, 0.2),
      -0.35vw 0.35vw 0.35vw rgba(81, 137, 251, 0.2),
      -0.35vw -0.35vw 0.35vw rgba(81, 137, 251, 0.2),
      0.35vw -0.35vw 0.35vw rgba(81, 137, 251, 0.2);
  }
  .cuadro-r__back {
    width: 5vw;
    height: 7vw;
    transform-origin: top left;
    transform: rotateX(-90deg) rotateY(180deg) translateX(-5vw) translateY(-7vw);
    background-color: #383358;
    box-shadow: 0.35vw 0.35vw 0.35vw rgba(81, 137, 251, 0.2),
      -0.35vw 0.35vw 0.35vw rgba(81, 137, 251, 0.2),
      -0.35vw -0.35vw 0.35vw rgba(81, 137, 251, 0.2),
      0.35vw -0.35vw 0.35vw rgba(81, 137, 251, 0.2);
  }
  .cuadro-l__right {
    width: 0.25vw;
    height: 7vw;
    transform-origin: top left;
    transform: rotateY(90deg) rotateZ(-90deg) translateZ(5vw)
      translateX(-0.25vw) translateY(-7vw);
    background-color: #383358;
  }
  .cuadro-r__right {
    width: 0.25vw;
    height: 7vw;
    transform-origin: top left;
    transform: rotateY(90deg) rotateZ(-90deg) translateZ(5vw)
      translateX(-0.25vw) translateY(-7vw);
    background-color: #383358;
  }
  .cuadro-l__left {
    width: 0.25vw;
    height: 7vw;
    transform-origin: top left;
    transform: rotateY(-90deg) rotateZ(90deg) translateY(-7vw);
    background-color: #9e99c1;
  }
  .cuadro-r__left {
    width: 0.25vw;
    height: 7vw;
    transform-origin: top left;
    transform: rotateY(-90deg) rotateZ(90deg) translateY(-7vw);
    background-color: #9e99c1;
  }
  .cuadro-l__top {
    width: 5vw;
    height: 0.25vw;
    transform-origin: top left;
    transform: translateZ(7vw);
    background-color: #9e99c1;
  }
  .cuadro-r__top {
    width: 5vw;
    height: 0.25vw;
    transform-origin: top left;
    transform: translateZ(7vw);
    background-color: #9e99c1;
  }
  .cuadro-l__bottom {
    width: 5vw;
    height: 0.25vw;
    transform-origin: top left;
    transform: rotateY(180deg) translateX(-5vw);
    background-color: #383358;
  }
  .cuadro-r__bottom {
    width: 5vw;
    height: 0.25vw;
    transform-origin: top left;
    transform: rotateY(180deg) translateX(-5vw);
    background-color: #383358;
  }
  .puerta-c {
    position: absolute;
    left: 3vw;
    top: 1vw;
    width: 8vw;
    height: 0.5vw;
    transform: translateZ(0.5vw);
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 200%;
      background-color: rgba(0, 0, 0, 0.65);
      filter: blur(0.5vw);
    }
  }
  .puerta {
    position: absolute;
    left: 0.5vw;
    top: 0;
    width: 7vw;
    height: 0.5vw;
  }
  .puerta__front {
    width: 7vw;
    height: 16vw;
    transform-origin: bottom left;
    transform: rotateX(-90deg) translateZ(-15.75vw);
    background-image: linear-gradient(to bottom, #0f1110, #121332);
    border: 0.125vw solid #5189fb;
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: radial-gradient(
        transparent 50%,
        rgba(4, 61, 174, 0.25)
      );
      box-shadow: 0.65vw 0.65vw 0.5vw rgba(81, 137, 251, 0.6),
        -0.65vw 0.65vw 0.5vw rgba(81, 137, 251, 0.6),
        -0.65vw -0.65vw 0.5vw rgba(81, 137, 251, 0.6),
        0.65vw -0.65vw 0.5vw rgba(81, 137, 251, 0.6);
    }
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      right: 0.75vw;
      width: 1vw;
      height: 0.25vw;
      background-color: #9e99c1;
      box-shadow: 0.125vw 0.125vw 0.25vw rgba(81, 137, 251, 0.6),
        -0.125vw 0.125vw 0.25vw rgba(81, 137, 251, 0.6),
        -0.125vw -0.125vw 0.25vw rgba(81, 137, 251, 0.6),
        0.125vw -0.125vw 0.25vw rgba(81, 137, 251, 0.6);
    }
  }
  .puerta__back {
    width: 7vw;
    height: 16vw;
    transform-origin: top left;
    transform: rotateX(-90deg) rotateY(180deg) translateX(-7vw)
      translateY(-16vw);
  }
  .puerta__right {
    width: 0.25vw;
    height: 16vw;
    transform-origin: top left;
    transform: rotateY(90deg) rotateZ(-90deg) translateZ(7vw)
      translateX(-0.25vw) translateY(-16vw);
  }
  .puerta__left {
    width: 0.25vw;
    height: 16vw;
    transform-origin: top left;
    transform: rotateY(-90deg) rotateZ(90deg) translateY(-16vw);
  }
  .puerta__top {
    width: 7vw;
    height: 0.25vw;
    transform-origin: top left;
    transform: translateZ(16vw);
  }
  .puerta__bottom {
    width: 7vw;
    height: 0.25vw;
    transform-origin: top left;
    transform: rotateY(180deg) translateX(-7vw);
  }
  .puerta-l {
    position: absolute;
    left: 0;
    top: 0;
    width: 0.5vw;
    height: 0.5vw;
  }
  .puerta-r {
    position: absolute;
    left: 0;
    top: 0;
    width: 0.5vw;
    height: 0.5vw;
    left: calc(100% - 0.5vw);
  }
  .puerta-l__front {
    width: 0.5vw;
    height: 16vw;
    transform-origin: bottom left;
    transform: rotateX(-90deg) translateZ(-15.5vw);
    background-color: #121332;
  }
  .puerta-r__front {
    width: 0.5vw;
    height: 16vw;
    transform-origin: bottom left;
    transform: rotateX(-90deg) translateZ(-15.5vw);
    background-color: #121332;
  }
  .puerta-l__back {
    width: 0.5vw;
    height: 16vw;
    transform-origin: top left;
    transform: rotateX(-90deg) rotateY(180deg) translateX(-0.5vw)
      translateY(-16vw);
    background-color: #0b0c1f;
  }
  .puerta-r__back {
    width: 0.5vw;
    height: 16vw;
    transform-origin: top left;
    transform: rotateX(-90deg) rotateY(180deg) translateX(-0.5vw)
      translateY(-16vw);
    background-color: #0b0c1f;
  }
  .puerta-l__right {
    width: 0.5vw;
    height: 16vw;
    transform-origin: top left;
    transform: rotateY(90deg) rotateZ(-90deg) translateZ(0.5vw)
      translateX(-0.5vw) translateY(-16vw);
    background-color: #0b0c1f;
  }
  .puerta-r__right {
    width: 0.5vw;
    height: 16vw;
    transform-origin: top left;
    transform: rotateY(90deg) rotateZ(-90deg) translateZ(0.5vw)
      translateX(-0.5vw) translateY(-16vw);
    background-color: #0b0c1f;
  }
  .puerta-l__left {
    width: 0.5vw;
    height: 16vw;
    transform-origin: top left;
    transform: rotateY(-90deg) rotateZ(90deg) translateY(-16vw);
    background-color: #121332;
  }
  .puerta-r__left {
    width: 0.5vw;
    height: 16vw;
    transform-origin: top left;
    transform: rotateY(-90deg) rotateZ(90deg) translateY(-16vw);
    background-color: #121332;
  }
  .puerta-l__top {
    width: 0.5vw;
    height: 0.5vw;
    transform-origin: top left;
    transform: translateZ(16vw);
  }
  .puerta-r__top {
    width: 0.5vw;
    height: 0.5vw;
    transform-origin: top left;
    transform: translateZ(16vw);
  }
  .puerta-l__bottom {
    width: 0.5vw;
    height: 0.5vw;
    transform-origin: top left;
    transform: rotateY(180deg) translateX(-0.5vw);
    background-color: #0b0c1f;
  }
  .puerta-r__bottom {
    width: 0.5vw;
    height: 0.5vw;
    transform-origin: top left;
    transform: rotateY(180deg) translateX(-0.5vw);
    background-color: #0b0c1f;
  }
  .puerta-t {
    left: 0;
    top: 0;
    width: 8vw;
    height: 0.5vw;
    transform: translateZ(16vw);
  }
  .puerta-t__front {
    width: 8vw;
    height: 0.5vw;
    transform-origin: bottom left;
    transform: rotateX(-90deg) translateZ(0vw);
    background-color: #121332;
  }
  .puerta-t__back {
    width: 8vw;
    height: 0.5vw;
    transform-origin: top left;
    transform: rotateX(-90deg) rotateY(180deg) translateX(-8vw)
      translateY(-0.5vw);
    background-color: #0b0c1f;
  }
  .puerta-t__right {
    width: 0.5vw;
    height: 0.5vw;
    transform-origin: top left;
    transform: rotateY(90deg) rotateZ(-90deg) translateZ(8vw) translateX(-0.5vw)
      translateY(-0.5vw);
    background-color: #0b0c1f;
  }
  .puerta-t__left {
    width: 0.5vw;
    height: 0.5vw;
    transform-origin: top left;
    transform: rotateY(-90deg) rotateZ(90deg) translateY(-0.5vw);
    background-color: #121332;
  }
  .puerta-t__top {
    width: 8vw;
    height: 0.5vw;
    transform-origin: top left;
    transform: translateZ(0.5vw);
    background-color: #1f2158;
  }
  .puerta-t__bottom {
    width: 8vw;
    height: 0.5vw;
    transform-origin: top left;
    transform: rotateY(180deg) translateX(-8vw);
    background-color: #0b0c1f;
  }
  .muro {
    position: absolute;
    left: 1vw;
    top: 6vw;
    width: 0.5vw;
    height: 16vw;
    transform: translateZ(0.51vw);
  }
  .muro__front {
    width: 0.5vw;
    height: 18vw;
    transform-origin: bottom left;
    transform: rotateX(-90deg) translateZ(-2vw);
    background-color: #0b0c1f;
  }
  .muro__back {
    width: 0.5vw;
    height: 18vw;
    transform-origin: top left;
    transform: rotateX(-90deg) rotateY(180deg) translateX(-0.5vw)
      translateY(-18vw);
    background-color: #0b0c1f;
  }
  .muro__right {
    width: 16vw;
    height: 18vw;
    transform-origin: top left;
    transform: rotateY(90deg) rotateZ(-90deg) translateZ(0.5vw)
      translateX(-16vw) translateY(-18vw);
    display: flex;
    justify-content: center;
    background-image: radial-gradient(circle, #1f2158, #0b0c1f);
    overflow: hidden;
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        to bottom,
        rgba(40, 125, 210, 0.25),
        transparent 30%,
        transparent 70%,
        rgba(40, 125, 210, 0.15)
      );
    }
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 5%;
      width: 90%;
      height: 25%;
      background-image: linear-gradient(
        to bottom,
        rgba(4, 5, 13, 0.75),
        rgba(4, 5, 13, 0.95)
      );
      filter: blur(0.75vw);
    }
  }
  .muro__left {
    width: 16vw;
    height: 18vw;
    transform-origin: top left;
    transform: rotateY(-90deg) rotateZ(90deg) translateY(-18vw);
    background-color: #0b0c1f;
    box-shadow: 0.5vw 0.5vw 0.6vw rgba(81, 137, 251, 0.3),
      0.5vw -0.5vw 0.6vw rgba(81, 137, 251, 0.3),
      -0.5vw 0.5vw 0.6vw rgba(81, 137, 251, 0.3),
      -0.5vw -0.5vw 0.6vw rgba(81, 137, 251, 0.3);
  }
  .muro__top {
    width: 0.5vw;
    height: 16vw;
    transform-origin: top left;
    transform: translateZ(18vw);
    background-color: #0b0c1f;
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      bottom: 0;
      background-image: linear-gradient(
        to left,
        rgba(40, 125, 210, 0.5),
        rgba(81, 137, 251, 0.25)
      );
    }
  }
  .muro__bottom {
    width: 0.5vw;
    height: 16vw;
    transform-origin: top left;
    transform: rotateY(180deg) translateX(-0.5vw);
    background-color: #0b0c1f;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 5vw;
      height: 100%;
      background-image: linear-gradient(to left, #0b0c1f, transparent 50%);
      transform-origin: right bottom;
      transform: skewY(-20deg);
      filter: blur(0.25vw);
    }
  }
  .sillon-c {
    position: absolute;
    right: 2vw;
    bottom: 6vw;
    width: 6vw;
    height: 16vw;
    transform: translateZ(0.5vw);
    &::before {
      content: '';
      position: absolute;
      top: -10%;
      left: -10%;
      width: 120%;
      height: 120%;
      background-color: rgba(11, 12, 31, 0.85);
      filter: blur(0.75vw);
    }
  }
  .sillon-b {
    position: absolute;
    left: 0;
    top: 1vw;
    width: 6vw;
    height: 14vw;
  }
  .sillon-b__front {
    width: 6vw;
    height: 3vw;
    transform-origin: bottom left;
    transform: rotateX(-90deg) translateZ(11vw);
    background-color: #121332;
  }
  .sillon-b__back {
    width: 6vw;
    height: 3vw;
    transform-origin: top left;
    transform: rotateX(-90deg) rotateY(180deg) translateX(-6vw) translateY(-3vw);
    background-color: #0b0c1f;
  }
  .sillon-b__right {
    width: 14vw;
    height: 3vw;
    transform-origin: top left;
    transform: rotateY(90deg) rotateZ(-90deg) translateZ(6vw) translateX(-14vw)
      translateY(-3vw);
    background-color: #0b0c1f;
  }
  .sillon-b__left {
    width: 14vw;
    height: 3vw;
    transform-origin: top left;
    transform: rotateY(-90deg) rotateZ(90deg) translateY(-3vw);
    background-image: linear-gradient(to bottom, #121332, #0b0c1f);
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        to bottom,
        rgba(40, 125, 210, 0.1),
        transparent
      );
    }
  }
  .sillon-b__top {
    width: 6vw;
    height: 14vw;
    transform-origin: top left;
    transform: translateZ(3vw);
    background-image: linear-gradient(to right, #1f2158, #121332);
    border-left: 0.1vw solid rgba(158, 153, 193, 0.5);
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        to right,
        rgba(40, 125, 210, 0.25),
        transparent
      );
    }
  }
  .sillon-b__bottom {
    width: 6vw;
    height: 14vw;
    transform-origin: top left;
    transform: rotateY(180deg) translateX(-6vw);
    background-color: #0b0c1f;
  }
  .sillon-l {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 6vw;
    height: 1vw;
  }
  .sillon-r {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 6vw;
    height: 1vw;
    top: 0;
  }
  .sillon-l__front {
    width: 6vw;
    height: 4.5vw;
    transform-origin: bottom left;
    transform: rotateX(-90deg) translateZ(-3.5vw);
    background-image: linear-gradient(to bottom, #121332, #0b0c1f);
  }
  .sillon-r__front {
    width: 6vw;
    height: 4.5vw;
    transform-origin: bottom left;
    transform: rotateX(-90deg) translateZ(-3.5vw);
    background-image: linear-gradient(to bottom, #121332, #0b0c1f);
  }
  .sillon-l__back {
    width: 6vw;
    height: 4.5vw;
    transform-origin: top left;
    transform: rotateX(-90deg) rotateY(180deg) translateX(-6vw)
      translateY(-4.5vw);
    background-color: #0b0c1f;
  }
  .sillon-r__back {
    width: 6vw;
    height: 4.5vw;
    transform-origin: top left;
    transform: rotateX(-90deg) rotateY(180deg) translateX(-6vw)
      translateY(-4.5vw);
    background-color: #0b0c1f;
  }
  .sillon-l__right {
    width: 1vw;
    height: 4.5vw;
    transform-origin: top left;
    transform: rotateY(90deg) rotateZ(-90deg) translateZ(6vw) translateX(-1vw)
      translateY(-4.5vw);
    background-image: linear-gradient(to bottom, #0b0c1f, black);
  }
  .sillon-r__right {
    width: 1vw;
    height: 4.5vw;
    transform-origin: top left;
    transform: rotateY(90deg) rotateZ(-90deg) translateZ(6vw) translateX(-1vw)
      translateY(-4.5vw);
    background-image: linear-gradient(to bottom, #0b0c1f, black);
  }
  .sillon-l__left {
    width: 1vw;
    height: 4.5vw;
    transform-origin: top left;
    transform: rotateY(-90deg) rotateZ(90deg) translateY(-4.5vw);
    background-image: linear-gradient(to bottom, #121332, #0b0c1f);
  }
  .sillon-r__left {
    width: 1vw;
    height: 4.5vw;
    transform-origin: top left;
    transform: rotateY(-90deg) rotateZ(90deg) translateY(-4.5vw);
    background-image: linear-gradient(to bottom, #121332, #0b0c1f);
  }
  .sillon-l__top {
    width: 6vw;
    height: 1vw;
    transform-origin: top left;
    transform: translateZ(4.5vw);
    background-image: linear-gradient(to right, #1f2158, #0f102b);
    border-bottom: 0.1vw solid rgba(158, 153, 193, 0.5);
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        to right,
        rgba(40, 125, 210, 0.75),
        transparent
      );
    }
  }
  .sillon-r__top {
    width: 6vw;
    height: 1vw;
    transform-origin: top left;
    transform: translateZ(4.5vw);
    background-image: linear-gradient(to right, #1f2158, #0f102b);
    border-bottom: 0.1vw solid rgba(158, 153, 193, 0.5);
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        to right,
        rgba(40, 125, 210, 0.75),
        transparent
      );
    }
  }
  .sillon-l__bottom {
    width: 6vw;
    height: 1vw;
    transform-origin: top left;
    transform: rotateY(180deg) translateX(-6vw);
    background-color: #0b0c1f;
  }
  .sillon-r__bottom {
    width: 6vw;
    height: 1vw;
    transform-origin: top left;
    transform: rotateY(180deg) translateX(-6vw);
    background-color: #0b0c1f;
  }
  .sillon-t {
    position: absolute;
    right: 0;
    top: 1vw;
    width: 1vw;
    height: 1vw;
    transform-origin: right;
    transform: rotateY(7deg);
  }
  .sillon-t__front {
    width: 1vw;
    height: 6.5vw;
    transform-origin: bottom left;
    transform: rotateX(-90deg) translateZ(7.5vw);
    background-image: linear-gradient(to bottom, #0b0c1f, #070814);
  }
  .sillon-t__back {
    width: 1vw;
    height: 6.5vw;
    transform-origin: top left;
    transform: rotateX(-90deg) rotateY(180deg) translateX(-1vw)
      translateY(-6.5vw);
    background-image: linear-gradient(to bottom, #0b0c1f, #0b0c1f);
  }
  .sillon-t__right {
    width: 14vw;
    height: 6.5vw;
    transform-origin: top left;
    transform: rotateY(90deg) rotateZ(-90deg) translateZ(1vw) translateX(-14vw)
      translateY(-6.5vw);
    background-image: linear-gradient(to bottom, #0b0c1f, black);
  }
  .sillon-t__left {
    width: 14vw;
    height: 6.5vw;
    transform-origin: top left;
    transform: rotateY(-90deg) rotateZ(90deg) translateY(-6.5vw);
    background-color: #121332;
  }
  .sillon-t__top {
    width: 1vw;
    height: 14vw;
    transform-origin: top left;
    transform: translateZ(6.5vw);
    background-image: linear-gradient(to right, #1f2158, #0f102b);
    border-bottom: 0.1vw solid rgba(158, 153, 193, 0.5);
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        to right,
        rgba(40, 125, 210, 0.5),
        transparent
      );
    }
  }
  .sillon-t__bottom {
    width: 1vw;
    height: 14vw;
    transform-origin: top left;
    transform: rotateY(180deg) translateX(-1vw);
    background-color: #0b0c1f;
  }
  .mesa-c {
    position: absolute;
    left: 7vw;
    top: 9.5vw;
    width: 10vw;
    height: 9vw;
    transform: translateZ(0.5vw);
  }
  .mesa-shadow {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 10%;
    background-color: rgba(11, 12, 31, 0.95);
    filter: blur(1vw);
    transform: translateZ(0);
  }
  .mesa {
    position: absolute;
    left: 0;
    top: 0;
    width: 10vw;
    height: 9vw;
    transform: translateZ(2vw);
  }
  .mesa__front {
    width: 10vw;
    height: 0.5vw;
    transform-origin: bottom left;
    transform: rotateX(-90deg) translateZ(8.5vw);
    background-image: linear-gradient(to right, #0b0c1f, black);
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        45deg,
        rgba(81, 137, 251, 0.125),
        rgba(180, 205, 253, 0.25),
        transparent 55%
      );
    }
  }
  .mesa__back {
    width: 10vw;
    height: 0.5vw;
    transform-origin: top left;
    transform: rotateX(-90deg) rotateY(180deg) translateX(-10vw)
      translateY(-0.5vw);
    background-color: #0b0c1f;
  }
  .mesa__right {
    width: 9vw;
    height: 0.5vw;
    transform-origin: top left;
    transform: rotateY(90deg) rotateZ(-90deg) translateZ(10vw) translateX(-9vw)
      translateY(-0.5vw);
    background-color: black;
  }
  .mesa__left {
    width: 9vw;
    height: 0.5vw;
    transform-origin: top left;
    transform: rotateY(-90deg) rotateZ(90deg) translateY(-0.5vw);
    background-color: #121332;
  }
  .mesa__top {
    width: 10vw;
    height: 9vw;
    transform-origin: top left;
    transform: translateZ(0.5vw);
    background-image: linear-gradient(45deg, #0e0f27, #04050d);
    overflow: hidden;
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      width: 50%;
      height: 50%;
      background-image: linear-gradient(
        45deg,
        rgba(81, 137, 251, 0.5),
        rgba(251, 250, 254, 0.125) 50%,
        transparent 55%
      );
      filter: blur(0.5vw);
    }
    &::after {
      content: '';
      position: absolute;
      left: 2vw;
      top: 2vw;
      width: 20%;
      height: 50%;
      border-radius: 50%;
      background-color: rgba(40, 125, 210, 0.079);
      transform: rotateZ(-40deg);
      filter: blur(0.75vw);
    }
  }
  .mesa__bottom {
    width: 10vw;
    height: 9vw;
    transform-origin: top left;
    transform: rotateY(180deg) translateX(-10vw);
    background-color: #0b0c1f;
  }
  .mesa-p {
    position: absolute;
    width: 0.25vw;
    height: 0.25vw;
    &:nth-of-type(1) {
      left: 0.5vw;
      top: 0.5vw;
    }
    &:nth-of-type(2) {
      right: 0.5vw;
      top: 0.5vw;
    }
    &:nth-of-type(3) {
      left: 0.5vw;
      bottom: 0.5vw;
    }
    &:nth-of-type(4) {
      right: 0.5vw;
      bottom: 0.5vw;
    }
  }
  .mesa-p__front {
    width: 0.25vw;
    height: 1.75vw;
    transform-origin: bottom left;
    transform: rotateX(-90deg) translateZ(-1.5vw);
    background-color: #0b0c1f;
  }
  .mesa-p__back {
    width: 0.25vw;
    height: 1.75vw;
    transform-origin: top left;
    transform: rotateX(-90deg) rotateY(180deg) translateX(-0.25vw)
      translateY(-1.75vw);
    background-color: #0b0c1f;
  }
  .mesa-p__right {
    width: 0.25vw;
    height: 1.75vw;
    transform-origin: top left;
    transform: rotateY(90deg) rotateZ(-90deg) translateZ(0.25vw)
      translateX(-0.25vw) translateY(-1.75vw);
    background-color: black;
  }
  .mesa-p__left {
    width: 0.25vw;
    height: 1.75vw;
    transform-origin: top left;
    transform: rotateY(-90deg) rotateZ(90deg) translateY(-1.75vw);
    background-color: #121332;
  }
  .mesa-p__top {
    width: 0.25vw;
    height: 0.25vw;
    transform-origin: top left;
    transform: translateZ(1.75vw);
    background-color: #1f2158;
  }
  .mesa-p__bottom {
    width: 0.25vw;
    height: 0.25vw;
    transform-origin: top left;
    transform: rotateY(180deg) translateX(-0.25vw);
    background-color: #0b0c1f;
    &::before {
      content: '';
      position: absolute;
      width: 600%;
      height: 200%;
      top: 0;
      right: 0;
      border-radius: 10%;
      transform: translateZ(-0.1vw);
      background-color: rgba(0, 0, 0, 0.75);
      filter: blur(0.35vw);
    }
  }
  .tablet {
    position: absolute;
    left: 13vw;
    top: 12vw;
    width: 2vw;
    height: 2.5vw;
    transform: translateZ(3.01vw) rotateZ(15deg);
  }
  .tablet__front {
    width: 2vw;
    height: 0.125vw;
    transform-origin: bottom left;
    transform: rotateX(-90deg) translateZ(2.375vw);
    background-color: #8079ae;
  }
  .tablet__back {
    width: 2vw;
    height: 0.125vw;
    transform-origin: top left;
    transform: rotateX(-90deg) rotateY(180deg) translateX(-2vw)
      translateY(-0.125vw);
    background-color: #383358;
  }
  .tablet__right {
    width: 2.5vw;
    height: 0.125vw;
    transform-origin: top left;
    transform: rotateY(90deg) rotateZ(-90deg) translateZ(2vw) translateX(-2.5vw)
      translateY(-0.125vw);
    background-color: #383358;
  }
  .tablet__left {
    width: 2.5vw;
    height: 0.125vw;
    transform-origin: top left;
    transform: rotateY(-90deg) rotateZ(90deg) translateY(-0.125vw);
    background-color: #9e99c1;
  }
  .tablet__top {
    width: 2vw;
    height: 2.5vw;
    transform-origin: top left;
    transform: translateZ(0.125vw);
    background-color: #83abfc;
    border: 0.2vw solid rgba(81, 137, 251, 0.25);
    animation: pantalla-tablet 0.25s infinite;
  }
  .tablet__bottom {
    width: 2vw;
    height: 2.5vw;
    transform-origin: top left;
    transform: rotateY(180deg) translateX(-2vw);
    background-color: black;
    box-shadow: 0.25vw 0.25vw 0.5vw rgba(24, 74, 124, 0.75),
      -0.25vw 0.25vw 0.5vw rgba(24, 74, 124, 0.75),
      -0.25vw -0.25vw 0.5vw rgba(24, 74, 124, 0.75),
      0.25vw -0.25vw 0.5vw rgba(24, 74, 124, 0.75);
  }

  @keyframes pantalla-tablet {
    from {
      background-color: #6a9afb;
    }
  }
  @keyframes pantalla-tv {
    from {
      background-color: #6a9afb;
      box-shadow: 0.125vw 0.125vw 0vw rgba(81, 137, 251, 0),
        -0.125vw 0.125vw 0vw rgba(81, 137, 251, 0),
        0.125vw -0.125vw 0vw rgba(81, 137, 251, 0),
        -0.125vw -0.125vw 0vw rgba(81, 137, 251, 0);
    }
  }
  @keyframes luz-tv {
    from {
      background-image: radial-gradient(
        rgba(36, 112, 188, 0.8),
        rgba(56, 121, 250, 0.8)
      );
    }
  }
`
