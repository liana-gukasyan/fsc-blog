import React from 'react'

import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import {PostContent, PostTitle, ShortInfo, PostDate, PostText, TimeToRead} from '../components/postComponents'

const IndexPage = ({data}) => {
  return(
  <Layout>
    {data.allMarkdownRemark.edges.map(({node}) => (
      <PostContent key={node.frontmatter.date}>
        <PostDate>{node.frontmatter.date}</PostDate>
        <PostTitle className='title'>
          <Link to={node.fields.slug} style={{textDecoration: 'none', color: 'inherit'}}>
            {node.frontmatter.title}
          </Link>
        </PostTitle>
        <ShortInfo>{node.frontmatter.details}</ShortInfo>
        <PostText>{node.excerpt}</PostText>
        <TimeToRead>{node.timeToRead}min read</TimeToRead>
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
          date(formatString: "MMMM Do, YYYY")
          details
        }
        excerpt(pruneLength: 450)
        timeToRead
      }
    }
  }
}
`
