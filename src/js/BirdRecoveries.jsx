'use strict';

  var BirdRecoveries = React.createClass({
    render: function(){
      if(this.props.recoveries){
        return (<ul className='recoveries'>
              {this.props.recoveries.map(function(recovery) {
                for(var key in recovery){
                  return <li key={key}> <a href={recovery[key]}>{key}</a></li>;
                } 
              })}
              </ul>
          );
      } else{
        return <div> </div>;
      } 
    }
  });

module.exports = BirdRecoveries;
