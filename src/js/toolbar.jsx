/** @jsx React.DOM */
"use strict";

var React = require('react');

module.exports = React.createClass({ displayName: 'Toolbar',
  render: function () {
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#"><i className="glyphicon glyphicon-picture"> Photo-Gallery</i></a>
            </div>
            </div>
          </nav>
        </div>
    );
  }
});


