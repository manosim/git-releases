var React = require('react');
var Reflux = require('reflux');
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
      releases: []
    };
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
      <div>
        {this.state.releases ? releases : <div>No Releases</div> }
      </div>
    );
  }
});

module.exports = Results;
