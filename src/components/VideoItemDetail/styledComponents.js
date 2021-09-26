import styled from 'styled-components'
import {MdClose, MdPlaylistAdd} from 'react-icons/md'
import {BiLike, BiDislike} from 'react-icons/bi'
import ReactPlayer from 'react-player'

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
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: ${props => (props.bannerDisplay ? '50vh' : '80vh')};
`

export const VideoPlayerCont = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ContentCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  padding: 20px;
  padding-left: 0px;
`

export const Player = styled(ReactPlayer)`
  width: 90% !important ;
  height: 600px !important;
  cursor: pointer;
`

export const Heading = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  color: ${props => (props.isDark ? 'white' : 'black')};
`

export const ActionsCont = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`

export const ViewsAndAt = styled.div`
  display: flex;
`
export const Views = styled.p`
  color: #94a3b8;
  font-size: 15px;
  font-weight: 600;
  margin-right: 30px;
`

export const PublishedAt = styled.p`
  color: #94a3b8;
  font-size: 15px;
  font-weight: 600;
`

export const ActionInnerCont = styled.div`
  display: flex;
`
export const LikeCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  color: #94a3b8;
  font-size: 15px;
  font-weight: 600;
`
export const DislikeCont = styled(LikeCont)``

export const SaveCont = styled(LikeCont)``

export const ActionText = styled.p``

export const LikeIcon = styled(BiLike)`
  margin-right: 7px;
  font-size: 20px;
`

export const DislikeIcon = styled(BiDislike)`
  margin-right: 7px;
  font-size: 20px;
`

export const SaveIcon = styled(MdPlaylistAdd)`
  margin-right: 7px;
  font-size: 20px;
`

export const HorLine = styled.hr`
  border-width: 1px;
  border-style: solid;
  border-color: ${props => (props.isDark ? '#94a3b8' : '#cccccc')};
  margin-bottom: 20px;
`

export const VideoItemLowerCont = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 10px;
`
export const ItemLeftCont = styled.div`
  padding: 1px;
  width: 5%;
`
export const ProfileImg = styled.img`
  width: 100%;
  margin-top: 10px;
`
export const ItemRightCont = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  padding-top: 3px;
`
export const Channel = styled.p`
  color: black;
  margin-bottom: 11px;
  font-size: 18px;
  font-weight: 700;
  color: ${props => (props.isDark ? 'white' : 'black')};
`

export const ViewsAndTime = styled.div`
  display: flex;
  width: 100%;
  color: #939391;
`
export const Subscribers = styled.p`
  color: #94a3b8;
  font-size: 13px;
  margin-bottom: 15px;
`

export const Description = styled.p`
  font-weight: 600;
  font-size: 15px;
  color: ${props => (props.isDark ? 'white' : '#475569')};
`
