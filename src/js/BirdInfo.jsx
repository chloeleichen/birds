'use strict';
var BirdTitle = require('./BirdTitle.jsx');
var BirdStats = require('./BirdStats.jsx');
var BirdDescription = require('./BirdDescription.jsx');
var BirdThreats = require('./BirdThreats.jsx');
var BirdRecoveries = require('./BirdRecoveries.jsx');


var BirdInfo = React.createClass({
    render: function(){
      return(
        <div className ="container">
          <div className='p2 bird-info'>
          <BirdTitle comName={this.props.data.commonName} sciName={this.props.data.scientificName}/>
          <BirdStats stats={this.props.data.stats} statsFor={this.props.data.statsFor}/>
          <BirdDescription description={this.props.data.description}/>
          <BirdThreats threats ={this.props.data.threats} />
          <BirdRecoveries recoveries ={this.props.data.recoveries}/>
          <div className='more info'> <a href={this.props.data.profile}>more info</a> </div>
          </div>
        </div>
        );
      } 
  });
module.exports = BirdInfo;
