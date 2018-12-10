import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import {
  PostContent,
  PostPageTitle,
  ShortInfo,
  PostDate,
  PostText,
  GoHomeLinkWrap
} from '../components/postComponents'
import SocialShare from '../components/socialShare'

export default ({ data }) => {
  const post = data.markdownRemark
  let postLink
  if (typeof window !== 'undefined') {
    postLink = window.location.href
  } else {
    postLink=''
  }
  return (
    <Layout>
      <PostContent>
        <PostDate>{post.frontmatter.date}</PostDate>
        <PostPageTitle>{post.frontmatter.title}</PostPageTitle>
        <ShortInfo>{post.frontmatter.details}</ShortInfo>
        <PostText dangerouslySetInnerHTML = {{ __html: post.html }}/>
        <SocialShare postTitle={post.frontmatter.title} postLink={postLink} />
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


