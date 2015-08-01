'use strict';
var Chart = require("chart.js");
var RadarChart = require("react-chartjs").Radar;
// To change other default settings, refer to : http://www.chartjs.org/docs/#getting-started-global-chart-configuration
var chartOptions ={
    scaleShowLine : true,
    angleShowLineOut : true,
    scaleShowLabels : false,
    scaleBeginAtZero : true,
    angleLineColor : "rgba(0,0,0,.1)",
    angleLineWidth : 1,
    responsive: true,
    pointLabelFontFamily : "'Arial'",
    pointLabelFontStyle : "normal",
    pointLabelFontSize : 10,
    pointLabelFontColor : "#666",
    pointDot : true,
    pointDotRadius : 3,
    pointDotStrokeWidth : 1,
    pointHitDetectionRadius : 20,
    datasetStroke : true,
    datasetStrokeWidth : 2,
    datasetFill : true,
    tooltipTemplate:"<%= value %>" 

}

var BirdThreats = React.createClass({
render: function(){
  var chartData = {
    labels: ["Habitat loss", "Alien Species", "Disease", "Fire", "Road Accident", "Hunting", "Long-line Fishing", "General Fishing", "Others"],
    datasets: [
        {
            label: "Threats",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: this.props.threats
          }
        ]
    };
    return <RadarChart data={chartData} options={chartOptions}/>;
  }
});

module.exports = BirdThreats;

