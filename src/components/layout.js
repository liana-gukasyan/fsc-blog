import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
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
    <ChildrenWrapper>
      {children}
    </ChildrenWrapper>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const ChildrenWrapper = styled.div`
  width: auto;
  max-width: 1020px;
  margin: auto;
  padding: 36px 32px 96px 32px;
`
