import React from 'react'
import styled from 'styled-components'

import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = ({data}) => {
  // console.log(data)
  return(
  <Layout>
    {data.allMarkdownRemark.edges.map(({node}) => (
      <PostContent key={node.id}>
        <PostDate>{node.frontmatter.date} {node.timeToRead}min read</PostDate>
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

export const  query = graphql`
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

const PostContent = styled.div`
  width: 100%;
  max-width: 700px;
  display: block;
  margin: 0 auto;

  &:not(:first-child) {
    margin-top: 128px;
  }
`

const PostTitle = styled.h3`
  margin: 12px 0 36px 0;
  color: rgba(26,26,26,.9);
  font-family: adobe-garamond-pro;
  font-weight: 400;
  font-style: normal;
  font-size: 32px;
  letter-spacing: 0px;
  text-transform: none;
  line-height: 1.2em;
`

const ShortInfo = styled.p`
  font-style: italic;
  word-wrap: break-word;
  margin-top: 0;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-family: adobe-garamond-pro;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0px;
  line-height: 1.6em;
  color: rgba(26,26,26,.7);
`

const PostDate = styled.span`
  color: rgba(26,26,26,.4);
  font-family: adobe-garamond-pro;
  font-weight: 400;
  font-style: normal;
  font-size: 18px;
  letter-spacing: 0px;
  line-height: 1.6em;
`

const PostText = styled.div`
  font-family: adobe-garamond-pro;
  font-weight: 400;
  font-style: normal;
  font-size: 18px;
  letter-spacing: 0px;
  line-height: 1.6em;
  color: rgba(26,26,26,.7);
`
