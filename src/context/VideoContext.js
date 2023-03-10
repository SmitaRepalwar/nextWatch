import React from 'react'

const VideoContext = React.createContext({
  isDarkTheme: false,
  showBanner: true,
  savedList: [],
  liked: false,
  unliked: false,
  saved: false,
  themeChange: () => {},
  closeBanner: () => {},
})

export default VideoContext
