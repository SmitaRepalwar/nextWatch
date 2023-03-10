import {Component} from 'react'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'
import Loader from 'react-loader-spinner'
import VideoContext from '../../context/VideoContext'
import Header from '../Header'
import SideBar from '../SideBar'
import Banner from '../Banner'
import GameItem from '../GameItem'
import {
  BgCon,
  ContentCon,
  BottomCon,
  VideosCon,
  ThumbnailCon,
  OtherViewCon,
  FailureImage,
  RetryButton,
  BgVideoCon,
  VideoCon,
  FlexCon,
  LogoImage,
  DescriptionCon,
  HorizotalLine,
  WholeVideoCon,
  FlexLikeCon,
  ListCon,
} from './styledComponents'

const apiStatus = {
  initial: 'INITIAL',
  inProgress: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetail extends Component {
  state = {presentApiStatus: apiStatus.initial, videoDetails: {}}

  componentDidMount() {
    this.getVideosData()
  }

  getVideosData = async () => {
    this.setState({presentApiStatus: apiStatus.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/videos/${id}`, options)
    const data = await response.json()
    console.log(data)

    if (response.ok === true) {
      this.setState({
        presentApiStatus: apiStatus.success,
        videoDetails: data.video_details,
      })
    } else {
      this.setState({presentApiStatus: apiStatus.failure})
    }
  }

  onRetry = () => {
    this.getVideosData()
  }

  onSuccess = () => {
    const {videoDetails} = this.state
    const {channel, id, title, description} = videoDetails
    const {name} = channel
    const profileImageUrl = channel.profile_image_url
    const publishedAt = videoDetails.published_at
    const thumbnailUrl = videoDetails.thumbnail_url
    const viewCount = videoDetails.view_count
    const videoUrl = videoDetails.video_url
    const subscriberCount = channel.subscriber_count
    const newDate = new Date(publishedAt)
    const date = formatDistanceToNow(newDate)

    return (
      <VideoContext.Consumer>
        {value => {
          const {
            isDarkTheme,
            liked,
            unliked,
            saved,
            savedList,
            onLike,
            onUnlike,
            onSave,
          } = value

          const onSaveClick = () => {
            onSave(videoDetails)
          }

          return (
            <BgVideoCon>
              <WholeVideoCon>
                <VideoCon>
                  <ReactPlayer url={videoUrl} />
                </VideoCon>
                <p>{title}</p>
                <FlexCon>
                  <p>
                    {viewCount} views * {date} years ago
                  </p>
                  <FlexCon child>
                    <ListCon>
                      <FlexLikeCon
                        onClick={onLike}
                        type="button"
                        clicked={liked}
                      >
                        <AiOutlineLike />
                        <p>Like</p>
                      </FlexLikeCon>
                    </ListCon>
                    <ListCon>
                      <FlexLikeCon
                        onClick={onUnlike}
                        type="button"
                        clicked={unliked}
                      >
                        <AiOutlineDislike />
                        <p>Dislike</p>
                      </FlexLikeCon>
                    </ListCon>
                    <ListCon>
                      <FlexLikeCon
                        onClick={onSaveClick}
                        type="button"
                        clicked={saved}
                      >
                        <BiListPlus />
                        <p>save</p>
                      </FlexLikeCon>
                    </ListCon>
                  </FlexCon>
                </FlexCon>
                <HorizotalLine />
                <FlexCon>
                  <LogoImage src={profileImageUrl} alt="channel logo" />
                  <DescriptionCon>
                    <p>{name}</p>
                    <p>{subscriberCount}</p>
                    <p>{description}</p>
                  </DescriptionCon>
                </FlexCon>
              </WholeVideoCon>
            </BgVideoCon>
          )
        }}
      </VideoContext.Consumer>
    )
  }

  onFailure = () => (
    <VideoContext>
      {value => {
        const {isDarkTheme} = value
        const imageUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <OtherViewCon isDarkTheme={isDarkTheme}>
            <FailureImage src={imageUrl} alt="failure view" />
            <h1>Oops! Something Went Wrong</h1>
            <p>
              We are having some trouble to complete your request. Please try
              again.
            </p>
            <RetryButton type="button" onClick={this.onRetry}>
              Retry
            </RetryButton>
          </OtherViewCon>
        )
      }}
    </VideoContext>
  )

  onLoading = () => (
    <OtherViewCon>
      <div className="loader-container" data-testid="loader">
        <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
      </div>
    </OtherViewCon>
  )

  renderingComponent = () => {
    const {presentApiStatus} = this.state
    switch (presentApiStatus) {
      case apiStatus.success:
        return this.onSuccess()
      case apiStatus.failure:
        return this.onFailure()
      case apiStatus.inProgress:
        return this.onLoading()
      default:
        return null
    }
  }

  render() {
    return (
      <VideoContext.Consumer>
        {value => {
          const {isDarkTheme, showBanner} = value
          return (
            <BgCon data-testid="videoItemDetails" isDarkTheme={isDarkTheme}>
              <Header />
              <BottomCon>
                <SideBar />
                <ContentCon>
                  {showBanner && <Banner />}
                  <VideosCon>{this.renderingComponent()}</VideosCon>
                </ContentCon>
              </BottomCon>
            </BgCon>
          )
        }}
      </VideoContext.Consumer>
    )
  }
}

export default VideoItemDetail
