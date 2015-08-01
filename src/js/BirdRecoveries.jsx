'use strict';

  var BirdRecoveries = React.createClass({
    render: function(){
      var recoveries = this.props.recoveries;
      return (<ul className='recoveries'>
              {recoveries.map(function(recovery) {
                for(var key in recovery){
                  return <li key={key}> {key} : {recovery[key]}</li>;
                } 
              })}
              </ul>
          );
    }
  });

module.exports = BirdRecoveries;
