import {withRouter, Link} from 'react-router-dom'
import {RiSunFill} from 'react-icons/ri'
import {FaMoon, FaBars} from 'react-icons/fa'
import {FiLogOut} from 'react-icons/fi'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import VideoContext from '../../context/VideoContext'

import {
  HeaderCon,
  HeaderListCon,
  LogoImage,
  HeaderItems,
  ThemeButton,
  ProfileImage,
  LogoutButton,
  SmallHeaderButton,
  PopupCard,
  ButtonCon,
  PopupButton,
  BgCon,
} from './styledComponent'

const Header = props => {
  const {history} = props

  const onLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <VideoContext.Consumer>
      {value => {
        const {isDarkTheme, themeChange} = value
        const logoUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        const onThemeToggle = () => {
          themeChange()
        }

        return (
          <HeaderCon isDarkTheme={isDarkTheme}>
            <Link className="link-el" to="/">
              {' '}
              <LogoImage src={logoUrl} alt="website logo" />
            </Link>
            <HeaderListCon>
              <HeaderItems key="theme">
                <ThemeButton
                  type="button"
                  data-testid="theme"
                  onClick={onThemeToggle}
                  isDarkTheme={isDarkTheme}
                >
                  {isDarkTheme ? <RiSunFill /> : <FaMoon />}
                </ThemeButton>
              </HeaderItems>
              <HeaderItems key="profile">
                <ProfileImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
                <SmallHeaderButton type="button" isDarkTheme={isDarkTheme}>
                  <FaBars />
                </SmallHeaderButton>
              </HeaderItems>
              <HeaderItems key="logout">
                <Popup
                  modal
                  trigger={
                    <div>
                      <LogoutButton type="button" isDarkTheme={isDarkTheme}>
                        Logout
                      </LogoutButton>
                      <SmallHeaderButton
                        type="button"
                        isDarkTheme={isDarkTheme}
                      >
                        <FiLogOut />
                      </SmallHeaderButton>
                    </div>
                  }
                >
                  {close => (
                    <PopupCard isDarkTheme={isDarkTheme}>
                      <p>Are you sure, you want to logout</p>
                      <ButtonCon>
                        <PopupButton
                          type="button"
                          onClick={() => close()}
                          cancel
                        >
                          Cancel
                        </PopupButton>
                        <PopupButton type="button" onClick={onLogout}>
                          Confirm
                        </PopupButton>
                      </ButtonCon>
                    </PopupCard>
                  )}
                </Popup>
              </HeaderItems>
            </HeaderListCon>
          </HeaderCon>
        )
      }}
    </VideoContext.Consumer>
  )
}
export default withRouter(Header)
