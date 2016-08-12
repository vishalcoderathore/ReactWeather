var React = require('react');
var {Link, IndexLink} = require('react-router');

/*Annonymous Function
var Nav = React.createClass({
  render: function(){
    return(
      <div>
        <h3>Nav Components</h3>
        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
        <Link to="about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
        <Link to="example" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
      </div>
    );
  }
});
*/

/*Arrow Function
*/
var Nav = () => {
  return(
    <div>
      <h3>Nav Components</h3>
      <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
      <Link to="about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
      <Link to="example" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
    </div>
  );
}

module.exports = Nav;
