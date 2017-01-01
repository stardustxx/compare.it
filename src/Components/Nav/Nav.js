import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import {browserHistory} from 'react-router'
import FlatButton from 'material-ui/FlatButton';
import * as firebase from 'firebase';
// import Drawer from 'material-ui/Drawer';
// import MenuItem from 'material-ui/MenuItem';

class Nav extends Component {

  constructor() {
    super();
    this.state = {
      isDrawerOpen: false
    };

    let currentLocation = browserHistory.getCurrentLocation();
    if (currentLocation.pathname === "/") {
      this.showLogOut = true;
    }

    // this.drawerContainerStyle = {
    //   'top': '64px'
    // };
  }

  onLeftIconTouched = () => {
    // this.setState((prevState) => {
    //   return {
    //     isDrawerOpen: !prevState.isDrawerOpen
    //   }
    // });
    if (this.props.leftIcon) {
      browserHistory.push("/");
    }
  }

  onLogOutClicked = () => {
    firebase.auth().signOut().catch((error) => {
      console.error("sign out error", error);
    });
  }

  render() {
    return (
      <div>
        <AppBar
          title="Compare.it"
          iconElementLeft={this.props.leftIcon}
          iconElementRight={this.showLogOut && <FlatButton onTouchTap={this.onLogOutClicked} label="Log out" />}
          showMenuIconButton={this.props.leftIcon ? true : false}
          onLeftIconButtonTouchTap={this.onLeftIconTouched}
          />
        
      {/*
        <AppBar
          title="Diary"
          iconElementLeft={<IconButton><NavigationArrowBack/></IconButton>}
          onLeftIconButtonTouchTap={this.onLeftIconTouched}
          />
        <Drawer
          open={this.state.isDrawerOpen}
          containerStyle={this.drawerContainerStyle}>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      */}
      </div>
    );
  }
}

export default Nav;