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
var Nav = React.createClass({
    onSearch: function(e) {
        e.preventDefault();
        alert('Not yet wired up');
    },
    render: function() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">
                            React Weather App</li>
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{
                                fontWeight: 'bold'
                            }}>Get Weather</IndexLink>
                        </li>
                        <li>
                            <Link to="about" activeClassName="active" activeStyle={{
                                fontWeight: 'bold'
                            }}>About</Link>
                        </li>
                        <li>
                            <Link to="example" activeClassName="active" activeStyle={{
                                fontWeight: 'bold'
                            }}>Examples</Link>
                        </li>
                    </ul>
                </div>

                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className='menu'>
                            <li>
                                <input type="search" placeholder="Get Weather"></input>
                            </li>
                            <li>
                                <input type="submit" value="Get Weather" className="button"></input>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
});

module.exports = Nav;
