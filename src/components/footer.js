import React, { Component } from 'react'
import styled from 'styled-components'

import facebook from '../images/facebook.svg'
import meetup from '../images/meetup-logo.svg'
import github from '../images/github.svg'

export default class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        <SocialSection>
          <SocialLink target='_blank' href='https://www.facebook.com/yourfirststepcoding'>
            <SocialImg src={facebook}/>
          </SocialLink>
          <SocialLink target='_blank' href='https://github.com/firststepcoding'>
            <SocialImg src={github}/>
          </SocialLink>
          <SocialLink target='_blank' href='https://www.meetup.com/Learn-to-code-for-complete-beginners-in-Boston/'>
            <SocialImg src={meetup}/>
          </SocialLink>
          <SocialLink target='_blank' href='https://www.meetup.com/Learn-to-code-for-complete-beginners-in-San-Francisco/'>
            <SocialImg src={meetup}/>
          </SocialLink>
        </SocialSection>
        <ContactsSection>
          535 MISSION ST, SAN FRANCISCO, CA, 94105, USA415 
          <EmailLink href='mailto:937-7634HELLO@FIRSTSTEPCODING.COM'>
            937-7634HELLO@FIRSTSTEPCODING.COM
          </EmailLink>
        </ContactsSection>
      </FooterWrapper>
    )
  }
}

const FooterWrapper = styled.div`
  width: 100%;
  background: #1a1a1a;
`

const ContactsSection = styled.div`
  padding: 64px 32px;
  font-family: proxima-nova;
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  color: rgba(255,255,255,.8);
  text-align: center;
  text-transform: uppercase;
`

const EmailLink = styled.a`
  margin-left: 10px;
  text-decoration: none;
  color: rgba(255,255,255,.8);
`

const SocialSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
  color: rgba(255,255,255,.7);
  text-align: center;
  padding: 32px;
`

const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background-color: rgba(255,255,255,.8);
  border-radius: 50%;
  text-decoration: none;
  transition: background 0.2s;

  &:hover {
    background-color: white;
  }

  &:not(:last-child) {
    margin-right: 10px;
  }
`

const SocialImg = styled.img`
  height: 24px;
  margin: 0;
`
