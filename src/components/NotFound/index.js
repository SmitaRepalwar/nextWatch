import VideoContext from '../../context/VideoContext'
import {FailureImage, OtherViewCon} from './styledComponents'

const NotFound = () => (
  <VideoContext>
    {value => {
      const {isDarkTheme} = value
      const imageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <OtherViewCon isDarkTheme={isDarkTheme}>
          <FailureImage src={imageUrl} alt="not found" />
          <h1>Page Not Found</h1>
          <p>We are sorry, the page you requested could not be found.</p>
        </OtherViewCon>
      )
    }}
  </VideoContext>
)

export default NotFound
