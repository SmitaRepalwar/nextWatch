import styled from 'styled-components'

export const BgCon = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  overflow: scroll;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  font-family: 'Roboto';
  font-size: 10px;
`
export const BottomCon = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
`
export const ContentCon = styled.div`
  min-height: 90vh;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`
export const VideosCon = styled.div`
  height: 100%;
  width: 100%;
  padding: 20px;
`
export const ThumbnailCon = styled.ul`
  min-height: 300px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`
export const OtherViewCon = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
`
export const FailureImage = styled.img`
  height: 300px;
  width: 300px;
`
export const RetryButton = styled.button`
  height: 30px;
  width: 100px;
  border-radius: 10px;
  border-width: 0px;
  background-color: #4f46e5;
  color: #ffffff;
`
export const BgVideoCon = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 100px;
  margin-bottom: 500px;
`
export const WholeVideoCon = styled.div`
  height: 400px;
  width: 650px;
`
export const VideoCon = styled.div`
  height: 400px;
  width: 500px;
`
export const FlexCon = styled.ul`
  display: flex;
  align-items: center;
  width: ${props => (props.child ? '30%' : '100%')};
  justify-content: space-between;
  margin-right: 30px;
`
export const LogoImage = styled.img`
  height: 30px;
  width: 30px;
`
export const DescriptionCon = styled.div`
  width: 90%;
`
export const HorizotalLine = styled.hr`
  background-color: #bfbfbf;
  width: 100%;
`
export const ListCon = styled.li`
  list-style-type: none;
`
export const FlexLikeCon = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border-width: 0px;
  outline: none;
  color: ${props => (props.clicked ? '#2563eb' : '#64748b')};
  font-weight: bold;
`
