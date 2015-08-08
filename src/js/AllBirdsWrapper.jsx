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

    componentDidMount:function(){
      var l = setTimeout(function(){
        body.classList.add("ready");
      }, 0);
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
      }, 1500, this);
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
      }, 1500, this);
       /* From Modernizr */
function whichTransitionEvent(){
    var t;
    var el = document.querySelector('.active');
    var transitions = {
      'transition':'transitionend',
      'OTransition':'oTransitionEnd',
      'MozTransition':'transitionend',
      'WebkitTransition':'webkitTransitionEnd'
    }

    for(t in transitions){
        if( el.style[t] !== undefined ){
            return transitions[t];
        }
    }
}
      var transitionEvent = whichTransitionEvent();
        transitionEvent && el.addEventListener(transitionEvent, function() {
          alert("finished");
        });
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
