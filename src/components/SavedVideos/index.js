import VideoContext from '../../context/VideoContext'
import ThumbnailItem from '../GameItem'
import Header from '../Header'
import SideBar from '../SideBar'
import Banner from '../Banner'
import {
  BgCon,
  ContentCon,
  BottomCon,
  VideosCon,
  ThumbnailCon,
  OtherViewCon,
  FailureImage,
} from './styledComponents'

const SavedVideos = () => (
  <VideoContext.Consumer>
    {value => {
      const {isDarkTheme, showBanner, savedList} = value
      const isEmpty = savedList.length === 0

      return (
        <BgCon data-testid="savedVideos" isDarkTheme={isDarkTheme}>
          <Header />
          <BottomCon>
            <SideBar />
            <ContentCon>
              {showBanner && <Banner />}
              {isEmpty === 0 ? (
                <OtherViewCon>
                  <FailureImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                  />
                  <h1>No Saved Videos Found</h1>
                  <p>You can save your videos while watching them.</p>
                </OtherViewCon>
              ) : (
                <ThumbnailCon>
                  {savedList.map(eachItem => (
                    <ThumbnailItem videoDetails={eachItem} key={eachItem.id} />
                  ))}
                </ThumbnailCon>
              )}
            </ContentCon>
          </BottomCon>
        </BgCon>
      )
    }}
  </VideoContext.Consumer>
)

export default SavedVideos
