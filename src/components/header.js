import React, { Component } from 'react'
import styled from 'styled-components'

import logo from '../images/fsc_logo.png'

export default class Header extends Component {
  constructor() {
    super()
    this.state = {
      dropdownOpened: false
    }
  }

  toggleDropdown = () => {
    const oldStatus = this.state.dropdownOpened
    this.setState({
      dropdownOpened: !oldStatus
    })
  }

  render() {
    return (
      <HeaderWrapper>
        <LogoLink href='https://www.firststepcoding.com/'>
          <LogoImage src={logo}/>
        </LogoLink>
        <RightGroupItems>
          <div>
            <MenuItem onClick={this.toggleDropdown}>Courses</MenuItem>
            {
              this.state.dropdownOpened &&
              <DropdownMenu>
                <MenuItem href='https://www.firststepcoding.com/intro-to-coding'>
                  Intro to Coding
                </MenuItem>
                <MenuItem href='https://www.firststepcoding.com/bootcamp-prep'>
                  Bootcamp Prep
                </MenuItem>
                <MenuItem href='https://www.firststepcoding.com/intro-to-sql'>
                  SQL for Analytics
                </MenuItem>
                <MenuItem href='https://www.firststepcoding.com/corporate-training'>
                  Corporate Training
                </MenuItem>
              </DropdownMenu>
            }
          </div>
          <MenuItem href='https://www.firststepcoding.com/instructors'>Instructors</MenuItem>
          <MenuItem href='https://www.firststepcoding.com/bootcamp-partners'>Bootcamp partners</MenuItem>
          <MenuItem href='https://www.firststepcoding.com/faq'>F.A.Q.</MenuItem>
          <MenuItem href='https://www.firststepcoding.com/social-impact'>Social Impact</MenuItem>
          <MenuItem>
            <ApplyButton href='https://www.firststepcoding.com/register'>
              Register
            </ApplyButton>
          </MenuItem>
        </RightGroupItems>
      </HeaderWrapper>
    )
  }
}

const LogoLink = styled.a`
  display: flex;
  align-items: center;
  vertical-align: middle;
  padding: 15px 13px;
`

const LogoImage = styled.img`
  width: 200px;
  margin: 0;
`

const RightGroupItems = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`

const HeaderWrapper = styled.div`
  width: 100%;
  border: 0 solid transparent;
  background: #1a1a1a;
  display: inline-flex;
  margin: 0;
  verticalAlign: middle;
  borderRadius: 0;
  align-items: center;

  @media only screen and (max-width: 700px) {
    display: none;
  }
`

const MenuItem = styled.a`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 15px 13px;
  text-transform: uppercase;
  font-family: Raleway;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 20px;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  text-align: center;

  &:hover {
    color: #3d9991;
  }
`

const DropdownMenu = styled.div`
  border-radius: 0 0 .28571429rem .28571429rem;
  margin: 0;
  flex-direction: column;
  position: absolute;
  min-width: max-content;
  padding: 0;
  font-size: 1em;
  text-align: left;
  box-shadow: 0 2px 3px 0 rgba(34,36,38,.15);
  border: 1px solid rgba(34,36,38,.15);
  z-index: 11;
  background: #1a1a1a;
`

const ApplyButton = styled.a`
  background-color: #3d9991;
  color: #fff;
  text-decoration: none;
  padding: 12px 16px;
  border-radius: 6px;
  font-size: 12px;
  text-align: center;
  font-family: Raleway;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;

  &:hover {
    background-color: #328b83;
  }
`
