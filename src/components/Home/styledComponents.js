import styled from 'styled-components'
import {MdClose, MdSearch} from 'react-icons/md'

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
  overflow-y: scroll;
  background-color: ${props => (props.isDark ? 'black' : '#faf9f7')};
  height: 91vh;

  &::-webkit-scrollbar {
    width: 0px;
  }
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
  cursor: pointer;
`
export const VideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`

export const SearchBarContainer = styled.form`
  display: flex;
  width: 45%;
  background-color: '#f4f4f2';
  border-width: 1px;
  border-style: solid;
  border-color: ${props => (props.isDark ? '#333d49' : '#d6d7d3')};
  outline-width: 0;
  border-radius: 4px;
`
export const SearchInput = styled.input`
  width: 87%;
  padding: 10px;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => (props.isDark ? '#333d49' : '#d6d7d3')};
  outline-width: 0;
  border-bottom: 0px;
  border-top: 0px;
  border-left: 0px;
  background-color: transparent;
  font-weight: 500;
  color: ${props => (props.isDark ? 'white' : 'black')};
`
export const SearchIconContainer = styled.div`
  width: 13%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: '#f4f4f2';
`

export const SearchIcon = styled(MdSearch)`
  font-size: 20px;
  color: #b9bab8;
`
export const VideosInnerContainer = styled.div`
  margin-top: 15px;
`

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: ${props => (props.bannerDisplay ? '50vh' : '80vh')};
`
