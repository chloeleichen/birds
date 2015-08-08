'use strict';
var BirdImage = React.createClass({
  getInitialState: function() {
    return {
      loaded: false
    };
  },

  componentDidMount: function(){
    var self = this;
    var img = document.createElement('img');
    img.onload = function(){
      self.setState({ loaded: true});
    };
    img.src = this.props.src;
  },

  render: function(){
    return (<img className = {this.state.loaded? "loaded" : "loading"} src = {this.props.src} alt ={this.props.alt} />); 
  }
});

module.exports = BirdImage;
