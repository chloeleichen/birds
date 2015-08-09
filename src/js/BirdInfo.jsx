'use strict';
var BirdTitle = require('./BirdTitle.jsx');
var BirdStats = require('./BirdStats.jsx');
var BirdThreats = require('./BirdThreats.jsx');
var BirdStatus = require('./BirdStatus.jsx');
var BirdImage = require('./BirdImage.jsx');
var BirdAttribute = require('./BirdAttribute.jsx');


var BirdInfo = React.createClass({
    handleClose: function(){
      this.props.onClick(this);
    },
    render: function(){
      var src = "./../imgs/highres/" + this.props.data.id + ".jpg";
      return(
          <div className="bird-card">
          <div className="bird-hero">
          <BirdImage src={src} alt = {this.props.data.commonName} />
          </div>
          <div className='p2 bird-info'>
          <div className="container">
          <div className="close-btn-wrapper block clearfix">
          <a className ="p2 inline-block right btn btn-close icon-cross" onClick = {this.handleClose}></a>
          </div>
          <div className="clearfix">
          <BirdTitle comName={this.props.data.commonName} sciName={this.props.data.scientificName}/>
          <BirdStatus cmStatus={this.props.data.commonwealthStatus} nswStatus ={this.props.data.nswStatus} />
          </div>
          <BirdStats stats={this.props.data.stats} statsFor={this.props.data.statsFor}/>
          <BirdThreats threats={this.props.data.threats}/>
          <div className='profile center clearfix py4 px0'><a href={this.props.data.profile}>view bird profile on environment.gov.au<span className="icon icon-link-external"></span></a></div>
          <BirdAttribute attribute={this.props.data.attributes}/>
          </div>
          </div>
          </div>
        );
      } 
  });

module.exports = BirdInfo;
