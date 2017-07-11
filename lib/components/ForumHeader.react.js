'use strict';

const ForumHeader = React.createClass({
  displayName: "ForumHeader",


  render: function () {

    console.log(this.props.allAnswers);

    return React.createElement(
      "nav",
      { className: "navbar navbar-default" },
      React.createElement(
        "div",
        { className: "container-fluid" },
        React.createElement(
          "div",
          { className: "navbar-head" },
          React.createElement(
            "a",
            { className: "navbar-brand", href: "#" },
            "React Form"
          )
        )
      )
    );
  }
});