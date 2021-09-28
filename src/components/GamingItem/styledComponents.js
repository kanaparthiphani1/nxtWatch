import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const DetailsLink = styled(Link)`
  color: #1e293b;
  text-decoration: none;
  margin: 10px;
`

export const ListItem = styled.li`
  margin: 15px;
  width: 300px;
  display: flex;
  flex-direction: column;
`
export const ThumbnailImage = styled.img`
  margin: 10px;
  width: 280px;
`

export const ProfileImage = styled.img`
  margin: 10px;
  width: 60px;
  height: 60px;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: 600;
  padding-left: 10px;
  margin-bottom: 20px;
  color: ${props => (props.isDarkTheme ? 'white' : 'black')};
`

export const Desc = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  padding-left: 10px;
  font-weight: 600;
  color: ${props => (props.isDarkTheme ? '#7e858e' : '#909090')};
`
export const ContentSection = styled.div`
  display: flex;
  flex-direction: row;
`

export const ColumnAlign = styled.div`
  display: flex;
  flex-direction: column;
`
export const RowAlign = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
