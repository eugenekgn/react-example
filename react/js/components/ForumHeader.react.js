'use strict';

const ForumHeader = React.createClass({


  render: function () {

    console.log(this.props.allAnswers);

    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-head">
            <a className="navbar-brand" href="#">
              React Form
                  </a>
          </div>
        </div>
      </nav>);
  }
});