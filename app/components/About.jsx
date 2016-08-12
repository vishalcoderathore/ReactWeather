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
        <h3>About</h3>
        <p>This is a simple Weather Detection Application</p>
      </div>
  )
};

module.exports = About;
