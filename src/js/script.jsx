(function () {
 'use strict';
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
      return( 
            <div>
              <ul className="clearfix list-reset all-birds-wrapper ">
                  {this.state.data.map(function(bird, i) {
                  return (<BirdWrapper onClick={this.handleClick.bind(this, i)} key={i} index={i} data={bird} active={this.state.activeBirdId} />);
                  }, this)}
                  //Get active bird
                  {console.log(this.state.data[this.state.activeBirdId])}
              </ul>
              <BirdInfo />
            </div>
          );
      }
  });

  var BirdWrapper = React.createClass({
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
        <li onClick={this.handleClick} className={listItemClassList} >
          <figure>
          <img src="http://placehold.it/350x350" alt={this.props.data.commonName}/>
          <figcaption>{this.props.data.commonName}</figcaption>
          </figure>
        </li>
      );
    }
  });

  var BirdInfo = React.createClass({
    render: function(){
      return(
        <div>
        <BirdTitle />
        <BirdStats />
        <BirdDescription />
        <BirdThreats />
        <BirdRecovery />
        <div className='more info'> more info </div>
        </div>
      );
    }
  });

  var BirdTitle = React.createClass({
    render: function(){
      return <div className='title'>Title</div> ;
    }
  });

  var BirdDescription = React.createClass({
    render: function(){
      return <div className='description'>Description</div> ;
    }
  });

  var BirdHero = React.createClass({
    render: function(){
      return <div className='hero'>hero</div> ;
    }
  });

  var BirdStats = React.createClass({
    render: function(){
      return <div className ='stats'> stats </div>
    }
  });

  var BirdThreats = React.createClass({
    render: function(){
      return <div className='threats'> threats </div>;
    }
  });

  var BirdRecovery = React.createClass({
    render: function(){
      return <div className='recovery'> recovery </div>;
    }
  });

  React.render(<AllBirdsWrapper />, document.getElementById('content'));

 }());



