  var BirdAttribute = React.createClass({
    render: function(){
      var atts = this.props.attribute;
      return (<ul className='center attribute clearfix list-reset'>
        {atts.map(function(att, i) {
          return(<BirdAttributeItem key={i} bio={att.bio} link={att.link} author={att.author} index={i+1}/>)
        })}
        </ul>
        ) ;
    }
  });

  var BirdAttributeItem = React.createClass({
  render: function() {
    return (<li><a href={this.props.link}>Image {this.props.index}</a> &copy; <a href={this.props.bio}>{this.props.author}</a></li>);
  }
});

module.exports = BirdAttribute;
