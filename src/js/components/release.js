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
        <h3 className='downloads'>
          {this.props.details.assets[0].download_count}
          <i className='fa fa-download' />
        </h3>
      );
    }

    return (
      <div className='release'>
        <div className='page-header'>
          <h3>{this.props.details.name}</h3>
          {this.props.details.prerelease ?
            <span className='label label-warning'>Prerelease</span> : null }
          <a href={this.props.details.html_url} target='_blank'>
            <i className='fa fa-external-link'></i>
          </a>
          {count}
        </div>
        <p className='lead'>
          <pre>
            {this.props.details.body ? this.props.details.body : 'No description available' }
          </pre>
        </p>
      </div>
    );
  }
});

module.exports = Release;
