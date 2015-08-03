'use strict';
var BirdTitle = require('./BirdTitle.jsx');
var BirdStats = require('./BirdStats.jsx');
var BirdDescription = require('./BirdDescription.jsx');
var BirdThreats = require('./BirdThreats.jsx');
var BirdRecoveries = require('./BirdRecoveries.jsx');
var BirdStatus = require('./BirdStatus.jsx');


var BirdInfo = React.createClass({
    render: function(){
      return(
        <div className ="container">
          <div className='p2 bird-info'>
          <BirdTitle comName={this.props.data.commonName} sciName={this.props.data.scientificName}/>
          <BirdStats stats={this.props.data.stats} statsFor={this.props.data.statsFor}/>
          <BirdStatus cmStatus={this.props.data.commonwealthStatus} nswStatus ={this.props.data.nswStatus} />
          <BirdDescription description={this.props.data.description}/>
          <BirdThreats threats ={this.props.data.threats} />
          <BirdRecoveries recoveries ={this.props.data.recoveries}/>
          <div className='profile'> <a href={this.props.data.profile}>Profile</a> </div>
          </div>
        </div>
        );
      } 
  });

module.exports = BirdInfo;
