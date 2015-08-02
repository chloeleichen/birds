'use strict';
  var BirdWrapper = React.createClass({
    getInitialState: function() {
      return {};
    },

    handleClick: function () {
      this.props.onClick(this);

    },

    render: function() {
      var listItemClassList = this.props.active + " block bird-wrapper p1 col col-12 sm-col-4 md-col-4 lg-col-4";
      var src = "imgs/thumbnail/" + this.props.data.id + ".jpg";
      return (
        <li onClick={this.handleClick} className={listItemClassList} >
          <figure>
          <img src={src} alt={this.props.data.commonName}/>
          <figcaption>{this.props.data.commonName}</figcaption>
          </figure>
        </li>
      );
    }
  });

  module.exports = BirdWrapper;
