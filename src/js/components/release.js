var React = require('react');
var Reflux = require('reflux');
var Actions = require('../actions/actions');
var RepositoryStore = require('../stores/repository');
var Release = require('../components/release.js');
var _ = require('underscore');

var Release = React.createClass({
  mixins: [
    Reflux.connect(RepositoryStore, 'releases')
  ],

  getInitialState: function () {
    return {
      releases: []
    };
  },

  render: function () {
    var count;

    if (!_.isEmpty(this.props.details.assets)) {
      count = (
        <span className='downloads'>
          {this.props.details.assets[0].download_count}
          <i className='fa fa-download' />
        </span>
      );
    }

    return (
      <div className='release'>
        <h3 className='page-header'>
          {this.props.details.name}
          <a href={this.props.details.html_url} target='_blank'><i className='fa fa-external-link'></i></a>
          {count}
        </h3>
      </div>
    );
  }
});

module.exports = Release;
