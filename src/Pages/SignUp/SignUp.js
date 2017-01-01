import React, {Component} from 'react';
import Nav from '../../Components/Nav/Nav';
import SignUpForm from '../../Components/SignUpForm/SignUpForm';
import * as firebase from 'firebase';
import {Link, browserHistory} from 'react-router';
import './SignUp.css';

class SignUp extends Component {

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        browserHistory.push("/");
      }
    });   
  }

  render() {
    return (
      <div className='SignUp'>
        <Nav className='nav'/>
        <div className="body">
          <div className="sign-up-container">
            <SignUpForm/>
            <Link to='/login'>Already a user? Log in here!</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;