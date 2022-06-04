import React, { Fragment } from 'react'

import MeatDecorator from '../../components/meatdecorator'

import { NotFoundContainer } from './style'

const NotFound = (props) => {
  const open = '{'
  const close = '}'

  return (
    <Fragment>
      <MeatDecorator
        title={props.meta.title}
        description={props.meta.description}
        keywords={props.meta.keywords}
        canonical={props.meta.canonical}
        imageSecureUrl={props.meta.imageSecureUrl}
        image={props.meta.image}
        imageAlt={props.meta.imageAlt}
        imageWidth={props.meta.imageWidth}
        imageHeight={props.meta.imageHeight}
        imageType={props.meta.imageType}
      />
      <NotFoundContainer>
        <div className="code-area">
          <span>
            <span style={{ color: '#777', fontStyle: 'italic' }}>
              // 404 page not found.
            </span>
            <span>
              <span style={{ color: '#d65562' }}>if</span>(
              <span style={{ color: '#4ca8ef' }}>!</span>
              <span style={{ color: '#bdbdbd', fontStyle: 'italic' }}>
                found
              </span>
              ) {open}
            </span>
            <span>
              <span style={{ color: '#2796ec', paddingLeft: '15px' }}>
                <i style={{ display: 'inline-block', width: '10px' }}></i>throw
              </span>
              <span>
                (<span style={{ color: '#a6a61f' }}>"(╯°□°)╯︵ ┻━┻"</span>);
              </span>
              <span style={{ display: 'block' }}>{close}</span>
              <span style={{ color: '#777', fontStyle: 'italic' }}>
                // <a href="/">Go home!</a>
              </span>
            </span>
          </span>
        </div>
      </NotFoundContainer>
    </Fragment>
  )
}

export default NotFound
