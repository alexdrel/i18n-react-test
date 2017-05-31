"use strict";
exports.__esModule = true;
var React = require("react");
var ReactDOM = require("react-dom");
var i18n_react_1 = require("i18n-react");
i18n_react_1["default"].setTexts({
    greeting: "#Hello, World!\n My name is *{myName}*! \n {{howAreYou}}",
    howAreYou: "_How do you do?_"
});
ReactDOM.render(React.createElement(i18n_react_1["default"].span, { text: { key: "greeting", myName: "i18n-react" } }), document.getElementById('content'));
