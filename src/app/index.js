
var React = require('react');
var ReactDom = require('react-dom');

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