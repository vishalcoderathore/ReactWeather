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
      <h2>Main Components</h2>
      <Nav/>
      {props.children}
    </div>
  );
};

module.exports = Main;
