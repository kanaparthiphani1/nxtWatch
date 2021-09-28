import styled from 'styled-components'
import Popup from 'reactjs-popup'

export const PopupCont = styled(Popup)`
  width: 200px !important;
  height: 240px;
`

export const HeaderContainer = styled.div`
  width: 100vw;
  height: 9vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: ${props => (props.isDark ? '#23231d' : 'transparent')};
`
export const Logo = styled.img`
  width: 100px;
`

export const RightItemsCont = styled.div`
  display: flex;
  align-items: center;
  width: 160px;
  justify-content: space-between;
`

export const Avatar = styled.img`
  width: 30px;
  cursor: pointer;
`

export const Logout = styled.button`
  background-color: transparent;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => (props.isDark ? 'white' : '#3b82f6')};
  color: ${props => (props.isDark ? 'white' : '#3b82f6')};
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
`
