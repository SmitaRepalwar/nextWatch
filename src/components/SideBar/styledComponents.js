import styled from 'styled-components'

export const BgCon = styled.nav`
  width: 220px;
  min-height: 90vh;
  padding: 10px;
  background-color: ${props => (props.isDarkTheme ? '#000000' : '#ffffff')};
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const ListCon = styled.ul`
  width: 100%;
`
export const ListItem = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
`
export const ThemeButton = styled.button`
  outline: none;
  border-width: 0px;
  background-color: transparent;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  font-size: 20px;
`
export const ItemText = styled.p`
  font-weight: 500;
  font-size: 15px;
  margin-left: 15px;
`
export const ContactUs = styled.div`
  height: 20%;
  width: 100%;
  margin-left: 15px;
`
export const LogoImg = styled.img`
  height: 20px;
  width: 20px;
  margin-left: 20px;
`
