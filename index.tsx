import React = require('react');
import ReactDOM = require('react-dom');
import T from 'i18n-react';

T.setTexts({
  greeting: "#Hello, World!\n My name is *{myName}*! \n {{howAreYou}}",
  howAreYou:  "_How do you do?_"
});

ReactDOM.render(
  <T.span text={{key:"greeting", myName:"i18n-react"}} />,
  document.getElementById('content')
);

