var React = require('react'),
    Nav = require('./nav');

var Wrap = React.createClass({
    render: function(){
        return (
            <div id="wrap">
                <h1>First hello world application</h1>
                <Nav/>
                {this.props.children}
            </div>
        );
    }
});

module.exports = Wrap;