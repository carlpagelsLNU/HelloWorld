var React = require('react'),
    ReactDOM = require('react-dom'),
    Router = require('react-router').Router,
    Provider = require('react-redux').Provider,
    routes = require('./routes');

ReactDOM.render(
    <Router routes={routes}/>,
	    document.getElementById('app')
);