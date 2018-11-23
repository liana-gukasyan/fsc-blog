import React from 'react'

import { Link } from 'gatsby'

import Layout from '../components/layout'
import {PostContent, PostTitle, ShortInfo, PostDate, PostText} from '../components/postComponents'
import {formatDate} from '../utils'

const IndexPage = ({data}) => {
  return(
  <Layout>
    {data.allMarkdownRemark.edges.map(({node}) => (
      <PostContent key={node.id}>
        <PostDate>{formatDate(node.frontmatter.date)}</PostDate>
        <PostTitle className='title'>
          <Link to={node.fields.slug} style={{textDecoration: 'none', color: 'inherit'}}>
            {node.frontmatter.title}
          </Link>
        </PostTitle>
        <ShortInfo>{node.frontmatter.details}</ShortInfo>
        <PostText>{node.excerpt}</PostText>
      </PostContent>
    ))}
  </Layout>
  )
}
export default IndexPage

export const query = graphql`
query HomePageQuery{
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
    totalCount
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          title
          date
          details
        }
        excerpt
        timeToRead
      }
    }
  }
}
`
