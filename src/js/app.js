var React = require('react');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <h3>Hello World!</h3>
      </div>
    );
  }
});

React.render(<App/>, document.getElementById('app'));
