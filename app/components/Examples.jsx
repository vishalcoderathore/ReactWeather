var React = require('react');
/*
//Annonymous Function
var Examples = React.createClass({
  render: function(){
    return(
        <h3>Examples Component</h3>
    )
  }
});
*/

/*Arrow function
*
*/
var Examples = (props) => {
  return(
      <h3>Examples Component</h3>
  )
};

module.exports = Examples;
