// @format

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import favicon from '../favicon.png'

import 'normalize.css'
import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title="Javon Harper, Web Developer and Designer"
      meta={[
        {
          name: 'description',
          content:
            "I'm Javon, an independent developer and designer In Philadelphia",
        },
        {
          name: 'keywords',
          content: 'developer, designer, philadelphia, freelance, web, mobile',
        },
      ]}
    >
      <link rel="icon" href={favicon} sizes="64x64" type="image/png" />
    </Helmet>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: '4rem',
      }}
    >
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
