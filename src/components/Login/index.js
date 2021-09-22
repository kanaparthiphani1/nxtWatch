import {Component} from 'react'
import {
  LoginOuterContainer,
  LoginContainer,
  ImageContainer,
  Image,
  FormContainer,
  Form,
  Label,
  Input,
  FormElement,
  CheckBoxCont,
  CheckBox,
  CheckBoxLabel,
  Button,
} from './styledComponents'

class Login extends Component {
  state = {
    showPassword: false,
  }

  getInputType = () => {
    const {showPassword} = this.state
    if (showPassword) {
      return 'text'
    }
    return 'password'
  }

  changeInputType = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  render() {
    const ele = (
      <LoginOuterContainer>
        <LoginContainer>
          <ImageContainer>
            <Image src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" />
          </ImageContainer>
          <FormContainer>
            <Form>
              <FormElement>
                <Label htmlFor="username">USERNAME</Label>
                <Input id="username" type="text" placeholder="Username" />
              </FormElement>
              <FormElement>
                <Label htmlFor="password">PASSWORD</Label>
                <Input
                  id="password"
                  type={this.getInputType()}
                  placeholder="Password"
                />
              </FormElement>
              <CheckBoxCont>
                <CheckBox
                  onChange={this.changeInputType}
                  id="showPassword"
                  type="checkbox"
                />
                <CheckBoxLabel htmlFor="showPassword">
                  Show Password
                </CheckBoxLabel>
              </CheckBoxCont>

              <Button type="button">Submit</Button>
            </Form>
          </FormContainer>
        </LoginContainer>
      </LoginOuterContainer>
    )

    return ele
  }
}

export default Login
