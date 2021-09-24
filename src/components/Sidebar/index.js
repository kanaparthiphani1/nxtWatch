import {Component} from 'react'
import NxtWatchContext from '../../context/nxtWatchContext'

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
  HomeIcon,
  TrendingIcon,
  GamingIcon,
  SavedIcon,
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
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {selectedLink} = this.state
          return (
            <SideBarOuterCont isDark={value.isDarkTheme}>
              <NavLinksList>
                <NavLinkItem
                  highlight={selectedLink === 'home'}
                  onClick={this.onHomeSelect}
                  isDark={value.isDarkTheme}
                >
                  <NavLink
                    isDark={value.isDarkTheme}
                    highlight={selectedLink === 'home'}
                    to="/"
                  >
                    <HomeIcon
                      isDark={value.isDarkTheme}
                      highlight={selectedLink === 'home'}
                    />
                    Home
                  </NavLink>
                </NavLinkItem>

                <NavLinkItem
                  highlight={selectedLink === 'trending'}
                  onClick={this.onTrendingSelect}
                  isDark={value.isDarkTheme}
                >
                  <NavLink
                    isDark={value.isDarkTheme}
                    highlight={selectedLink === 'trending'}
                    to="/"
                  >
                    <TrendingIcon
                      isDark={value.isDarkTheme}
                      highlight={selectedLink === 'trending'}
                    />
                    Trending
                  </NavLink>
                </NavLinkItem>
                <NavLinkItem
                  highlight={selectedLink === 'gaming'}
                  onClick={this.onGamingSelect}
                  isDark={value.isDarkTheme}
                >
                  <NavLink
                    isDark={value.isDarkTheme}
                    highlight={selectedLink === 'gaming'}
                    to="/"
                  >
                    <GamingIcon
                      isDark={value.isDarkTheme}
                      highlight={selectedLink === 'gaming'}
                    />
                    Gaming
                  </NavLink>
                </NavLinkItem>
                <NavLinkItem
                  highlight={selectedLink === 'saved'}
                  onClick={this.onSavedSelect}
                  isDark={value.isDarkTheme}
                >
                  <NavLink
                    isDark={value.isDarkTheme}
                    highlight={selectedLink === 'saved'}
                    to="/"
                  >
                    <SavedIcon
                      isDark={value.isDarkTheme}
                      highlight={selectedLink === 'saved'}
                    />
                    Saved Videos
                  </NavLink>
                </NavLinkItem>
              </NavLinksList>

              <SocialContainer>
                <Desc1 isDark={value.isDarkTheme}> CONTACT US</Desc1>
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
                <Desc2 isDark={value.isDarkTheme}>
                  Enjoy! Now to see your channels and recommendations!
                </Desc2>
              </SocialContainer>
            </SideBarOuterCont>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default SideBar
