import React, {Component} from 'react';
import IconButton from 'material-ui/IconButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

class FavoriteButton extends Component {

  onButtonTap = (event) => {
    let obj = {};
    obj[this.props.name] = this.props.data;
    this.props.onTouchTap(obj, this.props.index);
  }
  
  render() {
    return (
      <div>
        <IconButton onTouchTap={this.onButtonTap}>
          {this.props.data.liked ? <ActionFavorite /> : <ActionFavoriteBorder />}
        </IconButton>
      </div>
    );
  }
}

export default FavoriteButton;