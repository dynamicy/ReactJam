import React from 'react';
import ReactDOM from 'react-dom';

var HelloMessage = React.createClass({
    displayName: "HelloMessage",
    render: function() {
        return React.createElement("div", null, "Hello World ", null);
    }
}), mountNode=document.getElementById('app');

ReactDOM.render(React.createElement(HelloMessage, null), mountNode);
