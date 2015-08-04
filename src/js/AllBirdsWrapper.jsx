 'use strict';
  var BirdWrapper = require('./BirdWrapper.jsx');
  var BirdInfo = require('./BirdInfo.jsx');
  var BirdHero = require('./BirdHero.jsx');
  var BirdClose = require('./BirdClose.jsx');


  var AllBirdsWrapper = React.createClass({
    getInitialState: function() {
    return {
      data: [],
      activeBirdId: '',
      wrapperClass: 'close' 
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

    handleClose: function(){
      this.setState({
        activeBirdId: '',
        wrapperClass:'close'
      })
    },

    handleClick: function (i) {
      this.setState({
        activeBirdId: i,
        wrapperClass:'open'
      })
    },

    render: function(){
      //Get Active Bird
      var activeBird = this.state.data[this.state.activeBirdId];
      var outputHero = null;
      var outputInfo = null;
      var closeButton = null;
      var cardStyle = {
        top: window.scrollY
      }

      if(activeBird){
        outputHero = <BirdHero data={activeBird} />;
        outputInfo = <BirdInfo data={activeBird} />;
        closeButton = <BirdClose onClick = {this.handleClose} />;
      } 

      return( 
        <div className={this.state.wrapperClass}>
            <div className="container bird-list-wrapper">
              <ul className="p2 clearfix list-reset all-birds-wrapper ">
                  {this.state.data.map(function(bird, i) {
                  return (<BirdWrapper onClick={this.handleClick.bind(this, i)} key={i} active={i === this.state.activeBirdId ? 'active' : ''} data={bird} />);
                  }, this)}
              </ul>
            </div>
            <div className ="bird-card" style={cardStyle}>
            <div className="bird-hero">
            {outputHero}
            </div>
            <div className ="bird-info-wrapper container">
            {closeButton}
            {outputInfo}
            </div>
            </div>
          </div>
          );
      }
  });

module.exports = AllBirdsWrapper;
