import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import VideoContext from '../../context/VideoContext'
import Header from '../Header'
import SideBar from '../SideBar'
import Banner from '../Banner'
import ThumbnailItem from '../ThumbnailItem'
import {
  BgCon,
  ContentCon,
  BottomCon,
  VideosCon,
  ThumbnailCon,
  OtherViewCon,
  FailureImage,
  RetryButton,
} from './styledComponents'

const apiStatus = {
  initial: 'INITIAL',
  inProgress: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {presentApiStatus: apiStatus.initial, videosList: []}

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

    const response = await fetch(
      'https://apis.ccbp.in/videos/trending',
      options,
    )
    const data = await response.json()

    if (response.ok === true) {
      this.setState({
        presentApiStatus: apiStatus.success,
        videosList: data.videos,
      })
    } else {
      this.setState({presentApiStatus: apiStatus.failure})
    }
  }

  onRetry = () => {
    this.getVideosData()
  }

  onSuccess = () => {
    const {videosList} = this.state
    if (videosList.length > 0) {
      return (
        <ThumbnailCon>
          {videosList.map(eachItem => (
            <ThumbnailItem videoDetails={eachItem} key={eachItem.key} />
          ))}
        </ThumbnailCon>
      )
    }

    return (
      <VideoContext>
        {value => {
          const {isDarkTheme} = value
          const imageUrl = isDarkTheme
          return (
            <OtherViewCon isDarkTheme={isDarkTheme}>
              <FailureImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                alt="no videos"
              />
              <h1>No Search Results Found</h1>
              <p>Try different keyword or remove search filter.</p>
              <RetryButton type="button" onClick={this.onRetry}>
                Retry
              </RetryButton>
            </OtherViewCon>
          )
        }}
      </VideoContext>
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
              We are having some trouble to complete your request.Please try
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
          const {searchInput} = this.state
          return (
            <BgCon data-testid="trending" isDarkTheme={isDarkTheme}>
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

export default Trending
