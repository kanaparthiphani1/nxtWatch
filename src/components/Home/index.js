import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
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
  SearchIcon,
  SearchInput,
  SearchBarContainer,
  SearchIconContainer,
  VideosContainer,
  VideosInnerContainer,
  LoaderContainer,
} from './styledComponents'
import Header from '../Header'
import SideBar from '../Sidebar'
import HomeVideoList from '../HomeVideosList'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    bannerDisplay: true,
    searchText: '',
    videosList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideosList()
  }

  onInputChange = event => {
    this.setState({searchText: event.target.value})
  }

  onSearchIconClicked = () => {
    this.getVideosList()
  }

  onSearchSubmit = event => {
    event.preventDefault()
    this.getVideosList()
  }

  getVideosList = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const {searchText} = this.state

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchText}`

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.videos.map(eachItem => ({
        id: eachItem.id,
        title: eachItem.title,
        thumbnailUrl: eachItem.thumbnail_url,
        viewCount: eachItem.view_count,
        publishedAt: eachItem.published_at,
        name: eachItem.channel.name,
        profileImageUrl: eachItem.channel.profile_image_url,
      }))
      this.setState({
        videosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  closeBanner = () => {
    this.setState({bannerDisplay: false})
  }

  renderJobsListView = () => {
    const {videosList} = this.state
    return <HomeVideoList homeVideosList={videosList} />
  }

  renderLoadingView = () => {
    const {bannerDisplay} = this.state
    return (
      <LoaderContainer bannerDisplay={bannerDisplay} data-testid="loader">
        <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
      </LoaderContainer>
    )
  }

  showVideosInnerCont = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderJobsListView()
      case apiStatusConstants.failure:
        return this.renderJobsListView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {bannerDisplay, searchText, videosList, apiStatus} = this.state
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
                  <VideosContainer>
                    <SearchBarContainer
                      isDark={value.isDarkTheme}
                      onSubmit={this.onSearchSubmit}
                    >
                      <SearchInput
                        onChange={this.onInputChange}
                        value={searchText}
                        placeholder="Search"
                        isDark={value.isDarkTheme}
                      />
                      <SearchIconContainer onClick={this.onSearchIconClicked}>
                        <SearchIcon type="submit" />
                      </SearchIconContainer>
                    </SearchBarContainer>
                    <VideosInnerContainer>
                      {this.showVideosInnerCont()}
                    </VideosInnerContainer>
                  </VideosContainer>
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
