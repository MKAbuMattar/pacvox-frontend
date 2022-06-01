import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import './assets/style/normalize.css'
import 'react-toastify/dist/ReactToastify.css'
import { GlobalStyle } from './assets/style/style.global'

ReactDOM.render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
  document.getElementById('root'),
)
