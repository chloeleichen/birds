'use strict';
  var BirdStatus = React.createClass({
    render: function(){
      function transform(str){
        var strNew = str.replace(/\s/g, "-").toLowerCase();
        return strNew;
      }
      return (
        <div className ='status sm-col sm-col-6'>
        <div className='cmStatus'>
          <label>National </label> 
          <span className={transform(this.props.cmStatus)}>{this.props.cmStatus}</span>
        </div>
        <div className = 'nswStatus'>
          <label>NSW </label>
          <span className={transform(this.props.nswStatus)}>{this.props.nswStatus.replace(/\s/g, "-")}</span>
        </div>
        </div>
      );
    }
  });

module.exports = BirdStatus;
