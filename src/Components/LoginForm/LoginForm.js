import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import * as firebase from 'firebase';
import './LoginForm.css';

class LoginForm extends Component {

  constructor() {
    super();

    this.state = {
      "email": "",
      "password": ""
    };

    this.inputStyle = {
      "width": "356px"
    };

    this.loginButtonStyle = {
      "width": "100%",
      "margin": "8px auto"
    };
  }
  
  onEmailChange = (event) => {
    this.setState({
      "email": event.target.value
    });
  }

  onPasswordChange = (event) => {
    this.setState({
      "password": event.target.value
    });
  }

  isFormFilled() {
    return this.state.email && this.state.password;
  }

  onLoginClicked = () => {
    if (this.isFormFilled()) {
      firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((success) => {
        this.props.onLoginSuccess();
      }, (error) => {
        this.props.onLoginFailed();
        console.error('login error', error);
      });
    }
  }

  onTextKeyPress = (event) => {
    if (event.charCode === 13) {
      this.onLoginClicked();
    }
  }

  render() {
    return (
      <div className="LoginForm">
        <TextField floatingLabelText="Email" style={this.inputStyle} onChange={this.onEmailChange} onKeyPress={this.onTextKeyPress} />
        <br/>
        <TextField floatingLabelText="Password" type="password" style={this.inputStyle} onChange={this.onPasswordChange} onKeyPress={this.onTextKeyPress} />
        <br/>
        <RaisedButton
          label="Login"
          secondary={true}
          id="login-button"
          style={this.loginButtonStyle}
          onClick={this.onLoginClicked}
          />
      </div>
    );
  }
}

export default LoginForm;