import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
// import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import MobileHeader from './mobileHeader'
import Footer from './footer'
import './layout.css'

const Layout = ({ children }) => (
  <div>
    <Helmet
      title="The Gray Web Blog"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <MobileHeader />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children}
    </div>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
