import styled from 'styled-components'

export const HeaderCon = styled.nav`
  height: 80px;
  width: 100vw;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#000000' : '#ffffff')};
`
export const HeaderListCon = styled.ul`
  height: 100%;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`
export const LogoImage = styled.img`
  height: 50px;
  width: 170px;
`
export const HeaderItems = styled.li`
  list-style-type: none;
`
export const ThemeButton = styled.button`
  outline: none;
  border-width: 0px;
  background-color: transparent;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  font-size: 20px;
`
export const ProfileImage = styled.img`
  height: 30px;
  width: 30px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const LogoutButton = styled.button`
  height: 30px;
  width: 100px;
  background-color: transparent;
  outline: none;
  border: 1px solid ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const SmallHeaderButton = styled.button`
  outline: none;
  border-width: 0px;
  background-color: transparent;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const PopupCard = styled.div`
  height: 200px;
  width: 500px;
  background-color: ${props => (props.isDarkTheme ? '#000000' : '#ffffff')};
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  border-radius: 20px;
  font-family: 'Roboto';
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ButtonCon = styled.div`
  display: flex;
`
export const PopupButton = styled.button`
  height: 30px;
  width: 80px;
  background-color: ${props => (props.cancel ? 'transparent' : '#3b82f6')};
  border: 1px solid #bfbfbf;
  border-width: ${props => (props.cancel ? '1px' : '0px')};
  color: ${props => (props.cancel ? '#bfbfbf' : '#ffffff')};
  margin: 20px;
  border-radius: 5px;
`
export const BgCon = styled.div`
  height: 100vh;
  width: 100%;
`
