import {Link} from 'react-router-dom'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import VideoContext from '../../context/VideoContext'

import {
  BgCon,
  ListCon,
  ListItem,
  ItemText,
  ContactUs,
  LogoImg,
} from './styledComponents'

const SideBar = () => (
  <VideoContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <BgCon isDarkTheme={isDarkTheme}>
          <ListCon>
            <Link key="home" className="link-el" to="/">
              <ListItem isDarkTheme={isDarkTheme}>
                <AiFillHome />
                <ItemText>Home</ItemText>
              </ListItem>
            </Link>
            <Link key="trending" className="link-el" to="/trending">
              <ListItem isDarkTheme={isDarkTheme}>
                <AiFillFire />
                <ItemText>Trending</ItemText>
              </ListItem>
            </Link>
            <Link key="gaming" className="link-el" to="/gaming">
              <ListItem isDarkTheme={isDarkTheme}>
                <SiYoutubegaming />
                <ItemText>Gaming</ItemText>
              </ListItem>
            </Link>
            <Link key="save videos" className="link-el" to="/saved-videos">
              <ListItem isDarkTheme={isDarkTheme}>
                <BiListPlus />
                <ItemText>Saved videos</ItemText>
              </ListItem>
            </Link>
          </ListCon>
          <ContactUs isDarkTheme={isDarkTheme}>
            <ItemText as="p">CONTACT US</ItemText>
            <ListItem as="div">
              <LogoImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <LogoImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <LogoImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </ListItem>
            <ItemText>
              Enjoy! Now to see your channels and recommendations!
            </ItemText>
          </ContactUs>
        </BgCon>
      )
    }}
  </VideoContext.Consumer>
)

export default SideBar
