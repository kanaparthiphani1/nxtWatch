import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import TrendingVideoItem from '../TrendingVideoItem'
import NxtWatchContext from '../../context/nxtWatchContext'

import {
  HomeContainer,
  SideBarConatiner,
  HomeInnerContainer,
  HomeContentContainer,
  LoaderContainer,
  TrendingHeaderCont,
  IconCont,
  SavedIcon,
  TrendingHead,
  TrendingVideosCont,
} from './styledComponents'

import Header from '../Header'
import SideBar from '../Sidebar'

class Saved extends Component {
  renderSavedView = value => {
    const {savedVideos} = value
    console.log('Saved Videos : ', savedVideos)

    return (
      <TrendingVideosCont>
        {savedVideos.map(eachItem => (
          <TrendingVideoItem item={eachItem} />
        ))}
      </TrendingVideosCont>
    )
  }

  render() {
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
                  <TrendingHeaderCont isDark={value.isDarkTheme}>
                    <IconCont isDark={value.isDarkTheme}>
                      <SavedIcon />
                    </IconCont>
                    <TrendingHead isDark={value.isDarkTheme}>
                      Saved
                    </TrendingHead>
                  </TrendingHeaderCont>

                  {this.renderSavedView(value)}
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

export default Saved
