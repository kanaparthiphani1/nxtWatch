import {Component} from 'react'
import {HiOutlineLightBulb} from 'react-icons/hi'
import {BsMoon} from 'react-icons/bs'
import {
  HeaderContainer,
  Logo,
  RightItemsCont,
  Avatar,
  Logout,
} from './styledComponents'

class Header extends Component {
  render() {
    const ele = (
      <HeaderContainer>
        <Logo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="logo"
        />
        <RightItemsCont>
          <BsMoon size="20" />
          <Avatar src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png " />
          <Logout type="button">Logout</Logout>
        </RightItemsCont>
      </HeaderContainer>
    )
    return ele
  }
}

export default Header
