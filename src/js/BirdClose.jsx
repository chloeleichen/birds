'use strict';
var BirdClose = React.createClass({
  handleClose: function(){
    this.props.onClick(this);
  },

  render: function(){
    return <a className ="btn" onClick = {this.handleClose} > x </a>;
  }

});

module.exports = BirdClose;
