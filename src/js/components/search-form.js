var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Actions = require('../actions/actions');
var RepositoryStore = require('../stores/repository');

var Input = ReactBootstrap.Input;

var SearchForm = React.createClass({
  getInitialState: function () {
    return {
      username: '',
      repo: '',
      releases: [],
      errors: {
        username: false,
        repo: false
      }
    };
  },

  handleChange: function (key, event) {
    var state = {};
    state[key] = event.target.value;
    this.setState(state);
  },

  doSearch: function (e) {
    e.preventDefault();

    var errors = {
      username: false,
      repo: false
    };

    if (!this.state.username) {
      errors.username = 'ERROR.';
    }

    if (!this.state.repo) {
      errors.repo = 'ERROR.';
    }

    if (!this.state.username || !this.state.repo) {
      this.setState({
        errors: errors
      });
      return;
    }

    this.setState({
      errors: {
        username: false,
        repo: false
      }
    });

    Actions.getReleases(this.state.username + '/' + this.state.repo);
  },

  doDemo: function (e) {
    e.preventDefault();
    Actions.getReleases('ekonstantinidis/gitify');
  },

  validateUsername: function () {
    if (this.state.errors.username) {
      return 'error';
    }
  },

  validateRepo: function () {
    if (this.state.errors.repo) {
      return 'error';
    }
  },

  render: function () {
    return (
      <div className='container search-form'>
        <div className='row'>

          <form>
            <div className='col-md-offset-2 col-md-3'>
              <Input
                className='form-control input-lg'
                type='text'
                value={this.state.username}
                placeholder="username"
                bsStyle={this.validateUsername()}
                hasFeedback
                onChange={this.handleChange.bind(this, 'username')} />
            </div>

            <div className='col-md-4'>
              <Input
                className='form-control input-lg'
                type='text'
                value={this.state.repo}
                placeholder="repository"
                bsStyle={this.validateRepo()}
                hasFeedback
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
