import styled from 'styled-components'

// https://codepen.io/shadeed/pen/xGBxPQ

export const CoffeeMachineContainer = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #34495c;
  background: radial-gradient(ellipse at bottom, #34495c 0%, #050608 100%);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -1;

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  .machine {
    position: relative;
    width: 191px;
    height: 311px;
    -webkit-box-reflect: below 0px -webkit-linear-gradient(bottom, rgba(
            255,
            255,
            255,
            0.4
          )
          0%, transparent 50%, transparent 100%);
    transform: scale(0.75);
  }
  .machine-top {
    position: absolute;
    left: 50%;
    top: 10px;
    transform: translateX(-50%);
    width: 119px;
    height: 164px;
    background: linear-gradient(
      #00bc9e,
      #00bc9e 20%,
      #008e77 20%,
      #008e77 22%,
      #00bc9e 22%,
      #00bc9e 62%,
      #008e77 62%,
      #008e77 64%,
      #00bc9e 64%
    );
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    &:before {
      content: '';
      position: absolute;
      left: 50%;
      top: -10px;
      transform: translateX(-50%);
      width: 45px;
      height: 10px;
      background: linear-gradient(
        to right,
        #008e77 15%,
        #40aa99 15%,
        #40aa99 45%,
        #008e77 45%,
        #008e77 85%,
        #00806b 85%,
        #00806b
      );
      border-top-right-radius: 2px;
      border-top-left-radius: 2px;
    }
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      border-top-right-radius: 20px;
      border-top-left-radius: 20px;
      background: linear-gradient(
        to right,
        transparent,
        transparent 8%,
        rgba(255, 255, 255, 0.2) 8%,
        rgba(255, 255, 255, 0.2) 22%,
        transparent 22%,
        transparent 88%,
        rgba(0, 142, 119, 0.5) 88%
      );
    }
  }
  .machine-middle {
    position: absolute;
    bottom: -8px;
    width: 100%;
    height: 8px;
    background: #202e3a;
    border-bottom-right-radius: 35px;
    border-bottom-left-radius: 35px;
    &:after {
      content: '';
      position: absolute;
      left: 10px;
      bottom: -18px;
      width: 142px;
      height: 18px;
      background: linear-gradient(
        to right,
        #202e3a,
        #202e3a 3%,
        #414d57 3%,
        #414d57 15%,
        #202e3a 15%,
        #202e3a
      );
      border-top-right-radius: 6px;
    }
    &:before {
      content: '';
      position: absolute;
      left: 52%;
      transform: translateX(-50%);
      bottom: -35px;
      width: 98px;
      height: 10px;
      background: linear-gradient(
        to right,
        #202e3a,
        #202e3a 3%,
        #414d57 3%,
        #414d57 15%,
        #202e3a 15%,
        #202e3a
      );
    }
  }
  .machine-bottom {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 20px;
    z-index: 10;
    width: 121px;
    height: 78px;
    border-radius: 15px;
    border: 5px solid #d5d5d5;
    border-top-color: transparent;
    &:before {
      content: '';
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: -1px;
      width: 110%;
      height: 10px;
      background: linear-gradient(
        to right,
        #202e3a,
        #202e3a 3%,
        #414d57 3%,
        #414d57 15%,
        #202e3a 15%,
        #202e3a
      );
    }
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 59px;
      background: linear-gradient(
        to right,
        transparent,
        transparent 10%,
        rgba(255, 255, 255, 0.3) 10%,
        rgba(255, 255, 255, 0.3) 25%,
        rgba(255, 255, 255, 0.1) 25%,
        rgba(255, 255, 255, 0.1) 85%,
        rgba(0, 0, 0, 0.1) 85%,
        rgba(0, 0, 0, 0.1)
      );
      border-bottom-left-radius: 15px;
      border-bottom-right-radius: 15px;
    }
  }
  .hand {
    position: absolute;
    right: 7px;
    bottom: 25px;
    z-index: -1;
    width: 38px;
    height: 69px;
    border-radius: 18px;
    border: 10px solid #202e3a;
    border-left-color: transparent;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    &:after {
      content: '';
      position: absolute;
      left: -95px;
      top: 22px;
      width: 17px;
      height: 1px;
      background: rgba(179, 179, 179, 0.7);
      color: #b3b3b3;
      box-shadow: 0 5px 0 0 currentColor, 0 10px 0 0 currentColor,
        0 15px 0 0 currentColor, 0 20px 0 0 currentColor;
    }
    &:before {
      content: '';
      position: absolute;
      left: -105px;
      bottom: -20px;
      width: 93px;
      height: 7px;
      background: linear-gradient(
        to right,
        #202e3a,
        #202e3a 3%,
        #414d57 3%,
        #414d57 15%,
        #202e3a 15%,
        #202e3a
      );
    }
  }
  .left-hand {
    position: absolute;
    top: 125px;
    z-index: -1;
    width: 45px;
    height: 184px;
    border-radius: 22px;
    border: 8px solid #d5d5d5;
    border-right-color: transparent;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    &:after {
      content: '';
      position: absolute;
      top: -14px;
      left: 21px;
      width: 7px;
      height: 23px;
      background: #008e77;
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }
    &:before {
      content: '';
      position: absolute;
      top: -11px;
      left: 13px;
      width: 8px;
      height: 15px;
      background: linear-gradient(#00bc9e, #00bc9e 60%, #40cdb6 60%, #40cdb6);
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }
  }
  .coffee {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 20px;
    z-index: 1;
    width: 121px;
    height: 20px;
    border-radius: 0 0 15px 15px;
    background: #393434;
    &:after {
      content: '';
      position: absolute;
      left: -11px;
      bottom: -22px;
      width: 144px;
      height: 16px;
      background: linear-gradient(
        to right,
        #00bc9e,
        #00bc9e 3%,
        #40cdb6 3%,
        #40cdb6 15%,
        #00bc9e 15%,
        #00bc9e
      );
      border-top-right-radius: 4px;
      border-top-left-radius: 4px;
      border-bottom: 2px solid #00a98e;
    }
    &:before {
      content: '';
      position: absolute;
      left: 54px;
      top: -41px;
      width: 5px;
      height: 4px;
      background: #393434;
      border-radius: 50%;
      box-shadow: 3px 10px 0 1px #393434;
      -webkit-animation: animatecoffee 2s linear infinite;
      animation: animatecoffee 2s linear infinite;
    }
  }

  @-webkit-keyframes animatecoffee {
    to {
      top: 0;
    }
  }

  @keyframes animatecoffee {
    to {
      top: 0;
    }
  }
`
