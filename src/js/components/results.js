var React = require('react');
var Reflux = require('reflux');
var Actions = require('../actions/actions');
var RepositoryStore = require('../stores/repository');
var _ = require('underscore');

var SearchForm = React.createClass({
  mixins: [
    Reflux.connect(RepositoryStore, 'releases')
  ],

  getInitialState: function () {
    return {
      releases: []
    };
  },

  render: function () {
    var releases;

    if (this.state.releases) {
      releases = (
        _.map(this.state.releases, function (obj) {
          return <div>{obj.name}</div>;
        })
      );
    }

    return (
      <div>
        {this.state.releases ? releases : <div>No Releases</div> }
      </div>
    );
  }
});

module.exports = SearchForm;
