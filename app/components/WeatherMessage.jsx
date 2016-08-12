var React = require('react');

/*Annonymous Function
var WeatherMessage = React.createClass({
    render: function() {
        // var location = this.props.location;
        // var temp = this.props.temp;
        var {temp, location} = this.props;
        return (
            <div>
                <h1>Its {temp} Celcius in {location}</h1>
            </div>
        );
    }
});
*/

/*Arrow Function
*/
var WeatherMessage = (props) => {
    var {temp, location} = props;
    return (
        <div>
            <h1>Its {temp} Celcius in {location}</h1>
        </div>
    );
};

module.exports = WeatherMessage;
