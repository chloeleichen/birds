(function () {
 'use strict';
  var AllBirdsWrapper = React.createClass({displayName: "AllBirdsWrapper",
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
      return( 
            React.createElement("div", null, 
              React.createElement("ul", {className: "clearfix list-reset all-birds-wrapper "}, 
                  this.state.data.map(function(bird, i) {
                  return (React.createElement(BirdWrapper, {onClick: this.handleClick.bind(this, i), key: i, index: i, data: bird, active: this.state.activeBirdId}));
                  }, this), 
                  "//Get active bird", 
                  console.log(this.state.data[this.state.activeBirdId])
              ), 
              React.createElement(BirdInfo, null)
            )
          );
      }
  });

  var BirdWrapper = React.createClass({displayName: "BirdWrapper",
    getInitialState: function() {
      return {};
    },

    handleClick: function () {
      this.props.onClick(this);

    },

    render: function() {
      if(this.props.index === this.props.active){
          var active = true;
      };
      var listItemClassList = active === true? "active":"" + "block bird-wrapper p1 col col-12 sm-col-4 md-col-3 lg-col-3";
      return (
        React.createElement("li", {onClick: this.handleClick, className: listItemClassList}, 
          React.createElement("figure", null, 
          React.createElement("img", {src: "http://placehold.it/350x350", alt: this.props.data.commonName}), 
          React.createElement("figcaption", null, this.props.data.commonName)
          )
        )
      );
    }
  });

  var BirdInfo = React.createClass({displayName: "BirdInfo",
    render: function(){
      return(
        React.createElement("div", null, 
        React.createElement(BirdTitle, null), 
        React.createElement(BirdStats, null), 
        React.createElement(BirdDescription, null), 
        React.createElement(BirdThreats, null), 
        React.createElement(BirdRecovery, null), 
        React.createElement("div", {className: "more info"}, " more info ")
        )
      );
    }
  });

  var BirdTitle = React.createClass({displayName: "BirdTitle",
    render: function(){
      return React.createElement("div", {className: "title"}, "Title") ;
    }
  });

  var BirdDescription = React.createClass({displayName: "BirdDescription",
    render: function(){
      return React.createElement("div", {className: "description"}, "Description") ;
    }
  });

  var BirdHero = React.createClass({displayName: "BirdHero",
    render: function(){
      return React.createElement("div", {className: "hero"}, "hero") ;
    }
  });

  var BirdStats = React.createClass({displayName: "BirdStats",
    render: function(){
      return React.createElement("div", {className: "stats"}, " stats ")
    }
  });

  var BirdThreats = React.createClass({displayName: "BirdThreats",
    render: function(){
      return React.createElement("div", {className: "threats"}, " threats ");
    }
  });

  var BirdRecovery = React.createClass({displayName: "BirdRecovery",
    render: function(){
      return React.createElement("div", {className: "recovery"}, " recovery ");
    }
  });

  React.render(React.createElement(AllBirdsWrapper, null), document.getElementById('content'));

 }());



