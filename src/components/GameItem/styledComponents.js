import styled from 'styled-components'

export const ListItem = styled.li`
  list-style-type: none;
  height: 240px;
  width: 200px;
  margin: 10px;
  font-size: 8px;
  font-family: 'Roboto';
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
`
export const ThumbnailImg = styled.img`
  height: 200px;
  width: 120px;
  border-radius: 20px;
`
export const FlexCon = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`
export const VideoDescriptionCon = styled.div`
  width: 70%;
  margin-left: 10px;
`
export const LogoImage = styled.img`
  height: 50px;
  width: 40px;
`
