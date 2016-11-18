var React = require('react');
var Link = require('react-router').Link;
import Auth0Lock from 'auth0-lock';

// Home.jsx

var Home = React.createClass({
  // ...
  showLock: function() {
    // Show the Auth0Lock widget
    this.props.lock.show();
  },

  render: function() {
    return (
    <div className="login-box">
      <a onClick={this.showLock}>Sign In Yeah</a>
    </div>);
  }
});