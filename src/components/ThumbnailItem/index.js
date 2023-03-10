import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {GoPrimitiveSquare} from 'react-icons/go'
import VideoContext from '../../context/VideoContext'
import {
  ListItem,
  ThumbnailImg,
  FlexCon,
  VideoDescriptionCon,
  LogoImage,
} from './styledComponents'

const ThumbnailItem = props => {
  const {videoDetails} = props
  console.log(videoDetails)
  const {channel, id, title} = videoDetails
  const {name} = channel
  const profileImageUrl = channel.profile_image_url
  const publishedAt = videoDetails.published_at
  const thumbnailUrl = videoDetails.thumbnail_url
  const viewCount = videoDetails.view_count
  const newDate = new Date(publishedAt)
  const date = formatDistanceToNow(newDate)
  console.log(date)
  return (
    <VideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <Link to={`/videos/${id}`} className="link-el">
            <ListItem isDarkTheme={isDarkTheme}>
              <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
              <FlexCon>
                <LogoImage src={profileImageUrl} alt="channel logo" />
                <VideoDescriptionCon>
                  <h4>{title}</h4>
                  <p>{name}</p>
                  <FlexCon>
                    <p>{viewCount} views </p>
                    <GoPrimitiveSquare />
                    <p> {date} ago</p>
                  </FlexCon>
                </VideoDescriptionCon>
              </FlexCon>
            </ListItem>
          </Link>
        )
      }}
    </VideoContext.Consumer>
  )
}

export default ThumbnailItem
