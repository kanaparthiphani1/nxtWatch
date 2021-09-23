import {Component} from 'react'
import {
  NavLink,
  NavLinksList,
  NavLinkItem,
  SocialContainer,
  ImageContainer,
  LogosImage,
  SideBarOuterCont,
  Desc1,
  Desc2,
} from './styledComponents'

class SideBar extends Component {
  state = {
    selectedLink: 'home',
  }

  onHomeSelect = () => {
    this.setState({selectedLink: 'home'})
  }

  onTrendingSelect = () => {
    this.setState({selectedLink: 'trending'})
  }

  onGamingSelect = () => {
    this.setState({selectedLink: 'gaming'})
  }

  onSavedSelect = () => {
    this.setState({selectedLink: 'saved'})
  }

  render() {
    const {selectedLink} = this.state
    const ele = (
      <SideBarOuterCont>
        <NavLinksList>
          <NavLinkItem
            highlight={selectedLink === 'home'}
            onClick={this.onHomeSelect}
          >
            <NavLink highlight={selectedLink === 'home'} to="/">
              Home
            </NavLink>
          </NavLinkItem>

          <NavLinkItem
            highlight={selectedLink === 'trending'}
            onClick={this.onTrendingSelect}
          >
            <NavLink highlight={selectedLink === 'trending'} to="/">
              Trending
            </NavLink>
          </NavLinkItem>
          <NavLinkItem
            highlight={selectedLink === 'gaming'}
            onClick={this.onGamingSelect}
          >
            <NavLink highlight={selectedLink === 'gaming'} to="/">
              Gaming
            </NavLink>
          </NavLinkItem>
          <NavLinkItem
            highlight={selectedLink === 'saved'}
            onClick={this.onSavedSelect}
          >
            <NavLink highlight={selectedLink === 'saved'} to="/">
              Saved Videos
            </NavLink>
          </NavLinkItem>
        </NavLinksList>

        <SocialContainer>
          <Desc1> CONTACT US</Desc1>
          <ImageContainer>
            <LogosImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
              alt="facebook logo"
            />
            <LogosImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
              alt="twitter logo"
            />
            <LogosImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
              alt="linked in logo"
            />
          </ImageContainer>
          <Desc2>Enjoy! Now to see your channels and recommendations!</Desc2>
        </SocialContainer>
      </SideBarOuterCont>
    )
    return ele
  }
}

export default SideBar
