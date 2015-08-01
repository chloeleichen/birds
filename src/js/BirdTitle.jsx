  var BirdTitle = React.createClass({
    render: function(){
      return (<div className='title'>
        <h4>{this.props.sciName}</h4>
        <h1>{this.props.comName}</h1>
        </div>
        ) ;
    }
  });

module.exports = BirdTitle;
