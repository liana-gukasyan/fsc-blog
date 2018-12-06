import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Header from './header'
import MobileHeader from './mobileHeader'
import Footer from './footer'
import './layout.css'
import favicon from '../images/favicon.ico'

const Layout = ({ children }) => (
  <div style={{'display': 'flex', 'flexDirection': 'column', 'minHeight': '100vh'}}>
    <Helmet
      title='First Step Coding | Bootcamp Prep'
      meta={[
        { charset: 'UTF-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:site_name', content: 'First Step Coding' },
        { property: 'og:title', content: 'First Step Coding | Bootcamp Prep' },
        { property: 'og:url', content: 'https://blog.firststepcoding.com/' },
        { property: 'og:type', content: 'website' },
        { property: 'og:description', content: 'Part-time beginner-friendly coding courses in small groups with 8-10 students. Level up in your career, or begin a new adventure.' },
        { property: 'og:image', content: 'http://static1.squarespace.com/static/57c22a12d1758e5dd82ca7e6/t/581cb41f59cc6833a5e1ea95/1478276127771/icon-only.png?format=1500w' },
        { property: 'og:image:width', content: '362' },
        { property: 'og:image:height', content: '251' },
        { itemprop: 'name', content: 'First Step Coding | Bootcamp Prep' },
        { itemprop: 'url', content: 'https://blog.firststepcoding.com/' },
        { itemprop: 'description', content: 'Part-time beginner-friendly coding courses in small groups with 8-10 students. Level up in your career, or begin a new adventure.' },
        { itemprop: 'thumbnailUrl', content: 'http://static1.squarespace.com/static/57c22a12d1758e5dd82ca7e6/t/581cb41f59cc6833a5e1ea95/1478276127771/icon-only.png?format=1500w' },
        { itemprop: 'image', content: 'http://static1.squarespace.com/static/57c22a12d1758e5dd82ca7e6/t/581cb41f59cc6833a5e1ea95/1478276127771/icon-only.png?format=1500w' },
        { name: 'twitter:title', content: 'First Step Coding | Bootcamp Prep'},
        { name: 'twitter:image', content: 'http://static1.squarespace.com/static/57c22a12d1758e5dd82ca7e6/t/581cb41f59cc6833a5e1ea95/1478276127771/icon-only.png?format=1500w'},
        { name: 'twitter:url', content: 'https://blog.firststepcoding.com/'},
        { name: 'twitter:card', content: 'summary'},
        { name: 'twitter:description', content: 'Part-time beginner-friendly coding courses in small groups with 8-10 students. Level up in your career, or begin a new adventure.'},
        { name: 'description', content: 'Part-time beginner-friendly coding courses in small groups with 8-10 students. Level up in your career, or begin a new adventure.'},
      ]}
      link={[
        { rel: 'shortcut icon', type: 'image', href: `${favicon}` },
        { rel: 'stylesheet', href: 'https://use.typekit.net/kfz0hhy.css' },
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
