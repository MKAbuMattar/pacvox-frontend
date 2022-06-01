import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
  font-size: 100%;
  box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
  }

  body {
    line-height: 1.3;
  }

  :root {

    --scrollbar-thumb: linear-gradient(
    to bottom,
    rgba(43, 88, 118, 0.8),
    rgba(78, 67, 118, 0.8)
  );
  }

  ::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: var(--scrollbar-thumb);
}
`
