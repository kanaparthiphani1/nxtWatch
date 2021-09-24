import styled from 'styled-components'
import {MdClose} from 'react-icons/md'

export const CloseButton = styled(MdClose)`
  margin-top: 15px;
  margin-right: 15px;
  cursor: pointer;
`

export const HomeContainer = styled.div`
  min-height: 100vh;
`
export const SideBarConatiner = styled.div`
  width: 20%;

  min-height: 91vh;
`

export const HomeInnerContainer = styled.div`
  display: flex;
`
export const HomeContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  background-color: ${props => (props.isDark ? 'black' : 'transparent')};
`
export const Banner = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  width: 100%;
  height: 260px;
  background-size: cover;
  display: flex;
  justify-content: space-between;
`
export const BannerContent = styled.div`
  height: 260px;
  padding: 30px;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const Logo = styled.img`
  width: 150px;
`
export const BannerHeading = styled.p``

export const GetItNowButton = styled.button`
  padding: 10px;
  border: 1px solid black;
  background-color: transparent;
  border-radius: 3px;
  align-self: flex-start;
`
