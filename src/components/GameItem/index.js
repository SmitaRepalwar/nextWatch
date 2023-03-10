import {Link} from 'react-router-dom'
import VideoContext from '../../context/VideoContext'
import {ListItem, ThumbnailImg} from './styledComponents'

const GameItem = props => {
  const {videoDetails} = props
  const {id, title} = videoDetails
  const thumbnailUrl = videoDetails.thumbnail_url
  const viewCount = videoDetails.view_count
  return (
    <VideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <Link to={`/videos/${id}`} className="link-el">
            <ListItem isDarkTheme={isDarkTheme}>
              <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
              <h4>{title}</h4>
              <p>{viewCount} Watching Worldwide </p>
            </ListItem>
          </Link>
        )
      }}
    </VideoContext.Consumer>
  )
}

export default GameItem
