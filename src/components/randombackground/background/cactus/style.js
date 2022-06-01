import styled from 'styled-components'

// https://codepen.io/eva_trostlos/pen/MeyrGP

export const CactusContainer = styled.section`
  font: normal 1em/1.45em 'Helvetica Neue', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: #fff;
  background: radial-gradient(ellipse at bottom, #cee7d4 0%, #050608 100%);
  background-attachment: fixed;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -1;

  .cube {
    width: 20px;
    height: 20px;
    transform-origin: 0 0;
  }
  .cactus {
    position: relative;
    top: calc(100vh - 300px);
    left: 350px;
    width: 400px;
    height: 400px;
  }
  .middle {
    position: absolute;
    top: 0;
    left: 20px;
  }
  .fork {
    position: absolute;
    top: 25px;
    left: 37px;
    .front {
      height: 25px;
    }
  }
  .fork-left {
    position: absolute;
    top: 80px;
    left: 3px;
    .front {
      height: 25px;
    }
  }
  .right {
    position: absolute;
    top: 0px;
    left: 54px;
    .front {
      height: 40px;
    }
    .side {
      width: 40px;
      transform: rotate(90deg) skewX(-30deg) scaleY(0.864) translate(-60px, 0);
    }
  }
  .left {
    position: absolute;
    left: -14px;
    top: 70px;
    .front {
      height: 45px;
    }
    .side {
      width: 45px;
      transform: rotate(90deg) skewX(-30deg) scaleY(0.864) translate(-65px, 0);
    }
  }
  .top {
    background-color: #b9dd70;
    transform: rotate(210deg) skew(-30deg) scaleY(0.864);
  }
  .front {
    height: 160px;
    background: #83d281;
    transform: rotate(-30deg) skewX(-30deg) translate(0, -17px) scaleY(0.864);
  }
  .side {
    width: 160px;
    background: #6aaf96;
    transform: rotate(90deg) skewX(-30deg) scaleY(0.864) translate(-180px, 0);
  }
  .shadow {
    position: absolute;
    left: -70px;
    top: 96px;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 0.2) 100%
    );
    width: 20px;
    height: 200px;
    transform: rotate(210deg) skew(-30deg) scaleY(0.864);
  }
`
