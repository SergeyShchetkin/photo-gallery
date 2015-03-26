var path = require('path');
var React = require('react');
//var _ = require('bootstrap');
var $ = require('jquery');
var Toolbar = require('../jsx/toolbar.jsx');

React.render(
  React.createElement(Toolbar),
  document.getElementById('toolbar')
);

if (NODE_ENV === 'production') {
  $('body').append('<div class="alert alert-info">There is Production mode.</div>');
} else {
  $('body').append('<div class="alert alert-info">There is Development mode.</div>');
}
