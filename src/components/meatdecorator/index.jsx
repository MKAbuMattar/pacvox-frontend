import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet-async'

const SEO = (props) => {
  return (
    <Fragment>
      <Helmet prioritizeSeoTags>
        {props.title && <title>{props.title}</title>}
        {props.description && (
          <meta name="description" content={props.description} />
        )}
        {props.keywords && <meta name="keywords" content={props.keywords} />}
        {props.canonical && <link rel="canonical" href={props.canonical} />}
        {props.imageSecureUrl && (
          <meta name="image" content={props.imageSecureUrl} />
        )}
        {props.image && <meta name="image" content={props.image} />}
        {props.imageUrl && <meta name="image" content={props.imageUrl} />}
        {props.imageAlt && <meta name="image" content={props.imageAlt} />}
        {props.imageWidth && <meta name="image" content={props.imageWidth} />}
        {props.imageHeight && <meta name="image" content={props.imageHeight} />}
        {props.imageType && <meta name="image" content={props.imageType} />}
        {props.title && <link rel="icon" href="favicon.ico" />}
        {props.title && <meta name="theme-color" content="#000000" />}
        {props.title && (
          <meta name="apple-mobile-web-app-capable" content="yes" />
        )}
        {props.title && (
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        )}
        {props.title && (
          <meta name="apple-mobile-web-app-title" content={props.title} />
        )}
        {props.title && (
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
        )}

        {props.title && <meta property="og:site_name" content={props.title} />}
        {props.title && <meta property="og:title" content={props.title} />}
        {props.description && (
          <meta property="og:description" content={props.description} />
        )}
        {props.keywords && (
          <meta property="og:keywords" content={props.keywords} />
        )}
        {props.canonical && (
          <meta property="og:url" content={props.canonical} />
        )}
        {props.imageSecureUrl && (
          <meta property="og:image:secure_url" content={props.imageSecureUrl} />
        )}
        {props.image && <meta property="og:image" content={props.image} />}
        {props.imageUrl && (
          <meta property="og:image:url" content={props.imageUrl} />
        )}
        {props.imageAlt && (
          <meta property="og:image:alt" content={props.imageAlt} />
        )}
        {props.imageWidth && (
          <meta property="og:image:width" content={props.imageWidth} />
        )}
        {props.imageHeight && (
          <meta property="og:image:height" content={props.imageHeight} />
        )}
        {props.imageType && (
          <meta property="og:image:type" content={props.imageType} />
        )}

        {props.title && <meta name="twitter:title" content={props.title} />}
        {props.title && <meta name="twitter:site" content={props.title} />}
        {props.description && (
          <meta name="twitter:description" content={props.description} />
        )}
        {props.keywords && (
          <meta name="twitter:keywords" content={props.keywords} />
        )}
        {props.canonical && (
          <meta name="twitter:url" content={props.canonical} />
        )}
        {props.imageSecureUrl && (
          <meta
            name="twitter:image:secure_url"
            content={props.imageSecureUrl}
          />
        )}
        {props.image && <meta name="twitter:image" content={props.image} />}
        {props.imageUrl && (
          <meta name="twitter:image:url" content={props.imageUrl} />
        )}
        {props.imageAlt && (
          <meta name="twitter:image:alt" content={props.imageAlt} />
        )}
        {props.imageWidth && (
          <meta name="twitter:image:width" content={props.imageWidth} />
        )}
        {props.imageHeight && (
          <meta name="twitter:image:height" content={props.imageHeight} />
        )}
        {props.imageType && (
          <meta name="twitter:image:type" content={props.imageType} />
        )}

        {props.title && <meta itemprop="name" content={props.title} />}
        {props.title && <meta itemprop="siteName" content={props.title} />}
        {props.description && (
          <meta itemprop="description" content={props.description} />
        )}
        {props.keywords && (
          <meta itemprop="keywords" content={props.keywords} />
        )}
        {props.canonical && <meta itemprop="url" content={props.canonical} />}
        {props.imageSecureUrl && (
          <meta itemprop="image" content={props.imageSecureUrl} />
        )}
        {props.image && <meta itemprop="image" content={props.image} />}
        {props.imageUrl && <meta itemprop="image" content={props.imageUrl} />}
        {props.imageAlt && <meta itemprop="image" content={props.imageAlt} />}
        {props.imageWidth && (
          <meta itemprop="image" content={props.imageWidth} />
        )}
        {props.imageHeight && (
          <meta itemprop="image" content={props.imageHeight} />
        )}
        {props.imageType && <meta itemprop="image" content={props.imageType} />}

        {props.title && <meta name="application-name" content={props.title} />}
        {props.title && (
          <meta name="msapplication-TileColor" content="#000000" />
        )}
        {props.title && (
          <meta name="msapplication-navbutton-color" content="#000000" />
        )}
        {props.title && (
          <meta name="msapplication-TileImage" content="mstile-144x144.png" />
        )}
        {props.title && (
          <meta name="msapplication-config" content="browserconfig.xml" />
        )}

        {props.title && (
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        )}
        {props.title && (
          <meta name="apple-mobile-web-app-capable" content="yes" />
        )}
        {props.title && (
          <meta name="apple-mobile-web-app-title" content={props.title} />
        )}
        {props.title && <meta name="mobile-web-app-capable" content="yes" />}
        {props.title && <link rel="apple-touch-icon" href="favicon.ico" />}
      </Helmet>
    </Fragment>
  )
}

export default SEO
