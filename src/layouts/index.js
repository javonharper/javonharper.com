// @format

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import 'normalize.css'
import 'tachyons'
import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title="Javon Harper - Web Developer and Design in Philadelphia"
      meta={[
        { name: 'description', content: 'Independent Developer and Designer' },
        {
          name: 'keywords',
          content: 'Web Developer, Web Designer, Philadelphia,',
        },
      ]}
    />
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
