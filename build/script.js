(function () {
 'use strict';
  var AllBirdsWrapper = React.createClass({displayName: "AllBirdsWrapper",
    getInitialState: function() {
    return {data: []};
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

    render: function(){
      return( 
            React.createElement("ul", {className: "list-reset all-birds-wrapper "}, 
            this.state.data.map(function(bird) {
                return React.createElement(BirdWrapper, {key: bird.id, data: bird});
                })
            )
          );
    }
  });

  var BirdWrapper = React.createClass({displayName: "BirdWrapper",
    render: function() {
      return React.createElement("li", {className: "block bird-wrapper col col-12 sm-col-6 md-col-4 lg-col-3"}, this.props.data.commonName);
    }
  });

  React.render(React.createElement(AllBirdsWrapper, null), document.getElementById('content'));

 }());



