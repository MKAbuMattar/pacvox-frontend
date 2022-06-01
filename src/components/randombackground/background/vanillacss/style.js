import styled from 'styled-components'

// https://codepen.io/syndicatefx/pen/NWaGOVd

export const VanillaCSSContainer = styled.section`
  --h: 226;
  --s: 100%;
  --size: clamp(14rem, -0.4rem + 64vw, 18rem);

  --tz: calc(var(--size) / 2);

  --shade-light: hsl(var(--h) var(--s) 96%);
  --shade-mid: hsl(var(--h) var(--s) 94%);
  --shade-dark: hsl(var(--h) var(--s) 92%);

  --text: #323232;

  height: 100%;
  display: grid;
  place-content: center;
  background-image: radial-gradient(
    circle,
    hsl(var(--h), var(--s), 88%),
    #171424
  );
  color: var(--text);
  user-select: none;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -1;

  svg {
    max-height: 100%;
    pointer-events: none;
  }

  .b {
    width: var(--size);
    height: var(--size);
    position: relative;
    transform-style: preserve-3d;
    transform: rotate3d(-0.1, 0.2, -0.035, 45deg);
  }
  .b--top,
  .b--right,
  .b--bottom,
  .b--left {
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: inherit;
  }
  .b--top {
    background-color: var(--shade-light);
    transform: rotateX(90deg) translateZ(var(--tz));
  }
  .b--right {
    background-color: var(--shade-dark);
    transform: translateZ(var(--tz));
  }
  .b--bottom {
    transform: rotateX(-90deg) translateZ(var(--tz));
    box-shadow: 6px -16px 25px 12px hsla(var(--h) var(--s) 36% / 25%);
    bottom: -20%;
  }
  .b--left {
    background-color: var(--shade-mid);
    transform: rotateY(-90deg) translateZ(var(--tz));
  }
  .b--right,
  .b--left {
    height: 120%;
  }
  .label--top {
    display: grid;
    place-content: center;
    height: 100%;
    box-shadow: inset 0 -2rem 0 var(--shade-mid),
      inset 0 -4rem 0 -1px hsl(var(--h), var(--s), 60%);
  }
  .label--right,
  .label--left {
    height: 100%;
    padding-inline: 1rem;
    padding-block: 2rem;
  }
  .label--right {
    opacity: 0.8;
  }
  .label--left {
    box-shadow: inset -2rem 0 0 var(--shade-mid),
      inset -4rem 0 0 -1px hsl(var(--h), var(--s), 60%);
  }
  h1 {
    font-size: 2rem;
    font-weight: 400;
    line-height: 1;
    span {
      display: block;
      font-size: 4rem;
      font-weight: 900;
    }
  }
  h2 {
    font-size: 1rem;
  }
  hr {
    border: none;
    height: 1px;
    background-color: var(--text);
    margin-block: 0.5rem;
  }
  ul {
    list-style: none;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.5;
  }
  p {
    font-size: 0.75rem;
    padding: 0.5rem;
    margin-block-end: 0.5rem;
    border: 1px solid var(--text);
    border-radius: 0.5rem;
  }
  .dose,
  .icons {
    font-size: 1.75rem;
    display: block;
    position: absolute;
    bottom: 1rem;
    right: 1rem;
  }
  .dose {
    background-color: var(--shade-mid);
  }
  .icons {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
`
