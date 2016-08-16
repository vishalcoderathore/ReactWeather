var React = require('react');

/*
//Regular Method (Anonymous Function)
 var About = React.createClass({
   render: function(){
     return(
         <h3>About Component</h3>
     )
   }
 });
*/

//Arrow Function
//Use this method when function only renders and is a "StateLess Functional Component"
var About = (props) => {
  return(
      <div>
        <h1 className = "text-center page-title">About</h1>
        <p>This is a simple Weather Application built on React.js.</p>
        <p>
          Here are some of the tools used :
        </p>
        <ul>
          <li>
            <a href = "https://facebook.github.io/react" target="_blank">React</a> - This was the JavaScript library used.
          </li>
          <li>
            <a href = "https://openweathermap.org" target="_blank">Open Weather Map</a> - API is Open Weather Map to search for weather data by city.
          </li>
        </ul>
      </div>
  )
};

module.exports = About;
