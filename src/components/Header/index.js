import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {FaSun} from 'react-icons/fa'
import {BsMoon} from 'react-icons/bs'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import LogoutComp from '../LogoutComp'
import NxtWatchContext from '../../context/nxtWatchContext'

import {
  HeaderContainer,
  Logo,
  RightItemsCont,
  Avatar,
  Logout,
  PopupCont,
} from './styledComponents'

class Header extends Component {
  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => (
          <HeaderContainer isDark={value.isDarkTheme}>
            {!value.isDarkTheme && (
              <Logo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="logo"
              />
            )}
            {value.isDarkTheme && (
              <Logo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                alt="logo"
              />
            )}
            <RightItemsCont>
              {!value.isDarkTheme && (
                <BsMoon size="20" onClick={value.toggleDark} />
              )}
              {value.isDarkTheme && (
                <FaSun fill="white" size="20" onClick={value.toggleDark} />
              )}
              <Avatar src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png " />
              <PopupCont
                modal
                trigger={
                  <Logout isDark={value.isDarkTheme} type="button">
                    Logout
                  </Logout>
                }
              >
                {close => <LogoutComp close={close} />}
              </PopupCont>
            </RightItemsCont>
          </HeaderContainer>
        )}
      </NxtWatchContext.Consumer>
    )
  }
}

export default withRouter(Header)
