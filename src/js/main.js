/** @jsx React.DOM */

var React = require('react');

// Here we put our React instance to the global scope. Make sure you do not put it 
// into production and make sure that you close and open your console if the 
// DEV-TOOLS does not display
window.React = React; 

var AllBirdsWrapper = require('./AllBirdsWrapper.jsx');

var body = document.getElementById('body'),
    main = document.getElementById('main');
    



React.render(<AllBirdsWrapper/>, document.getElementById('content')); 
