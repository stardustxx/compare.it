import React, {Component} from 'react';
import Nav from '../../Components/Nav/Nav';
import {browserHistory} from 'react-router'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import './Home.css';
import * as firebase from 'firebase';
import * as Utility from '../../Utility';

class Home extends Component {

  constructor(props) {
    super(props);
  }
    
  componentWillMount() {
    this.fabStyle = {
      'position': 'fixed',
      'right': '24px',
      'bottom': '24px'
    };
  }

  onFabClicked = (event) => {
    // browserHistory.push("/note");
  }
  
  render() {
    return (
      <div className="Home">
        <Nav className="nav" />
        <div className="body">
          <FloatingActionButton style={this.fabStyle} onTouchTap={this.onFabClicked}>
            <ContentAdd/>
          </FloatingActionButton>
        </div>
      </div>
    );
  }
}

export default Home;