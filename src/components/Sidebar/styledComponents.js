import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SideBarOuterCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 91vh;
  padding-top: 15px;
`

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  padding: 17px;
`
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const Desc1 = styled.h1`
  font-family: 'Roboto';
  font-size: 15px;
  margin: 10px;
  color: black;
`

export const Desc2 = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  margin: 10px;
  color: #475569;
`
export const LogosImage = styled.img`
  width: 30px;
  margin: 5px;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: 400;
  color: black;
`

export const NavLinksList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-inline-start: 0;
`

export const NavLinkItem = styled.li`
  list-style-type: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  background-color: ${props =>
    props.highlight === true ? '#f1f5f9' : 'transparent'};
`

export const NavLink = styled(Link)`
  font-weight: ${props => (props.highlight === true ? '700' : '500')};
  text-decoration: none;
  font-size: 15px;
  width: 100%;
  color: black;
  margin-left: 8px;
`
