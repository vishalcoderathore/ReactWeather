var React = require('react');
var {Link} = require('react-router');
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
            <h3 className="text-center">Examples</h3>
            <ul>
                <li>Click on Get Weather</li>
                <li>Enter the City Name</li>
                <li>Click on Search</li>
            </ul>
            <p>Here are a few example locations to try out</p>
            <ol>
                <li>
                    <Link to='/location=Philadelphia'>Philadelphia, PA</Link>
                </li>
                <li>
                    <Link to='/location=Fargo'>Fargo, ND</Link>
                </li>
            </ol>
        </div>
    )
};

module.exports = Examples;
