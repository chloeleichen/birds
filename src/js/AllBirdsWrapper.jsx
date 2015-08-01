 'use strict';
  var BirdWrapper = require('./BirdWrapper.jsx');
  var BirdInfo = require('./BirdInfo.jsx');
  var BirdHero = require('./BirdHero.jsx');


  var AllBirdsWrapper = React.createClass({
    getInitialState: function() {
    return {
      data: [],
      activeBirdId: ''
      };
    },

    componentWillMount: function() {
      //prepare data
      this.firebaseRef = new Firebase("https://endangered-birds-nsw.firebaseio.com/");
      this.firebaseRef.on("child_added", function(dataSnapshot) {
        this.setState({
          data: this.state.data.concat(dataSnapshot.val())
        });
      }.bind(this));
    },

    handleClick: function (i) {
      this.setState({
        activeBirdId: i
      })
    },

    render: function(){
      //Get Active Bird
      var activeBird = this.state.data[this.state.activeBirdId];
      var outputHero = null;
      var outputInfo = null;
      if(activeBird){
        outputHero = <BirdHero data={activeBird} />
        outputInfo = <BirdInfo data={activeBird} />
      } 


      return( 
            <div>
            {outputHero}
              <ul className="p2 clearfix list-reset all-birds-wrapper ">
                  {this.state.data.map(function(bird, i) {
                  return (<BirdWrapper onClick={this.handleClick.bind(this, i)} key={i} active={i === this.state.activeBirdId ? 'active' : ''} data={bird} />);
                  }, this)}
              </ul>
            {outputInfo}
            </div>
          );
      }
  });

module.exports = AllBirdsWrapper;
