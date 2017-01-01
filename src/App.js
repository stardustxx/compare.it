import React, {Component} from 'react';
import {Router, Route, browserHistory} from 'react-router'
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import * as firebase from 'firebase';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
class App extends Component {

  constructor(props) {
    super(props);
    // Initialize Firebase
    let config = {
      apiKey: "AIzaSyBCHk1nUxnLmXGyAZ3bKOJFosnpiDpuTBI",
      authDomain: "compareit-fb1b1.firebaseapp.com",
      databaseURL: "https://compareit-fb1b1.firebaseio.com",
      storageBucket: "compareit-fb1b1.appspot.com",
      messagingSenderId: "622251125368"
    };
    firebase.initializeApp(config);
    injectTapEventPlugin();
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        browserHistory.push("/login");
      }
    });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Router history={browserHistory}>
            <Route path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;