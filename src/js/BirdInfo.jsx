'use strict';
var BirdTitle = require('./BirdTitle.jsx');
var BirdStats = require('./BirdStats.jsx');
var BirdThreats = require('./BirdThreats.jsx');
var BirdStatus = require('./BirdStatus.jsx');
var BirdImage = require('./BirdImage.jsx');


var BirdInfo = React.createClass({
    handleClose: function(){
      this.props.onClick(this);
    },
    render: function(){
      var src = "http://www.chloechen.io/images/birds/highres/" + this.props.data.id + ".jpg";
      return(
          <div className="bird-card">
          <div className="bird-hero">
          <BirdImage src={src} alt = {this.props.data.commonName} />
          </div>
          <div className='p2 bird-info'>
          <div className="container">
          <a className ="p2 block btn btn-close icon-cross" onClick = {this.handleClose}></a>
          <div className="clearfix">
          <BirdTitle comName={this.props.data.commonName} sciName={this.props.data.scientificName}/>
          <BirdStatus cmStatus={this.props.data.commonwealthStatus} nswStatus ={this.props.data.nswStatus} />
          </div>
          <BirdStats stats={this.props.data.stats} statsFor={this.props.data.statsFor}/>
          <BirdThreats threats ={this.props.data.threats} />
          <div className='profile'> <a href={this.props.data.profile}>Profile</a> </div>
          </div>
          </div>
          </div>
        );
      } 
  });

module.exports = BirdInfo;
