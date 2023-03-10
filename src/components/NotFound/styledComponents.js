import styled from 'styled-components'

export const OtherViewCon = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  background-color: ${props => (props.isDarkTheme ? '#000000' : '#ffffff')};
`
export const FailureImage = styled.img`
  height: 300px;
  width: 300px;
`
