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
      //Get Active Bird
      var activeBird = this.state.data[this.state.activeBirdId];
      return( 
            <div>
              <ul className="clearfix list-reset all-birds-wrapper ">
                  {this.state.data.map(function(bird, i) {
                  return (<BirdWrapper onClick={this.handleClick.bind(this, i)} key={i} active={i === this.state.activeBirdId ? 'active' : ''} data={bird} />);
                  }, this)}
              </ul>
              <BirdInfo data={activeBird} />
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
      var listItemClassList = this.props.active + " block bird-wrapper p1 col col-12 sm-col-4 md-col-3 lg-col-3";
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
      if(this.props.data){
        console.log(this.props.data.threats);
        return(
        <div>
        <BirdTitle comName={this.props.data.commonName} sciName={this.props.data.scientificName}/>
        <BirdStats stats={this.props.data.stats} statsFor={this.props.data.statsFor}/>
        <BirdDescription description={this.props.data.description}/>
        <BirdThreats threats ={this.props.data.threats}/>
        <BirdRecovery recoveries ={this.props.data.recoveries}/>
        <div className='more info'> <a href={this.props.data.profile}>more info</a> </div>
        </div>
        );
      } else{
        return <div></div>;
      }
      
    }
  });

  var BirdTitle = React.createClass({
    render: function(){
      return (<div className='title'>
        <h4>{this.props.sciName}</h4>
        <h1>{this.props.comName}</h1>
        </div>
        ) ;
    }
  });

  var BirdDescription = React.createClass({
    render: function(){
      return <div className='description'>{this.props.description}</div> ;
    }
  });

  var BirdHero = React.createClass({
    render: function(){
      return <div className='hero'>hero</div> ;
    }
  });

  var BirdStats = React.createClass({
    render: function(){
      return (<div className ='stats'>
             <h2>{this.props.stats}</h2>
             <span> in {this.props.statsFor} </span>
             </div>
        );
    }
  });

  var BirdThreats = React.createClass({
    render: function(){
      var threats = this.props.threats;
      return (<ul className='threats'>
              {threats.map(function(threat) {
                for(var key in threat){
                  return <li key={key}> {key} : {threat[key]}</li>;
                } 
              })}
              </ul>
          );
    }
  });

  var BirdRecovery = React.createClass({
    render: function(){
      var recoveries = this.props.recoveries;
      return (<ul className='recoveries'>
              {recoveries.map(function(recovery) {
                for(var key in recovery){
                  return <li key={key}> {key} : {recovery[key]}</li>;
                } 
              })}
              </ul>
          );
    }
  });

  React.render(<AllBirdsWrapper />, document.getElementById('content'));

 }());



