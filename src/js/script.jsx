(function () {
 'use strict';
  var AllBirdsWrapper = React.createClass({
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
            <ul className="clearfix list-reset all-birds-wrapper ">
            {this.state.data.map(function(bird) {
                return <BirdWrapper key={bird.id} data={bird}/>;
                })}
            </ul>
          );
    }
  });

  var BirdWrapper = React.createClass({
    render: function() {
      return (<li className="block bird-wrapper p1 col col-12 sm-col-4 md-col-3 lg-col-3">
          <figure>
          <img src="http://placehold.it/350x350" alt={this.props.data.commonName}/>
          <figcaption>{this.props.data.commonName}</figcaption>
          </figure>
        </li>
      );
    }
  });

  React.render(<AllBirdsWrapper />, document.getElementById('content'));

 }());



