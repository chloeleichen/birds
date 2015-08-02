'use strict';
var BirdImage = require('./BirdImage.jsx');

var BirdHero = React.createClass({
    render: function(){
      var src = "http://www.chloechen.io/images/birds/highres/" + this.props.data.id + ".jpg";
      return(
        <div className="bird-hero">
        <BirdImage src={src} alt = {this.props.data.commonName} />
        </div>
        );
    }
  });

module.exports = BirdHero;
