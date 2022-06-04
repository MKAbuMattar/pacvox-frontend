import styled from 'styled-components'

export const NotFoundContainer = styled.section`
  /* Styles of the 404 page of my website. */

  background: #34495c;
  color: #d3d7de;
  font-family: 'Courier new';
  font-size: 18px;
  line-height: 1.5em;
  background: radial-gradient(ellipse at bottom, #34495c 0%, #050608 100%);
  user-select: none;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -1;

  a {
    color: #fff;
  }
  .code-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;

    & > span {
      display: block;

      & > span {
        display: block;
      }
    }
  }

  @media screen and (max-width: 320px) {
    .code-area {
      font-size: 5vw;
      min-width: auto;
      width: 95%;
      margin: auto;
      padding: 5px;
      padding-left: 10px;
      line-height: 6.5vw;
    }
  }
`
