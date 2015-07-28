(function () {
 'use strict';
  var Bird = React.createClass({displayName: "Bird",
    render: function(){
      return React.createElement("div", null, " test ");
    }
  });

  React.render(React.createElement(Bird, null), document.getElementById('content'));

 }());



