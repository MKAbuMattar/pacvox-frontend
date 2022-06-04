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

  * {
    box-sizing: border-box;
  }

  body {
    line-height: 1.3;
  }

  :root {
    --bg: #242526;
    --bg-accent: #484a4d;
    --text-color: #dadce1;
    --nav-size: 60px;
    --border: 1px solid #474a4d;
    --border-radius: 8px;
    --speed: 500ms;

    --scrollbar-thumb: linear-gradient(
    to bottom,
    rgba(43, 88, 118, 0.8),
    rgba(78, 67, 118, 0.8)
  );
  }

  :root {
    --text-dark: #1a2f45;
    --text-light: #445e78;
    --chat-box-dark: #1b243b;
    --chat-box-light: #fff;
    --button-text: #fff;
    --toggle-ball: #fff;
    --list-item-active: #e5effb;
    --number-bg: #6895a3;
    --message-box-1: #fff;
    --message-box-2: #1a233b;
    --chat-input: #060415;
    --border-light: #8187a2;
    --info-box-color-1: #004dfc;
    --info-box-color-2: #00ba9d;
    --info-box-color-3: #715fc2;
    --info-box-color-4: #ff562d;
    --info-icon-bg-1: #b1c7fc;
    --info-icon-bg-2: #c6f0ea;
    --info-icon-bg-3: #d9d3ff;
    --info-icon-bg-4: #ffe1d4;
    --app-bg: #060415;
    --box-color: #12172d;
    --box-border: #477eff;
    --button-bg: #477eff;
    --text-dark: rgba(255, 255, 255, 1);
    --text-light: rgba(255, 255, 255, 0.6);
    --info-box-1: rgba(160, 186, 242, 0.5);
    --info-box-2: rgba(168, 240, 229, 0.55);
    --info-box-3: rgba(194, 168, 240, 0.34);
    --info-box-4: rgba(240, 185, 168, 0.34);
    --toggle-bg: #477eff;
    --toggle-bg-off: #6895a3;
    --message-box-2: #477eff;
    --message-box-1: #576c99;
    --logo-path-1: #477eff;
    --logo-path-2: #576c99;
    --box-shadow: rgba(18, 23, 45, 0.6) 0px 8px 24px;
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
