var React = require('react');

var WeatherForm = React.createClass({
    onFormSubmit: function(e) {
        e.preventDefault();
        var city = this.refs.city.value;
        if(city.length > 0){
            this.refs.city.value = '';
            this.props.onSearch(city);
        }
      },
    render: function() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div>
                        <input type="text" ref="city" placeholder="Enter City Name"/>
                    </div>
                    <div>
                        <button className = "button expanded hollow">Get Weather</button>
                    </div>
                </form>
            </div>
        );
    }
});

module.exports = WeatherForm;
