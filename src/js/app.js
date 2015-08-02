var React = require('react');
var Reflux = require('reflux');
var Actions = require('./actions/actions');
var SearchForm = require('./components/search-form');
var Results = require('./components/results');

var App = React.createClass({
  mixins: [
    Reflux.listenTo(Actions.getReleases, 'makeRequest'),
    Reflux.listenTo(Actions.getReleases.completed, 'gotResponse'),
    Reflux.listenTo(Actions.getReleases.failed, 'gotResponse')
  ],

  getInitialState: function() {
    return {
      loading: false
    };
  },

  makeRequest: function () {
    this.setState({
      loading: true
    });
  },

  gotResponse: function () {
    this.setState({
      loading: false
    });
  },

  render: function () {
    return (
      <div>
        <div className='container-fluid jumbotron header'>
          <h1 className='logo'>git releases</h1>
          <h3 className='desc'>a nice way to view repositories GitHub Releases</h3>
          <SearchForm />
        </div>
        <div className='container'>
          <Results loading={this.state.loading} />
        </div>
      </div>
    );
  }
});

React.render(<App/>, document.getElementById('app'));
