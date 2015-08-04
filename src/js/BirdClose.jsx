'use strict';
var BirdClose = React.createClass({
  handleClose: function(){
    this.props.onClick(this);
  },

  render: function(){
    return <a className ="p2 block btn btn-close icon-cross" onClick = {this.handleClose} > </a>;
  }

});

module.exports = BirdClose;
