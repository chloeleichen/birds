'use strict';

  var BirdDescription = React.createClass({
    render: function(){
      return <div className='description'>{this.props.description}</div> ;
    }
  });

module.exports = BirdDescription;
