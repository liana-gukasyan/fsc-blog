import React from 'react'

import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import {PostContent, PostTitle, ShortInfo, PostDate, PostText, GoHomeLinkWrap} from '../components/postComponents'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <PostContent>
        <PostDate>{post.frontmatter.date}</PostDate>
        <PostTitle>{post.frontmatter.title}</PostTitle>
        <ShortInfo>{post.frontmatter.details}</ShortInfo>
        <PostText dangerouslySetInnerHTML = {{ __html: post.html }}/>
        <GoHomeLinkWrap>
          <Link to='./'>{'← Back to blog'}</Link>
        </GoHomeLinkWrap>
      </PostContent>
    </Layout>
  )
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        details
        date(formatString: "MMMM Do, YYYY")
      }
    }
  }
`
