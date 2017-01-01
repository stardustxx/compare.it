import React, {Component} from 'react';
import Nav from '../../Components/Nav/Nav';
import {Link, browserHistory} from 'react-router'
import LoginForm from '../../Components/LoginForm/LoginForm';
import * as firebase from 'firebase';
import './Login.css';

class Login extends Component {

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        browserHistory.push("/");
      }
    });   
  }
  
  onLoginSuccess = () => {
    browserHistory.push("/");
  }

  render() {
    return (
      <div className="Login">
        <Nav className="nav"/>
        <div className="body">
          <div className="login-container">
            <LoginForm onLoginSuccess={this.onLoginSuccess} />
            <Link to='/signup'>Don't have an account? Sign up here!</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;