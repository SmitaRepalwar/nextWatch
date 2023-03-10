import styled from 'styled-components'

export const BgCon = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${props => (props.isDarkTheme ? '#181818 ' : '#f9f9f9')};
  overflow: scroll;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
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
export const SearchCon = styled.div`
  height: 30px;
  width: 300px;
  background-color: transparent;
  display: flex;
  border: 1px solid #cbd5e1;
  margin-left: 50px;
`
export const SearchInput = styled.input`
  height: 100%;
  width: 90%;
  background-color: transparent;
  outline: none;
  border-width: 0px;
  border-right: 1px solid #cbd5e1;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
`
export const SearchButton = styled.button`
  outline: none;
  border-width: 0px;
  background-color: transparent;
  background-color: #e2e8f0;
  width: 10%;
  height: 100%;
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
