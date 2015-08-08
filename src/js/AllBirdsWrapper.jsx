 'use strict';
  var BirdWrapper = require('./BirdWrapper.jsx');
  var BirdInfo = require('./BirdInfo.jsx');
  var buttonStart = document.getElementById('start');
  var activeEl, transitionEvent, birds, birdImg;

  var AllBirdsWrapper = React.createClass({
    whichTransitionEvent: function(el){
          var t;
          var transitions = {
            'transition':'transitionend',
            'OTransition':'oTransitionEnd',
            'MozTransition':'transitionend',
            'WebkitTransition':'webkitTransitionEnd'
          };
          for(t in transitions){
              if( el.style[t] !== undefined ){
                  return transitions[t];
              }
          }
    },

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
      birds = this.refs.birds;
      this.el = React.findDOMNode(birds);
    },

    componentDidUpdate: function(){
      if(!body.classList.contains("ready")){
        birdImg = this.el.getElementsByTagName("img");
          if(birdImg.length == 19){
            body.classList.add("ready");
            buttonStart.disabled = false;
          }
      }
    },

    handleClose: function(){
      this.setState({
        wrapperClass:'closing'
      });

      activeEl = this.el.querySelector('.active');
      transitionEvent = this.whichTransitionEvent(activeEl);
      if(transitionEvent){
        activeEl.addEventListener(transitionEvent, this.listenerClose);
      } 
    },

    handleClick: function (i) {
      this.setState({
        activeBirdId: i,
        wrapperClass:'opening',
      });
      body.classList.add("fix");
      activeEl = this.el.getElementsByTagName('li')[i];
      transitionEvent = this.whichTransitionEvent(activeEl);
      if(transitionEvent){
        activeEl.addEventListener(transitionEvent, this.listenerOpen);
      }
    },

    //seperate for better readability 
    listenerOpen: function (event){
      if((event.propertyName === "transform") || (event.propertyName === "-ms-transform" )||(event.propertyName === "-webkit-transform")){
              this.setState({
              wrapperClass: "open"
            });
        event.target.removeEventListener(event.type, this.listenerOpen);
          }
    },

    listenerClose: function (event){
      if((event.propertyName === "transform") || (event.propertyName === "-ms-transform" )||(event.propertyName === "-webkit-transform")){
          body.classList.remove("fix");
          this.setState({
            wrapperClass: "closed",
            activeBirdId: null
          });
        event.target.removeEventListener(event.type, this.listenerClose);
        }
    },

    render: function(){
      //Get Active Bird
      var activeBird = this.state.data[this.state.activeBirdId];
      var outputInfo = null;
      if(activeBird){
        outputInfo = <BirdInfo onClick = {this.handleClose} data={activeBird} />;
      };

      return( 
        <div className={this.state.wrapperClass}>
        <div className="container bird-list-wrapper">
        <ul className="p1 clearfix list-reset all-birds-wrapper" ref='birds'>
           {this.state.data.map(function(bird, i) {
            return (<BirdWrapper onClick={this.handleClick.bind(this, i)} key={i} active={i === this.state.activeBirdId ? 'active' : null } data={bird}/>);
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
