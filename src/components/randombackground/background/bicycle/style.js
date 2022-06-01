import styled from 'styled-components'

// https://codepen.io/AlbertFeynman/pen/pZxPOV

export const BicycleContainer = styled.section`
  font: normal 1em/1.45em 'Helvetica Neue', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: #fff;
  background: radial-gradient(ellipse at bottom, #252525 0%, #050608 100%);
  background-attachment: fixed;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -1;

  .bicycle-container {
    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    max-width: 350px;
    height: 300px;
    overflow: hidden;
    .wheel {
      position: absolute;
      margin: auto;
      top: 0;
      bottom: 0;
      width: 120px;
      height: 120px;
      box-shadow: 0 10px 15px -12px rgba(0, 0, 0, 0.3);
      .tire {
        position: absolute;
        margin: auto;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: inherit;
        height: inherit;
        border-radius: 50%;
        border: 10px solid #151515;
        z-index: 2;
      }
      .rim {
        position: absolute;
        margin: auto;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 114px;
        height: 114px;
        border-radius: 50%;
        border: 10px solid crimson;
        z-index: 1;
      }
      .spokes {
        position: absolute;
        margin: auto;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 78px;
        height: 78px;
        border-radius: 50%;
        border-left: 3px solid transparent;
        border-right: 3px solid transparent;
        border-top: 3px solid crimson;
        z-index: 1;
        animation: rt 2s infinite linear;
        background: rgba(200, 100, 100, 0.1);
        &:nth-of-type(3) {
          border-left: 3px solid transparent;
          border-right: 3px solid transparent;
          border-bottom: 3px solid crimson;
        }
      }
      .hub {
        position: absolute;
        margin: auto;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: crimson;
      }
    }
    .back-wheel {
      left: 0;
    }
    .front-wheel {
      right: 0;
    }
    .gear {
      position: absolute;
      margin: auto;
      top: 0;
      bottom: 0;
      left: calc(120px + 39.6px);
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: #151515;
      z-index: 4;
      animation: rt 3s infinite linear;
      .gear-red {
        position: absolute;
        margin: auto;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border: 3px solid crimson;
      }
      .pedal-tube {
        position: absolute;
        margin: auto;
        top: -30px;
        right: 0;
        bottom: 0;
        left: 0;
        transform: rotate(-90deg);
        width: 20px;
      }
      .pedal {
        position: absolute;
        margin: auto;
        top: -50px;
        right: 0;
        bottom: 0;
        left: 0;
        width: 20px;
        height: 5px;
        background: crimson;
        border-radius: 5px;
        z-index: 3;
      }
    }
    .tube {
      position: absolute;
      margin: auto;
      top: 0;
      bottom: 0;
      height: 5px;
      border-radius: 5px;
      background: #151515;
      z-index: 3;
    }
    .chain-tube {
      left: calc(120px / 2);
      width: 120px;
    }
    .seat-tube-back {
      left: calc(120px / 2);
      transform-origin: left;
      transform: rotate(-60deg);
      width: 120px;
    }
    .seat-tube-front {
      left: calc(120px / 2);
      transform-origin: right;
      transform: rotate(60deg);
      width: 120px;
    }
    .seat-tube-post {
      left: calc((120px / 2) - 20px);
      transform-origin: right;
      transform: rotate(60deg);
      background: crimson;
      z-index: 1;
      height: calc(5px - 1px);
      width: 140px;
    }
    .top-tube {
      left: 120px;
      bottom: initial;
      top: 44px;
      width: 113px;
    }
    .top-handlebar-tube {
      right: 112px;
      bottom: initial;
      top: 25px;
      width: 20px;
      background: crimson;
    }
    .top-handlebar-tube2 {
      right: 90px;
      bottom: initial;
      top: 25px;
      width: 25px;
      background: #151515;
      border-radius: 0%;
    }
    .down-tube {
      left: calc(120px + 60px);
      width: 100px;
      transform-origin: left;
      transform: rotate(-50deg);
    }
    .head-tube {
      right: calc(120px / 2);
      transform-origin: right;
      transform: rotate(60deg);
      width: 120px;
    }
    .head-tube-post {
      right: calc(120px / 2);
      transform-origin: right;
      transform: rotate(60deg);
      width: 140px;
      background: crimson;
      z-index: 1;
      height: calc(5px - 1px);
    }
    .saddle {
      position: absolute;
      margin: auto;
      top: 20px;
      left: 85px;
      width: 50px;
      height: 10px;
      border-top-left-radius: 50%;
      border-top-right-radius: 100%;
      border-bottom-left-radius: 50%;
      background: #151515;
      z-index: 2;
    }
    .handlebars {
      position: absolute;
      margin: auto;
      top: 25px;
      right: calc(100px / 2 + 25px);
      width: 30px;
      height: 30px;
      border-top-right-radius: 50%;
      border-bottom-right-radius: 50%;
      border-top: 5px solid #151515;
      border-right: 5px solid #151515;
      border-bottom: 5px solid crimson;
      z-index: 2;
    }
  }
  .ground-container {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 600px;
    height: 200px;
    overflow: hidden;
    .ground {
      position: absolute;
      margin: auto;
      animation: mv infinite linear;
      background: crimson;
      z-index: -1;
    }
    .ground1 {
      bottom: 0;
      right: -150px;
      width: 100px;
      height: 4px;
      border-radius: 10px;
      animation-duration: 3s;
      z-index: 5;
      &:before {
        content: '';
        position: absolute;
        margin: auto;
        top: -60px;
        left: 150px;
        width: 40px;
        height: 30px;
        border-top-right-radius: 60%;
        border-top-left-radius: 30%;
        border-bottom-left-radius: 20%;
        background: #151515;
      }
    }
    .ground2 {
      bottom: 70px;
      right: -250px;
      width: 100px;
      height: 2px;
      border-radius: 10px;
      animation-duration: 4s;
      &:before {
        content: '';
        position: absolute;
        margin: auto;
        top: -30px;
        left: 200px;
        width: 20px;
        height: 10px;
        border-top-right-radius: 60%;
        border-top-left-radius: 30%;
        border-bottom-left-radius: 20%;
        background: #151515;
      }
    }
    .ground3 {
      top: 50px;
      right: -300px;
      width: 100px;
      height: 2px;
      border-radius: 10px;
      animation-duration: 5s;
      &:before {
        content: '';
        position: absolute;
        margin: auto;
        top: 10px;
        left: -100px;
        width: 10px;
        height: 5px;
        border-top-right-radius: 60%;
        border-top-left-radius: 30%;
        border-bottom-left-radius: 20%;
        background: #151515;
      }
    }
  }
  @keyframes rt {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes mv {
    100% {
      right: 900px;
    }
  }
`
