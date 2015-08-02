var React = require('react');
var SearchForm = require('./components/search-form');
var Results = require('./components/results');

var App = React.createClass({
  render: function () {
    return (
      <div className='container-fluid jumbotron header'>
        <h1 className='logo'>Git Releases</h1>
        <h3 className='desc'>a nice way to view repositories GitHub Releases</h3>
        <SearchForm />
        <Results />
      </div>
    );
  }
});

React.render(<App/>, document.getElementById('app'));
