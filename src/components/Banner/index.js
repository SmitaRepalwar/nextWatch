import {AiOutlineClose} from 'react-icons/ai'
import VideoContext from '../../context/VideoContext'
import {
  BannerCon,
  LogoImage,
  CloseBannerButton,
  BannerFlexCon,
  BannerButton,
} from './styledComponents'

const Banner = () => (
  <VideoContext.Consumer>
    {value => {
      const {closeBanner} = value
      const onCloseBanner = () => {
        closeBanner()
      }
      return (
        <BannerCon data-testid="banner">
          <BannerFlexCon>
            <LogoImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="nxt watch logo"
            />
            <CloseBannerButton
              data-testid="close"
              type="button"
              onClick={onCloseBanner}
            >
              <AiOutlineClose />
            </CloseBannerButton>
          </BannerFlexCon>
          <p>
            Buy Nxt Watch Premium Prepaid plans with
            <br />
            UPI
          </p>
          <BannerButton>GET IT NOW</BannerButton>
        </BannerCon>
      )
    }}
  </VideoContext.Consumer>
)

export default Banner
