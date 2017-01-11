import React, {Component} from 'react';
import Nav from '../../Components/Nav/Nav';
import FavoriteButton from '../../Components/FavoriteButton';
import {browserHistory} from 'react-router'
import {List} from 'material-ui/List';
// import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
// import FloatingActionButton from 'material-ui/FloatingActionButton';
// import ContentAdd from 'material-ui/svg-icons/content/add';
import './Home.css';
import * as firebase from 'firebase';
// import * as Utility from '../../Utility';

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      listObj: []
    };

    this.mountainImage = "https://images.unsplash.com/photo-1482146426705-433fc4949dbb?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=";
    this.starImage = "https://images.unsplash.com/photo-1478250242432-9381e12b763b?dpr=1&auto=format&fit=crop&w=1500&h=1097&q=80&cs=tinysrgb&crop=";
  }
    
  componentWillMount() {
    // this.fabStyle = {
    //   'position': 'fixed',
    //   'right': '24px',
    //   'bottom': '24px'
    // };

    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        browserHistory.push("/login");
      }
    });
  }

  componentDidMount() {
    this.setState((prevState, props) => {
      for (let i = 0; i < 30; i++) {
        let obj = {
          optionA: {
            "name": i % 2 ? "mountain" : "star",
            "link": i % 2 ? this.mountainImage : this.starImage,
            "liked": false
          },
          optionB: {
            "name": i % 2 ? "star" : "mountain",
            "link": i % 2 ? this.starImage : this.mountainImage,
            "liked": false
          }
        };
        prevState.listObj.push(obj);
      }
      return {
        listObj: prevState.listObj
      };
    });
  }
  
  // onFabClicked = (event) => {
  //   browserHistory.push("/note");
  // }

  onFavoriteTap = (data, index) => {
    this.setState((prevState, props) => {
      let key = Object.keys(data)[0];
      data[key].liked = !data[key].liked;
      return {
        listObj: prevState.listObj
      };
    });
  }
  
  render() {
    return (
      <div className="Home">
        <Nav className="nav" />
        <div className="body">
          <List>
            <Subheader>List</Subheader>
            {
              this.state.listObj.map((value, index) => {
                return (
                  <div key={index} className="option-container">
                    <div className="option-one">
                      <h1>{value.optionA.name}</h1>
                      <img src={value.optionA.link} alt="" />
                      <FavoriteButton data={value.optionA} name="optionA" index={index} onTouchTap={this.onFavoriteTap} />
                    </div>
                    <div className="option-two">
                      <h1>{value.optionB.name}</h1>
                      <img src={value.optionB.link} alt="" />
                      <FavoriteButton data={value.optionB} name="optionB" index={index} onTouchTap={this.onFavoriteTap} />
                    </div>
                  </div>
                )
              })
            }
          </List>

          {/**
            <FloatingActionButton style={this.fabStyle} onTouchTap={this.onFabClicked}>
              <ContentAdd/>
            </FloatingActionButton>
          */}
        </div>
      </div>
    );
  }
}

export default Home;