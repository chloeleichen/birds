'use strict';

  var BirdStats = React.createClass({
    render: function(){
      return (<div className ='stats'>
             <h2>{this.props.stats}</h2>
             <span> in {this.props.statsFor} </span>
             </div>
        );
    }
  });

module.exports = BirdStats;
