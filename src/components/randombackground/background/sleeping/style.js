import styled from 'styled-components'

// https://codepen.io/Alireza29675/pen/YVMBOg

export const SleepingContainer = styled.section`
  font: normal 1em/1.45em 'Helvetica Neue', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: #fff;
  background: radial-gradient(ellipse at bottom, #342b4a 0%, #050608 100%);
  background-attachment: fixed;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -1;

  .container {
    width: 0px;
    height: 0px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .bed {
      background: #332944;
      width: 365px;
      height: 580px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 10px;
      box-shadow: inset 0px 30px #262038, -50px 7px 0px 10px #262038;
      .bed-shadow {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        overflow: hidden;
        .window-light {
          background: #5a5b89;
          right: -40px;
          top: 109px;
          height: 139px;
          &:nth-child(2) {
            top: 261px;
          }
        }
      }
      .bed-head {
        width: 400px;
        height: 25px;
        background: #3c3557;
        border-radius: 5px;
        position: absolute;
        top: -20px;
        left: 50%;
        transform: translateX(-50%);
      }
      .ground-cloth {
        width: 340px;
        height: 210px;
        background: #565881;
        position: absolute;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 10px 10px 0 0;
        overflow: hidden;
        &:after {
          content: ' ';
          width: 100%;
          height: 15px;
          background: #4b4d73;
          position: absolute;
          bottom: 0;
          left: 0;
        }
        .window-light {
          &:first-child {
            right: -216px;
            top: 56px;
          }
        }
        .under-pillow-shadows {
          width: 100px;
          height: 65px;
          position: absolute;
          bottom: 0;
          left: 110px;
          overflow: hidden;
          .head-shadow {
            width: 92px;
            height: 90px;
            border-radius: 0 0 46px 46px;
            position: absolute;
            bottom: 31px;
            left: 2px;
            background: #4b4d76;
          }
          .neck-shadow {
            width: 22px;
            height: 35px;
            position: absolute;
            bottom: 7px;
            left: 36px;
            background: #4b4d76;
          }
        }
        .pillow {
          width: 230px;
          height: 110px;
          position: absolute;
          border-radius: 8px;
          top: 25px;
          left: 50%;
          transform: translateX(-50%);
          background: #453e5f;
          box-shadow: 0px 10px 0px 4px #4b4d76;
          overflow: hidden;
          .window-light {
            right: -25px;
            top: 83px;
          }
          .pillow-shadows {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 8px;
            box-shadow: inset 0px -5px 0px #453e5f;
            overflow: hidden;
            .ear-shadow {
              background: #352a4a;
              border-radius: 50%;
              width: 40px;
              height: 32px;
              position: absolute;
              bottom: -8px;
              left: 46px;
            }
            .head-shadow {
              background: #352a4a;
              border-radius: 50%;
              width: 71px;
              height: 90px;
              position: absolute;
              bottom: -6px;
              left: 54px;
              transform: rotate(10deg);
            }
          }
        }
        .boy {
          position: absolute;
          left: 50%;
          bottom: 0;
          transform: translateX(-50%);
          z-index: 99;
          .shoulder {
            width: 110px;
            height: 110px;
            background: #473e5b;
            border-radius: 40px;
            position: absolute;
            left: 50%;
            bottom: -62px;
            transform: scaleY(0.5) translateX(-50%) rotate(-45deg);
          }
          .neck {
            width: 22px;
            height: 35px;
            position: absolute;
            left: 50%;
            bottom: 15px;
            transform: translateX(-50%);
            background: #3e385a;
            border-radius: 50px / 20px;
            box-shadow: inset 0px -20px 0px #b34c39;
          }
          .ears {
            position: absolute;
            left: 50%;
            bottom: 107px;
            transform: translateX(-50%);
            &:after {
              content: ' ';
              position: absolute;
              left: -60px;
              width: 18px;
              height: 18px;
              background: #373461;
              border: 5px solid #b34c39;
              border-radius: 50%;
              left: 32px;
            }
            &:before {
              content: ' ';
              position: absolute;
              left: -60px;
              width: 18px;
              height: 18px;
              background: #373461;
              border: 5px solid #b34c39;
              border-radius: 50%;
            }
          }
          .head {
            width: 92px;
            height: 90px;
            border-radius: 0 0 46px 46px;
            position: absolute;
            left: 50%;
            bottom: 43px;
            transform: translateX(-50%);
            background: #e36559;
            box-shadow: inset 0px -7px 0px #b34c39;
            .nose {
              width: 13px;
              height: 22px;
              background: #b54b3e;
              border-radius: 10px;
              position: absolute;
              animation: yawnForNose 5s infinite ease-in-out;
              left: 50%;
              transform: translateX(-50%);
              &:after {
                content: ' ';
                width: 10px;
                height: 8px;
                background: #b54b3e;
                border-radius: 50%;
                position: absolute;
                left: -25px;
                top: 22px;
                left: 28px;
              }
              &:before {
                content: ' ';
                width: 10px;
                height: 8px;
                background: #b54b3e;
                border-radius: 50%;
                position: absolute;
                left: -25px;
                top: 22px;
              }
            }
            .eyebrows {
              position: absolute;
              bottom: 67px;
              left: 50%;
              transform: translateX(-50%);
              perspective: 50px;
              .eyebrow {
                width: 30px;
                height: 9px;
                border-radius: 30% 50% 30% 70%;
                background: #342b4a;
                position: absolute;
                left: -38px;
                top: -8px;
                transform: rotateY(-38deg) scaleX(1.3) rotate(-2deg);
                &:nth-child(2) {
                  left: 4px;
                  transform: rotateY(117deg) scaleX(0.8) rotate(180deg)
                    rotateY(180deg);
                }
              }
            }
            .eyes {
              position: absolute;
              left: 50%;
              transform: translateX(-50%);
              animation: yawnForEyes 5s infinite ease-in-out;
              &:after {
                content: ' ';
                width: 9px;
                height: 9px;
                border: 2.5px solid #342b4a;
                border-top-color: transparent;
                border-right-color: transparent;
                transform: rotate(-45deg);
                border-radius: 50%;
                position: absolute;
                left: -28px;
                top: 0;
                left: 13px;
              }
              &:before {
                content: ' ';
                width: 9px;
                height: 9px;
                border: 2.5px solid #342b4a;
                border-top-color: transparent;
                border-right-color: transparent;
                transform: rotate(-45deg);
                border-radius: 50%;
                position: absolute;
                left: -28px;
                top: 0;
              }
            }
            .mouth {
              height: 12px;
              animation: yawnForMouth 5s infinite ease-in-out;
              position: absolute;
              left: 50%;
              transform: translateX(-50%);
              background: #342b4a;
              &:after {
                content: ' ';
                position: absolute;
                top: 6px;
                width: 20px;
                height: 17px;
                border-radius: 50%;
                box-shadow: inset 0px -10px 0px -5px #b54b3e;
                left: 50%;
                transform: translateX(-50%);
              }
            }
          }
          .hair {
            position: absolute;
            bottom: 130px;
            left: 50%;
            transform: translateX(-50%);
            .part {
              position: absolute;
              border-radius: 50%;
              background: #342b4a;
              &:nth-child(1) {
                width: 85px;
                height: 40px;
                left: -41px;
                bottom: -4px;
              }
              &:nth-child(2) {
                left: 43px;
                bottom: 30px;
                transform: rotate(69deg) scale(0.85) scaleY(0.8);
              }
              &:nth-child(3) {
                left: -20px;
                bottom: 15px;
                transform: rotate(107deg) scale(0.75) scaleY(0.9);
              }
              &:nth-child(4) {
                left: -29px;
                bottom: 17px;
                transform: rotate(18deg) scale(0.9) scaleY(0.5);
              }
              &:nth-child(5) {
                left: -25px;
                bottom: 33px;
                transform: rotate(-26deg) scale(0.9) scaleY(0.8);
              }
              &:nth-child(6) {
                left: -47px;
                bottom: 21px;
                transform: rotate(-48deg) scale(0.9) scaleY(0.8);
              }
              &:nth-child(7) {
                left: -54px;
                bottom: -28px;
                width: 21px;
                height: 10px;
                border-radius: 30px;
                transform: rotate(85deg) skew(-24deg);
              }
              &:nth-child(8) {
                left: 32px;
                bottom: -26px;
                width: 23px;
                height: 10px;
                border-radius: 30px;
                transform: rotate(95deg) skew(24deg);
              }
            }
            .part.keen {
              &:after {
                content: ' ';
                width: 50px;
                height: 25px;
                border-radius: 25px 25px 0 0;
                background: #342b4a;
                position: absolute;
                top: 0;
                left: 0;
                transform: scaleY(0.7) skew(28deg);
                border-radius: 0 0 25px 25px;
                transform: scaleY(0.7) skew(-28deg);
                top: 17px;
              }
              &:before {
                content: ' ';
                width: 50px;
                height: 25px;
                border-radius: 25px 25px 0 0;
                background: #342b4a;
                position: absolute;
                top: 0;
                left: 0;
                transform: scaleY(0.7) skew(28deg);
              }
            }
          }
        }
      }
      .quilt {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 340px;
        height: 350px;
        background: #332944;
        .top {
          width: 354px;
          height: 75px;
          border-radius: 8px;
          background: #453e5f;
          position: absolute;
          top: 0;
          left: -7px;
          overflow: hidden;
          .window-light {
            &:nth-child(1) {
              right: 37px;
              bottom: 46px;
            }
            &:nth-child(2) {
              right: 37px;
              bottom: -113px;
            }
            &:nth-child(3) {
              right: -209px;
              bottom: 91px;
            }
            &:nth-child(4) {
              right: -209px;
              bottom: -68px;
            }
          }
        }
        .bottom {
          width: 100%;
          height: 252px;
          border-radius: 0 0 8px 8px;
          background: #453e5f;
          position: absolute;
          bottom: 8px;
          left: 0;
          overflow: hidden;
          box-shadow: 22.5px -58px 0px -52.5px #565891;
          .window-light {
            &:nth-child(1) {
              right: 30px;
              bottom: 162px;
            }
            &:nth-child(2) {
              right: -216px;
              bottom: 207px;
            }
          }
        }
      }
    }
    .shoes {
      width: 70px;
      height: 68px;
      position: absolute;
      top: 0;
      left: -260px;
      .shoe {
        position: absolute;
        width: 40px;
        height: 32px;
        background: #453e5f;
        border-radius: 20px 8px 8px 20px;
        box-shadow: -10px 5px 0px #261f3e;
        &:before {
          content: ' ';
          position: absolute;
          right: -31px;
          width: 27px;
          height: 27px;
          top: 3px;
          border-radius: 2px 20px 20px 2px;
          background: #342b4a;
        }
        &:nth-child(1) {
          top: 0;
        }
        &:nth-child(2) {
          bottom: 0;
        }
      }
    }
    .table {
      width: 140px;
      height: 143px;
      background: #3c3557;
      border-radius: 7px;
      position: absolute;
      box-shadow: -30px 12px #262038;
      &:before {
        content: ' ';
        width: 120px;
        height: 12px;
        background: #312b47;
        border-radius: 0 0 5px 5px;
        position: absolute;
        bottom: -12px;
        left: 10px;
        box-shadow: -30px 12px #262038;
      }
      &:after {
        content: ' ';
        width: 30px;
        height: 15px;
        border-radius: 0 0 15px 15px;
        position: absolute;
        background: #403659;
        left: 50%;
        transform: translateX(-50%);
        bottom: -27px;
        box-shadow: -30px 12px #262038;
      }
    }
    .table.left {
      left: -340px;
      top: -260px;
      .lamp {
        background: #565881;
        width: 130px;
        height: 130px;
        border-radius: 50%;
        position: absolute;
        top: -25px;
        left: -22px;
        .bulb {
          position: absolute;
          width: 23px;
          height: 23px;
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border: 16px solid #202038;
          &:after {
            content: ' ';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #202038;
            width: 3px;
            height: 25px;
            transform: translate(-50%, -50%) rotate(90deg);
          }
          &:before {
            content: ' ';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #202038;
            width: 3px;
            height: 25px;
          }
        }
      }
      .phone {
        position: absolute;
        width: 25px;
        height: 45px;
        bottom: 15px;
        right: 15px;
        border-radius: 3px;
        background: #091434;
        transform: rotate(35deg);
        box-shadow: -1px 2px #322b4c;
        &:before {
          content: ' ';
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 4px;
          bottom: 3px;
          border-radius: 50%;
          background: #3f508e;
        }
        &:after {
          content: ' ';
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 19px;
          height: 30px;
          top: 6px;
          animation: phoneLCD 20s infinite -3s ease-out;
        }
      }
    }
    .table.right {
      left: 198px;
      top: -260px;
      .table-shadow {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border-radius: 7px;
        overflow: hidden;
        .window-light {
          right: -68px;
          bottom: -100px;
          background: #5a5b89;
        }
      }
    }
    .on-ground-lights {
      .window-light {
        right: -390px;
        bottom: 35px;
        &:nth-child(2) {
          bottom: -125px;
        }
        .cat {
          background: #342b4a;
          width: 45px;
          height: 90px;
          position: absolute;
          right: 0;
          top: 50%;
          margin-top: 10px;
          transform: translateY(-50%);
          border-radius: 50px 0 0 30px;
          .head {
            background: #342b4a;
            position: absolute;
            width: 50px;
            height: 36px;
            bottom: 0;
            right: 16px;
            animation: catHeadShake 10s infinite ease-out;
            border-radius: 50% / 79px;
            &:after {
              content: ' ';
              background: #342b4a;
              width: 32px;
              height: 17px;
              transform: skewX(60deg);
              position: absolute;
              top: 0;
              left: 0;
              transform: skewX(-60deg);
              top: 19px;
            }
            &:before {
              content: ' ';
              background: #342b4a;
              width: 32px;
              height: 17px;
              transform: skewX(60deg);
              position: absolute;
              top: 0;
              left: 0;
            }
          }
        }
      }
    }
  }
  .window-light {
    position: absolute;
    width: 235px;
    height: 145px;
    right: 30px;
    bottom: -35px;
    border-radius: 5px;
    background: #ff766c;
    transform: skewY(-10deg);
  }

  @keyframes yawnForMouth {
    0%,
    50%,
    100% {
      bottom: 22px;
      width: 24px;
      border-radius: 5px 5px 12px 12px;
    }
    75% {
      bottom: 18px;
      width: 12px;
      border-radius: 12px;
    }
  }
  @keyframes yawnForNose {
    0%,
    50%,
    100% {
      bottom: 45px;
    }
    75% {
      bottom: 42px;
    }
  }
  @keyframes yawnForEyes {
    0%,
    50%,
    100% {
      bottom: 66px;
    }
    75% {
      bottom: 65px;
    }
  }

  @keyframes catHeadShake {
    0%,
    67%,
    100% {
      transform: rotate(0deg);
    }
    70%,
    97% {
      transform: rotate(-10deg);
    }
  }

  @keyframes phoneLCD {
    0%,
    70%,
    100% {
      background: black;
    }
    72%,
    93% {
      background: white;
    }
  }
`
