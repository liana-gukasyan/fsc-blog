import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { TwitterShareButton, TwitterIcon, FacebookShareButton, FacebookIcon } from 'react-share'

const SocialShare = ({ postTitle, postLink }) => {
  return (
    <SocialShareContainer>
      <SocialShareBtn>
        <TwitterShareButton
              url={postLink}
              title={postTitle}
              style={{outline: 'none'}}
        >
          <TwitterIcon size={32} round={true}/>
        </TwitterShareButton>
      </SocialShareBtn>
      <SocialShareBtn>
        <FacebookShareButton
              url={postLink}
              title={postTitle}
              style={{outline: 'none'}}
        >
          <FacebookIcon size={32} round={true}/>
        </FacebookShareButton>
      </SocialShareBtn>
    </SocialShareContainer>
  )
}

SocialShare.propTypes = {
  postTitle: PropTypes.string.isRequired,
  postLink: PropTypes.string.isRequired,
}

export default SocialShare

const SocialShareContainer = styled.div`
  display: flex;
`

const SocialShareBtn = styled.span`
  display: block;
  cursor: pointer;

  &:not(:first-child) {
    margin-left: 10px;
  }
`
