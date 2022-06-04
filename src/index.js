import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { HelmetProvider } from 'react-helmet-async'

import App from './App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'

import './assets/style/normalize.css'
import 'react-toastify/dist/ReactToastify.css'
import 'react-tabs/style/react-tabs.css'
import { GlobalStyle } from './assets/style/style.global'

ReactDOM.render(
  <StrictMode>
    <HelmetProvider>
      <GlobalStyle />
      <App />
    </HelmetProvider>
  </StrictMode>,
  document.getElementById('root'),
)

serviceWorkerRegistration.register()
