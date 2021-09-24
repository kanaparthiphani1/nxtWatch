import {Component} from 'react'
import NxtWatchContext from '../../context/nxtWatchContext'

import {
  HomeContainer,
  SideBarConatiner,
  HomeInnerContainer,
  HomeContentContainer,
  Banner,
  BannerContent,
  Logo,
  BannerHeading,
  GetItNowButton,
  CloseButton,
} from './styledComponents'
import Header from '../Header'
import SideBar from '../Sidebar'

class Home extends Component {
  state = {
    bannerDisplay: true,
  }

  closeBanner = () => {
    this.setState({bannerDisplay: false})
  }

  render() {
    const {bannerDisplay} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const ele = (
            <HomeContainer>
              <Header />
              <HomeInnerContainer>
                <SideBarConatiner>
                  <SideBar />
                </SideBarConatiner>
                <HomeContentContainer isDark={value.isDarkTheme}>
                  {bannerDisplay && (
                    <Banner>
                      <BannerContent>
                        <Logo
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="img"
                        />
                        <BannerHeading>
                          Buy Nxt Watch Premium prepaid plans with UPI
                        </BannerHeading>
                        <GetItNowButton>GET IT NOW</GetItNowButton>
                      </BannerContent>
                      <CloseButton onClick={this.closeBanner} />
                    </Banner>
                  )}
                </HomeContentContainer>
              </HomeInnerContainer>
            </HomeContainer>
          )
          return ele
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
