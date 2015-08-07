 'use strict';
  var BirdWrapper = require('./BirdWrapper.jsx');
  var BirdInfo = require('./BirdInfo.jsx');
  
  var AllBirdsWrapper = React.createClass({
    getInitialState: function() {
    return {
      data: [],
      activeBirdId: '',
      wrapperClass: 'closed' 
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
      this.close();
    },

    handleClick: function (i) {
      this.open(i);
    },

    open: function(i){
      this.setState({
        activeBirdId: i,
        wrapperClass:'opening',
      });
      body.classList.add("fix");

      var o = window.setTimeout(function (self) {
        self.setState({
          wrapperClass:'open'
        });
      }, 1200, this);
    },

    close: function(){
      this.setState({
        wrapperClass:'closing'
      });
      var c = window.setTimeout(function(self){
        body.classList.remove("fix");
        self.setState({
          activeBirdId: null,
          wrapperClass: "closed"
        });
      }, 1200, this);
    },
    render: function(){
      //Get Active Bird
      var activeBird = this.state.data[this.state.activeBirdId];
      var outputInfo = null;
      if(activeBird){
        outputInfo = <BirdInfo onClick = {this.handleClose} data={activeBird} />;
      } 

      return( 
        <div className={this.state.wrapperClass}>
        <div className="container bird-list-wrapper">
        <ul className="p1 clearfix list-reset all-birds-wrapper ">
           {this.state.data.map(function(bird, i) {
            return (<BirdWrapper onClick={this.handleClick.bind(this, i)} key={i} active={i === this.state.activeBirdId ? 'active' : ''} data={bird} />);
           }, this)}
        </ul>
        </div>
        <div className ="bird-card-wrapper">
        {outputInfo}
        </div>
        </div>
        );
      }
  });

module.exports = AllBirdsWrapper;
