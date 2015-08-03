'use strict';
  var BirdStatus = React.createClass({
    render: function(){
      return (
        <div className ='status'>
        <div className='cmStatus'>
          <label> Commonwealth status </label> 
          <span> {this.props.cmStatus}</span>
        </div>
        <div className = 'nswStatus'>
          <label> NSW status </label> 
          <span> {this.props.nswStatus}</span>
        </div>
        </div>
      );
    }
  });

module.exports = BirdStatus;
