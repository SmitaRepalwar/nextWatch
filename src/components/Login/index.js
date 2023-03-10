import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import VideoContext from '../../context/VideoContext'
import {
  BgCon,
  FormCon,
  LoginImage,
  LoginInput,
  LoginLabel,
  SubmitButton,
  CheckBoxCon,
  ErrorMsgCon,
} from './styledComponents'

class Login extends Component {
  state = {
    showPassword: false,
    username: '',
    password: '',
    showErrorMsg: false,
    errMsg: '',
  }

  onClickSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSuccess(data.jwt_token)
    } else {
      this.setState({showErrorMsg: true, errMsg: data.error_msg})
    }
  }

  onSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeType = event => {
    this.setState({showPassword: event.target.checked})
  }

  render() {
    const {showPassword, showErrorMsg, errMsg} = this.state
    const inputType = showPassword ? 'text' : 'password'
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <VideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const logoUrl = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <BgCon isDarkTheme={isDarkTheme}>
              <FormCon isDarkTheme={isDarkTheme}>
                <LoginImage src={logoUrl} alt="website logo" />
                <LoginLabel htmlFor="username">Username</LoginLabel>
                <LoginInput
                  onChange={this.onChangeUsername}
                  id="username"
                  type="text"
                />
                <LoginLabel htmlFor="password">Password</LoginLabel>
                <LoginInput
                  onChange={this.onChangePassword}
                  id="password"
                  type={inputType}
                />
                <CheckBoxCon>
                  <input
                    id="checkbox"
                    type="checkbox"
                    onChange={this.onChangeType}
                  />
                  <label htmlFor="checkbox">Show Password</label>
                </CheckBoxCon>
                <SubmitButton onClick={this.onClickSubmit}>Login</SubmitButton>
                {showErrorMsg && <ErrorMsgCon>{errMsg}</ErrorMsgCon>}
              </FormCon>
            </BgCon>
          )
        }}
      </VideoContext.Consumer>
    )
  }
}

export default Login
