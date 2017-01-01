import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {browserHistory} from 'react-router'
import * as firebase from 'firebase';
import './SignUpForm.css';

class SignUpForm extends Component {

  constructor() {
    super();

    this.state = {
      "email": "",
      "password": "",
      "confirmPassword": ""
    };
    
    this.inputStyle = {
      "width": "356px"
    };

    this.signUpButtonStyle = {
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

  onConfirmPasswordChange = (event) => {
    this.setState({
      "confirmPassword": event.target.value
    });
  }

  isFormFilled() {
    return this.state.email && this.state.password && this.state.confirmPassword;
  }

  onSignUpClicked = () => {
    if (this.isFormFilled() && this.state.password === this.state.confirmPassword) {
      firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((success) => {
        browserHistory.push("/login");
      }, (error) => {
        console.error('sign up error', error);
      });
    }
  }

  onTextKeyPress = (event) => {
    if (event.charCode === 13) {
      this.onSignUpClicked();
    }
  }

  render() {
    return (
      <div className='SignUpForm'>
        <TextField floatingLabelText="Email" type="email" style={this.inputStyle} onChange={this.onEmailChange} onKeyPress={this.onTextKeyPress} />
        <br/>
        <TextField floatingLabelText="Password" type="password" style={this.inputStyle} onChange={this.onPasswordChange} onKeyPress={this.onTextKeyPress} />
        <br/>
        <TextField floatingLabelText="Confirm Password" type="password" style={this.inputStyle} onChange={this.onConfirmPasswordChange} onKeyPress={this.onTextKeyPress} />
        <br/>
        <RaisedButton
          label="Sign Up"
          secondary={true}
          id="sign-up-button"
          style={this.signUpButtonStyle}
          onClick={this.onSignUpClicked}
          />
      </div>
    );
  }
}

export default SignUpForm;