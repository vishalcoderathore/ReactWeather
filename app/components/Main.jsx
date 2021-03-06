var React = require('react');
var Nav = require('Nav');

/*Annonymous Function
var Main = React.createClass({
  render: function(){
    return(
      <div>
        <h2>Main Components</h2>
        <Nav/>
        {this.props.children}
      </div>
    );
  }
});
*/

/*Arrow function
*/
var Main = (props) => {
  return(
    <div>
      <Nav/>
      <div className = "row">
        <div className = "columns medium-6 large-4 small-centered">
          {props.children}
        </div>
      </div>
    </div>
  );
};

module.exports = Main;
