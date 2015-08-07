  var BirdTitle = React.createClass({
    render: function(){
      return (<div className='title sm-col sm-col-6'>
        <div className="sci-name">{this.props.sciName}</div>
        <h1>{this.props.comName}</h1>
        </div>
        ) ;
    }
  });

module.exports = BirdTitle;
