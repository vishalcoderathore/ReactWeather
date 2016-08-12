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
    return (
        <div>
            <h3>Examples</h3>
            <p>
                <ul>
                    <li>Click on Get Weather</li>
                    <li>Enter the City Name</li>
                    <li>Click on Search</li>
                </ul>
            </p>
        </div>
    )
};

module.exports = Examples;
