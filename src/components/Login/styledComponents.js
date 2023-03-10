import styled from 'styled-components'

export const BgCon = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#ffffff')};
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  font-family: 'Roboto';
`

export const FormCon = styled.form`
  height: 380px;
  width: 350px;
  border-radius: 10px;
  background-color: ${props => (props.isDarkTheme ? '#000000' : '#ffffff')};
  box-shadow: 0px 4px 16px 0px #bfbfbf;
  padding: 20px;
  display: flex;
  flex-direction: column;
`
export const LoginImage = styled.img`
  height: 50px;
  width: 150px;
  align-self: center;
`

export const LoginInput = styled.input`
  height: 30px;
  width: 100%;
  border: 1px solid #bfbfbf;
  border-radius: 5px;
  background-color: transparent;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
`
export const LoginLabel = styled.label`
  font-size: 12px;
  margin-top: 30px;
`
export const CheckBoxCon = styled.div`
  margin-top: 10px;
  font-size: 14px;
  font-weight: 500px;
`
export const SubmitButton = styled.button`
  outline: none;
  border-width: 0px;
  height: 30px;
  width: 100%;
  color: #ffffff;
  background-color: #3b82f6;
  border-radius: 5px;
  margin-top: 30px;
`
export const ErrorMsgCon = styled.p`
  font-size: 12px;
  font-weight: bold;
  color: #ff0000;
  margin-top: 10px;
`
