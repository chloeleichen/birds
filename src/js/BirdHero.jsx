var BirdHero = React.createClass({
    render: function(){
      var src = "imgs/highres/" + this.props.data.id + ".jpg";
      return(
        <div className="bird-hero">
        <img src={src} />
        </div>
        );
    }
  });
module.exports = BirdHero;
