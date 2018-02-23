
// import React from 'react';
// import ReactDOM from 'react-dom';
//imports give error

var React = require('.../node_modules/react');
var ReactDom = require('.../node_modules/react-dom');

//create component
var TodoComponent = React.createClass({
    render: function(){
        return(
            <h1>Hello!</h1>
        );
    }
});

//put component into html page
ReactDom.render(<TodoComponent/>, document.getElementById(todo-wrapper))