'use strict';

  var BirdImage = require('./BirdImage.jsx');

  var BirdWrapper = React.createClass({
    handleClick: function () {
      this.props.onClick(this);
    },

    render: function() {
      var listItemClassList = this.props.active + " block bird-wrapper p1 col col-12 sm-col-4 md-col-4 lg-col-4";
      var src = "http://www.chloechen.io/images/birds/thumbnail/" + this.props.data.id + ".jpg";
      return (
        <li onClick={this.handleClick} className={listItemClassList} >
          <figure>
          <BirdImage src={src} alt={this.props.data.commonName} />
          <figcaption>{this.props.data.commonName}</figcaption>
          </figure>
        </li>
      );
    }
  });

module.exports = BirdWrapper;
