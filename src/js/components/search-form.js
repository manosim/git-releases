var React = require('react');
var Actions = require('../actions/actions');
var RepositoryStore = require('../stores/repository');

var SearchForm = React.createClass({
  getInitialState: function () {
    return {
      username: null,
      repo: null,
      releases: []
    };
  },

  handleChange: function (key, event) {
    var state = {};
    state[key] = event.target.value;
    this.setState(state);
  },

  doSearch: function (e) {
    e.preventDefault();
    var username = this.state.username;
    var repo = this.state.repo;
    Actions.getReleases(this.state.username + '/' + this.state.repo);
  },

  doDemo: function (e) {
    e.preventDefault();
    Actions.getReleases('ekonstantinidis/gitify');
  },

  render: function () {
    return (
      <div className='container search-form'>
        <div className='row'>

          <form>
            <div className='col-md-offset-2 col-md-3'>
              <input
                className="form-control input-lg"
                type="text"
                placeholder="username"
                onChange={this.handleChange.bind(this, 'username')} />
            </div>

            <div className='col-md-4'>
              <input
                className="form-control input-lg"
                type="text"
                placeholder="repository"
                onChange={this.handleChange.bind(this, 'repo')} />
            </div>

            <div className='col-md-1'>
              <button
                type='submit'
                onClick={this.doSearch}
                className='btn btn-lg btn-default btn-block'>
                Go
              </button>
            </div>
          </form>

        </div>

        <div className='row'>
          <div className='col-md-offset-6 col-md-4 text-right'>
            <a href='#' className='demo-link' onClick={this.doDemo}>or do the demo?</a>
          </div>
        </div>

      </div>
    );
  }
});

module.exports = SearchForm;
