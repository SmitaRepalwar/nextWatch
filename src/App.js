import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import VideoContext from './context/VideoContext'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemDetail from './components/VideoItemDetail'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    isDarkTheme: false,
    showBanner: true,
    liked: false,
    unliked: false,
    saved: false,
    savedList: [],
  }

  themeChange = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  closeBanner = () => {
    this.setState({showBanner: false})
  }

  onSave = videoDetails => {
    const {savedList, saved} = this.state
    if (saved) {
      this.setState(prevState => ({
        savedList: prevState.savedList.filter(
          eachItem => eachItem.id !== videoDetails.id,
        ),
        saved: !prevState.saved,
      }))
    } else {
      this.setState(prevState => ({
        saved: !prevState.saved,
        savedList: [...prevState.savedList, videoDetails],
      }))
    }
  }

  onLike = () => {
    this.setState(prevState => ({liked: !prevState.liked, unliked: false}))
  }

  onUnlike = () => {
    this.setState(prevState => ({unliked: !prevState.unliked, liked: false}))
  }

  render() {
    const {
      isDarkTheme,
      showBanner,
      liked,
      unliked,
      saved,
      savedList,
    } = this.state

    return (
      <VideoContext.Provider
        value={{
          isDarkTheme,
          themeChange: this.themeChange,
          showBanner,
          closeBanner: this.closeBanner,
          liked,
          unliked,
          saved,
          savedList,
          onLike: this.onLike,
          onUnlike: this.onUnlike,
          onSave: this.onSave,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute path="/videos/:id" component={VideoItemDetail} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route component={NotFound} />
        </Switch>
      </VideoContext.Provider>
    )
  }
}

export default App
