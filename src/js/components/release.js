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

  parseDate: function () {
    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    var dateFormat = new Date(this.props.details.published_at);
    return dateFormat.getDate() + ' ' + monthNames[dateFormat.getMonth()];
  },

  render: function () {
    var count, assetSize;

    if (!_.isEmpty(this.props.details.assets)) {
      var size = (parseInt(this.props.details.assets[0].size) / 1000000).toFixed(2);

      count = (
        <h3 className='downloads'>
          {this.props.details.assets[0].download_count}
          <i className='fa fa-download' />
        </h3>
      );

      assetSize = (
        <div>
          <dt><span className='octicon octicon-file-zip'></span></dt>
          <dd>{size} mb</dd>
        </div>
      );
    }

    return (
      <div className='release'>
        <div className='page-header'>
          <h3>
            <a href={this.props.details.html_url} target='_blank'>{this.props.details.name}</a>
          </h3>
          {count}
        </div>
        <div className='row'>
          <div className='col-md-8'>
            {this.props.details.prerelease ?
              <div>
                <span className='label label-warning'>Prerelease</span></div>
            : null }

            <pre>
              {this.props.details.body ? this.props.details.body : 'No description available' }
            </pre>
          </div>

          <div className='col-md-4'>
            <dl className='dl-horizontal'>
              <dt><i className='fa fa-calendar-o' /></dt>
              <dd>{this.parseDate()}</dd>

              <dt><span className='octicon octicon-tag'></span></dt>
              <dd>{this.props.details.tag_name}</dd>

              {assetSize}
            </dl>
          </div>

        </div>
      </div>
    );
  }
});

module.exports = Release;
