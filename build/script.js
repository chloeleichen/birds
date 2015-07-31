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
      //Get Active Bird
      var activeBird = this.state.data[this.state.activeBirdId];
      return( 
            React.createElement("div", null, 
              React.createElement("ul", {className: "clearfix list-reset all-birds-wrapper "}, 
                  this.state.data.map(function(bird, i) {
                  return (React.createElement(BirdWrapper, {onClick: this.handleClick.bind(this, i), key: i, active: i === this.state.activeBirdId ? 'active' : '', data: bird}));
                  }, this)
              ), 
              React.createElement(BirdInfo, {data: activeBird})
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
      var listItemClassList = this.props.active + " block bird-wrapper p1 col col-12 sm-col-4 md-col-3 lg-col-3";
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
      if(this.props.data){
        console.log(this.props.data.threats);
        return(
        React.createElement("div", null, 
        React.createElement(BirdTitle, {comName: this.props.data.commonName, sciName: this.props.data.scientificName}), 
        React.createElement(BirdStats, {stats: this.props.data.stats, statsFor: this.props.data.statsFor}), 
        React.createElement(BirdDescription, {description: this.props.data.description}), 
        React.createElement(BirdThreats, {threats: this.props.data.threats}), 
        React.createElement(BirdRecovery, {recoveries: this.props.data.recoveries}), 
        React.createElement("div", {className: "more info"}, " ", React.createElement("a", {href: this.props.data.profile}, "more info"), " ")
        )
        );
      } else{
        return React.createElement("div", null);
      }
      
    }
  });

  var BirdTitle = React.createClass({displayName: "BirdTitle",
    render: function(){
      return (React.createElement("div", {className: "title"}, 
        React.createElement("h4", null, this.props.sciName), 
        React.createElement("h1", null, this.props.comName)
        )
        ) ;
    }
  });

  var BirdDescription = React.createClass({displayName: "BirdDescription",
    render: function(){
      return React.createElement("div", {className: "description"}, this.props.description) ;
    }
  });

  var BirdHero = React.createClass({displayName: "BirdHero",
    render: function(){
      return React.createElement("div", {className: "hero"}, "hero") ;
    }
  });

  var BirdStats = React.createClass({displayName: "BirdStats",
    render: function(){
      return (React.createElement("div", {className: "stats"}, 
             React.createElement("h2", null, this.props.stats), 
             React.createElement("span", null, " in ", this.props.statsFor, " ")
             )
        );
    }
  });

  var BirdThreats = React.createClass({displayName: "BirdThreats",
    render: function(){
      var threats = this.props.threats;
      return (React.createElement("ul", {className: "threats"}, 
              threats.map(function(threat) {
                for(var key in threat){
                  return React.createElement("li", {key: key}, " ", key, " : ", threat[key]);
                } 
              })
              )
          );
    }
  });

  var BirdRecovery = React.createClass({displayName: "BirdRecovery",
    render: function(){
      var recoveries = this.props.recoveries;
      return (React.createElement("ul", {className: "recoveries"}, 
              recoveries.map(function(recovery) {
                for(var key in recovery){
                  return React.createElement("li", {key: key}, " ", key, " : ", recovery[key]);
                } 
              })
              )
          );
    }
  });

  React.render(React.createElement(AllBirdsWrapper, null), document.getElementById('content'));

 }());



