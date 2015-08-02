var React = require('react');
var Reflux = require('reflux');
var Loading = require('reloading');
var Actions = require('../actions/actions');
var RepositoryStore = require('../stores/repository');
var Release = require('../components/release.js');
var _ = require('underscore');

var Results = React.createClass({
  mixins: [
    Reflux.connect(RepositoryStore, 'releases')
  ],

  getInitialState: function () {
    return {
      repo: null,
      releases: [],
      loading: this.props.loading
    };
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState({
      loading: nextProps.loading
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
        <Loading shouldShow={this.props.loading} faIcon='fa fa-refresh fa-spin' />
        {this.state.repo ? <h1><i className='fa fa-github' />{this.state.repo}</h1> : null }
        {this.state.releases ? releases : <div>No Releases</div> }
      </div>
    );
  }
});

module.exports = Results;
