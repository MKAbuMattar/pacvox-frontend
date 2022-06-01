import React, { Fragment } from 'react'

import { VanillaCSSContainer } from './style'

const VanillaCSS = () => {
  return (
    <Fragment>
      <VanillaCSSContainer>
        <div className="b">
          <div className="b--top">
            <div className="label--top">
              <svg
                viewBox="0 0 256 361"
                preserveAspectRatio="xMidYMid"
                width="72"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M127.84 360.09 23.66 331.17.45 70.77h255.1l-23.24 260.36-104.47 28.96Z"
                  fill="#264DE4"
                ></path>
                <path
                  d="m212.42 314.55 19.86-222.5H128v245.9l84.42-23.4Z"
                  fill="#2965F1"
                ></path>
                <path
                  d="m53.67 188.64 2.86 31.93H128v-31.93H53.67ZM47.92 124l2.9 31.93H128V124H47.92ZM128 271.58l-.14.04-35.57-9.6-2.27-25.48H57.96l4.47 50.15 65.42 18.16.15-.04v-33.23Z"
                  fill="#EBEBEB"
                ></path>
                <path d="M60.48 0h38.68v16.18h-22.5v16.17h22.5v16.18H60.48V0Zm46.42 0h38.68v14.07h-22.5v2.8h22.5v32.36H106.9V34.46h22.5v-2.81h-22.5V0Zm46.42 0H192v14.07h-22.5v2.8H192v32.36h-38.68V34.46h22.5v-2.81h-22.5V0Z"></path>
                <path
                  d="m202.13 188.64 5.76-64.65h-80v31.94h45l-2.9 32.7h-42.1v31.94h39.33L163.5 262l-35.62 9.62v33.22l65.47-18.14.48-5.4 7.5-84.08.79-8.57Z"
                  fill="#FFF"
                ></path>
              </svg>
            </div>
          </div>
          <div className="b--left">
            <div className="label--left">
              <h1>
                Vanilla<sup>*</sup>
                <span>CSS</span>
              </h1>
              <hr />
              <ul>
                <li>
                  <sup>*</sup> No installs
                </li>
                <li>
                  <sup>*</sup> No dependencies
                </li>
                <li>
                  <sup>*</sup> No bullshit
                </li>
              </ul>
              <span className="dose">150ml</span>
            </div>
          </div>
          <div className="b--right">
            <div className="label--right">
              <h2>Precautions:</h2>
              <p>
                May cause nausea and/or confusion to{' '}
                <strong>some full-stack developers.</strong> Increase
                recommended dosage until symptoms disappear completely.
              </p>
              <p>
                <strong>Beware:</strong> Some high-end features may be
                incompatible with specific browsers.
              </p>
              <span className="icons">
                <svg
                  viewBox="0 0 262 336"
                  width="24"
                  aria-hidden="true"
                  focusable="false"
                >
                  <g
                    stroke="var(--text)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <g fill="none" strokeWidth="8">
                      <path d="M7.25 167H133z" strokeWidth="14"></path>
                      <path d="m129 168-15 158H39.9L11.2 168"></path>
                      <path d="M16.5 196H126l-2 26H21l4.7 26h95.5l-2.2 26H30.6l4.6 26H116m-20.6 26 5.6-159H70.9L76 326H59.9L40.2 167"></path>
                    </g>
                    <path
                      d="m59.3 64.5 159.7.4c14 15.6 37 68.1 38 81.1l-80 4c-2-27-14-51.1-16-54.9zM177 155l-27 175 62-115 28 116 16-174z"
                      strokeWidth="4"
                    ></path>
                    <circle cx="187" cy="31" r="30" stroke="none"></circle>
                    <path
                      d="M28.6 138C56 124 55.8 103 58 103c26 11 51 14 67 10-46.6 36-23 37-29.4 35-19.7-7-48.3 14-67-10m48.9-28c25.5 0 25.5-8 30.5-10.3 0 0 3 10.3 9 15.3"
                      fill="none"
                      strokeWidth="6"
                    ></path>
                  </g>
                </svg>
                <svg
                  viewBox="0 0 24 24"
                  width="32"
                  fill="var(--text)"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M19.562 12.098l1.531 2.652c.967 1.674.393 3.815-1.28 4.781-.533.307-1.136.469-1.75.469H16v2l-5-3.5 5-3.5v2h2.062c.088 0 .174-.023.25-.067.213-.123.301-.378.221-.601l-.038-.082-1.531-2.652 2.598-1.5zM7.737 9.384l.53 6.08-1.73-1-1.032 1.786c-.044.076-.067.162-.067.25 0 .245.177.45.41.492l.09.008H9v3H5.938c-1.933 0-3.5-1.567-3.5-3.5 0-.614.162-1.218.469-1.75l1.031-1.786-1.732-1 5.53-2.58zm6.013-6.415c.532.307.974.749 1.281 1.281l1.03 1.786 1.733-1-.53 6.08-5.532-2.58 1.732-1-1.031-1.786c-.044-.076-.107-.14-.183-.183-.213-.123-.478-.072-.631.11l-.052.073-1.53 2.652-2.599-1.5 1.53-2.652c.967-1.674 3.108-2.248 4.782-1.281z"></path>
                </svg>
              </span>
            </div>
          </div>
          <div className="b--bottom"></div>
        </div>
      </VanillaCSSContainer>
    </Fragment>
  )
}

export default VanillaCSS
