import React, { Component } from 'react'
import styled from 'styled-components'

import logo from '../images/fsc_logo.png'

export default class MobileHeader extends Component {
  constructor() {
    super()
    this.state = {
      menuOpened: false
    }
  }

  toggleMenu = () => {
    const oldStatus = this.state.menuOpened
    this.setState({
      menuOpened: !oldStatus
    })
  }

  render() {
    const {menuOpened} = this.state
    return (
      <HeaderWrapper opened={menuOpened}>
        <LogoLink href='https://www.firststepcoding.com/'>
          <LogoImage src={logo}/>
        </LogoLink>
        <MenuWrapper opened={menuOpened}>
          <MobileNavToggle onClick={this.toggleMenu} opened={menuOpened}>
            <TopBar opened={menuOpened}/>
            <MiddleBar opened={menuOpened}/>
            <BottomBar opened={menuOpened}/>
          </MobileNavToggle>
          {
            menuOpened &&
            <div>
              <MenuItem href='https://www.firststepcoding.com/courses'>Courses</MenuItem>
              <MenuItem href='https://www.firststepcoding.com/instructors'>Instructors</MenuItem>
              <MenuItem href='https://www.firststepcoding.com/bootcamp-partners'>Bootcamp partners</MenuItem>
              <MenuItem href='https://www.firststepcoding.com/faq'>F.A.Q.</MenuItem>
              <MenuItem href='https://www.firststepcoding.com/social-impact'>Social Impact</MenuItem>
              <ApplyButtonWrapper>
                <ApplyButton href='https://www.firststepcoding.com/register'>
                  Register
                </ApplyButton>
              </ApplyButtonWrapper>
            </div>
          }
        </MenuWrapper>
      </HeaderWrapper>
    )
  }
}

const MenuWrapper = styled.div`
  position: ${props => props.opened ? 'static' : 'relative'};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const MobileNavToggle = styled.div`
  display: block;
  box-sizing: border-box;
  position: absolute;
  z-index: 1002;
  top: ${props => props.opened ? '28px' : '50%'};
  color: white;
  right: ${props => props.opened ? '16px' : '20px'};
  margin-top: -8px;
  padding: 0;
  vertical-align: middle;
  line-height: 16px;
  text-align: right;
  cursor: pointer;
  user-select: none;
  color: rgba(255,255,255,.9);
  width: 22px;
  height: 22px;
`

const Bar = styled.div`
  width: 22px;
  height: 2px;
  position: absolute;
  right: 0;
  background-color: #fff;
  transition: transform .15s 0s ease-in-out,top .15s .15s ease-in-out;
  transform-origin: 50% 50%;
`

const TopBar = styled(Bar)`
  top: ${props => props.opened ? '7px' : '0)'};
  transform: ${props => props.opened ? 'rotate(45deg)' : 'rotate(0deg)'};
`

const MiddleBar = styled(Bar)`
  transition: opacity 0s .15s linear;
  top: 7px;
  opacity: ${props => props.opened ? '0' : '1'};
`

const BottomBar = styled(Bar)`
  transform: ${props => props.opened ? 'rotate(-45deg)' : 'rotate(0deg)'};
  top: ${props => props.opened ? '7px' : '14px'};
`

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

const HeaderWrapper = styled.div`
  width: 100%;
  border: 0 solid transparent;
  background: #1a1a1a;
  display: inline-flex;
  justify-content: space-between;
  margin: 0;
  verticalAlign: middle;
  borderRadius: 0;
  align-items: center;
  flex-direction: ${props => props.opened ? 'column' : 'row'};

  @media only screen and (min-width: 701px) {
    display: none;
  }
`

const MenuItem = styled.a`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 15px 13px;
  text-transform: uppercase;
  font-family: proxima-nova;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 20px;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  justify-content: center;

  &:hover {
    color: #3d9991;
  }
`

const ApplyButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 15px 13px;
  justify-content: center;
`

const ApplyButton = styled.a`
  background-color: #3d9991;
  color: #fff;
  text-decoration: none;
  padding: 12px 16px;
  border-radius: 6px;
  font-size: 12px;
  text-align: center;
  font-family: proxima-nova;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color: #328b83;
  }
`
