'use strict';
  var c = null;
  var BirdStats = React.createClass({
    getInitialState: function() {
    return {
      number: 0
      };
    },

    count: function () {
      if(this.state.number < this.props.stats){
        this.setState({
          number: this.state.number + 1
        });
      }
    },

    componentDidMount: function() {
      this.interval = setInterval(this.count, 3000/this.props.stats);
    },

    componentWillUnmount: function() {
      clearInterval(this.interval);
      console.log("unmount");
    },
    
    render: function(){
      return (<div className ='stats clearfix'>
             <label className="meta block">Population in {this.props.statsFor}</label>
             <div className="number">{this.state.number}</div>
             </div>
        );
    }
  });

module.exports = BirdStats;
