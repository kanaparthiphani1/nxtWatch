import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const TrendingVideoItemCont = styled(Link)`
  width: 100%;
  display: flex;
  margin-bottom: 50px;
  text-decoration: none;
  transition: 0.3s all ease-out;

  &:hover {
    background-color: ${props => (props.isDark ? '#212529' : '#f1f1f1')};
  }
`
export const Thumbnail = styled.img`
  width: 35%;
`

export const TrendingContentCont = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`
export const TrendingHeader = styled.h1`
  font-size: 27px;
  color: ${props => (props.isDark ? 'white' : '#717379')};
  margin-bottom: 20px;
`

export const TrendingChannel = styled.p`
  color: #aeb6c0;
  margin-bottom: 15px;
  font-weight: 700;
`

export const ViewAndAt = styled.div`
  display: flex;
  color: #aeb6c0;
  font-weight: 600;
  font-size: 13px;
`
export const Views = styled.p`
  margin-right: 20px;
`

export const PublishedAt = styled.p``
