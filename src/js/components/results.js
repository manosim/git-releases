var React = require('react');
var Reflux = require('reflux');
var Loading = require('reloading');
var Actions = require('../actions/actions');
var RepositoryStore = require('../stores/repository');
var Release = require('../components/release.js');
var _ = require('underscore');

var Results = React.createClass({
  mixins: [
    Reflux.connect(RepositoryStore, 'releases'),
    Reflux.listenTo(Actions.getReleases.completed, 'gotReleases'),
    Reflux.listenTo(Actions.getReleases.failed, 'failedReleases')
  ],

  getInitialState: function () {
    return {
      repo: null,
      releases: [],
      loading: this.props.loading,
      errors: false
    };
  },

  componentWillReceiveProps: function (nextProps) {
    this.setState({
      loading: nextProps.loading
    });
  },

  gotReleases: function () {
    var username = RepositoryStore._repo.split('/')[0];
    var repo = RepositoryStore._repo.split('/')[1];
    var params = '/?username=' + username + '&repo=' + repo;
    history.pushState({}, null, params);

    this.setState({
      repo: RepositoryStore._repo,
      errors: false
    });
  },

  failedReleases: function () {
    this.setState({
      errors: true
    });
  },

  render: function () {
    var releases;

    if (this.state.releases) {
      releases = (
        _.map(this.state.releases, function (obj) {
          return <Release details={obj} key={obj.id} />;
        })
      );
    }

    return (
      <div className='results'>
        <Loading
          className='loading'
          shouldShow={this.props.loading}
          faIcon='fa fa-refresh fa-spin' />
        {this.state.repo ? <h1><i className='fa fa-github' />{this.state.repo}</h1> : null }
        {this.state.errors ?
          <div className='alert alert-danger'>
            Oops! We couldn't get information about this repo. Please check if {this.state.repo} exists.
          </div>
        : null }
        {this.state.releases ? releases : <div>No Releases</div> }
      </div>
    );
  }
});

module.exports = Results;
