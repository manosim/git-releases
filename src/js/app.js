var React = require('react');
var SearchForm = require('./components/search-form');

var App = React.createClass({
  render: function () {
    return (
      <div className='container-fluid jumbotron header'>
        <a className='logo'>Git Releases</a>
        <SearchForm />
      </div>
    );
  }
});

React.render(<App/>, document.getElementById('app'));
